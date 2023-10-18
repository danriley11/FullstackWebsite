import { useMutation } from '@apollo/client';
import calcTotalPrice from '../../utils/calcTotalPrice';
import { useCart } from '../../utils/cartState';
import formatMoney from '../../utils/formatMoney';
import useUser, { CURRENT_USER_QUERY } from '../../utils/useUser';
import Checkout from '../Checkout/Checkout';
import { Heading1, Heading2, Heading3, P } from '../styles/core/typography';
import CartStyles, { CartItemStyles, CloseButton } from './Cart.styles';
import RemoveFromCart from './RemoveFromCart';
import { REMOVE_ALL_FROM_CART_MUTATION } from './RemoveFromCart.graphql';
import DisplayError from '../ErrorMessage';

const CartItem = ({ cartItem }) => {
  const product = cartItem.product;

  if (!product) return null;
  return (
    <CartItemStyles>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />

      <div>
        <Heading1>{product.name}</Heading1>
        <P>{formatMoney(product.price * cartItem.quantity)}</P>
        <P>
          {cartItem.quantity} &times; {formatMoney(product.price)}
        </P>
      </div>

      <RemoveFromCart cartItem={cartItem} />
    </CartItemStyles>
  );
};

const Cart = () => {
  const user = useUser();
  const { cartOpen, closeCart } = useCart();

  const [
    removeAllItemsFromCart,
    { data: removeAllItemsData, loading: removeAllItemsLoading, error: removeAllItemsError },
  ] = useMutation(REMOVE_ALL_FROM_CART_MUTATION);

  const handleRemoveAllItemsFromCart = async (ids) => {
    const { data } = await removeAllItemsFromCart({
      variables: { ids },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
  };

  if (!user) {
    return null;
  }
  if (removeAllItemsError) {
    return <DisplayError error={removeAllItemsError} />;
  }
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Heading1>{user.email}'s cart</Heading1>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>

      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>

      <footer>
        {/* TODO: Remove all items from cart */}
        <button
          style={{ width: '100%' }}
          type="button"
          // TODO: Query is correct but function is not
          disabled={user.cart.length === 0 || removeAllItemsLoading}
          onClick={() => {
            if (confirm(`Are you sure you want to clear your cart?`)) {
              console.log(`Clearing cart...`);
              const ids = user.cart.map((cartItem) => cartItem.id);
              console.log(ids);
              handleRemoveAllItemsFromCart(ids);
            }
          }}>
          Clear cart
        </button>

        <p>{formatMoney(calcTotalPrice(user.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
};

export default Cart;
