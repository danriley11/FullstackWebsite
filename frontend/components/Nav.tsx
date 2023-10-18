import Link from 'next/link';
import StyledNav from './styles/Nav.styles';
import useUser, { CURRENT_USER_QUERY } from '../utils/useUser';
import SignOut from './SignOut/SignOut';
import { useCart } from '../utils/cartState';
import CartBadge from './Cart/CartBadge';
import { useQuery } from '@apollo/client';

const Nav = () => {
  const user = useUser();
  const { openCart } = useCart();

  // TODO: Enhance this to check .env key instead of undefined
  const isAdmin = user?.role?.id !== undefined;

  return (
    <StyledNav>
      <Link href="/products">Products</Link>

      {user && (
        <>
          {isAdmin && <Link href="/sell">Sell</Link>}
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
          <button type="button" onClick={openCart}>
            Cart 🛒
            <CartBadge
              count={user.cart.reduce((sumtotal, cartItem) => sumtotal + (cartItem.product ? cartItem.quantity : 0), 0)}
            />
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
