/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput, OrderCreateInput } from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';

const graphql = String.raw;
interface Arguments {
  token: string;
}

const checkout = async (
  root: any,
  // args for fn are below:
  { token }: Arguments,
  context: KeystoneContext,
): Promise<OrderCreateInput> => {
  // Confirm user is signed in
  const userId = context.session.itemId;
  if (!userId) {
    throw new Error('Please log in to initiate an order');
  }

  // Query current user
  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
            id
            name
            email
            cart {
                id
                quantity
                product {
                    id
                    name
                    price
                    description
                    photo {
                        id
                        image {
                            id
                            publicUrlTransformed
                        }
                    }
                }
            }
        `,
  });
  console.log(user);

  // Calculate total price of order
  //   Filter out cartItems that have been removed via frontend
  const cartItems = user.cart.filter((cartItem) => cartItem.product);
  const amount = cartItems.reduce((sumTotal: number, cartItem: CartItemCreateInput) => {
    return sumTotal + cartItem.quantity * cartItem.product.price;
  }, 0);
  console.log(amount);

  // Create payment using stripe library
  const charge = await stripeConfig.paymentIntents
    .create({
      amount,
      currency: 'AUD',
      confirm: true,
      payment_method: token,
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.message);
    });
  console.log(charge);

  // Convert cartItems to orderItems
  const orderItems = cartItems.map((cartItem) => {
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photo: { connect: { id: cartItem.product.photo.id } },
    };
    return orderItem;
  });

  // Create the order and return it (save it to DB)
  const order = await context.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: userId } },
    },
  });

  //   Clean up old cart items
  const cartItemIds = cartItems.map((cartItem) => cartItem.id);
  await context.lists.CartItem.deleteMany({
    ids: cartItemIds,
  });
  return order;
};

export default checkout;
