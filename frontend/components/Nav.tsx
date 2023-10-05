import Link from 'next/link';
import StyledNav from './styles/Nav.styles';
import useUser from '../utils/useUser';
import SignOut from './SignOut/SignOut';
import { useCart } from '../utils/cartState';
import CartBadge from './Cart/CartBadge';

const Nav = () => {
  const user = useUser();
  const { openCart } = useCart();

  return (
    <StyledNav>
      <Link href="/products">Products</Link>

      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
          <button type="button" onClick={openCart}>
            Cart 🛒
            <CartBadge count={user.cart.reduce((sumtotal, cartItem) => sumtotal + cartItem.quantity, 0)} />
          </button>
        </>
      )}

      {!user && (
        <>
          <Link href="/signin">Sign in</Link>
        </>
      )}
    </StyledNav>
  );
};

export default Nav;
