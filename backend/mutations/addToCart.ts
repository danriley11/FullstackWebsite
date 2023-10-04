/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

const addToCart = async (
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext,
): Promise<CartItemCreateInput> => {
  console.log('Adding to cart :)');

  // Confirm user signed in
  const session = context.session as Session;
  console.log('session', session);
  if (!session.itemId) {
    throw new Error('Please log in to add to your cart.');
  }

  // Query users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: session.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity',
  });

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(existingCartItem);
    console.log(`There are already ${existingCartItem.quantity}, adding another!`);

    // Check if current item already exists in cart
    // If(true) { quantity++ }
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }

  // If(false) { createNewCartItem }
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: session.itemId } },
    },
    resolveFields: false,
  });
};

export default addToCart;
