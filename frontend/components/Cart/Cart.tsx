import calcTotalPrice from '../../utils/calcTotalPrice';
import { useCart } from '../../utils/cartState';
import formatMoney from '../../utils/formatMoney';
import useUser from '../../utils/useUser';
import CartStyles, { CartItemStyles, CloseButton } from './Cart.styles';
import RemoveFromCart from './RemoveFromCart';

const CartItem = ({ cartItem, allCartItems }) => {
  const product = cartItem.product;

  if (!product) return null;
  return (
    <CartItemStyles>
      <img src={product.photo.image.publicUrlTransformed} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{formatMoney(product.price * cartItem.quantity)}</p>
        <em>
          {cartItem.quantity} &times; {formatMoney(product.price)}
        </em>
      </div>
      <RemoveFromCart cartItem={cartItem} allCartItems={allCartItems} />
    </CartItemStyles>
  );
};

const Cart = () => {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();

  if (!me) {
    return <p>No cart details currently available...</p>;
  }
  return (
    <CartStyles open={cartOpen}>
      <header>
        <div>{me.name}'s cart</div>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>

      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} allCartItems={me.cart} />
        ))}
      </ul>

      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
      </footer>
    </CartStyles>
  );
};

export default Cart;
