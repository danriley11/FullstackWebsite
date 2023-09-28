import Link from 'next/link';
import StyledNav from './styles/Nav.styles';
import useUser from '../utils/useUser';
import SignOut from './SignOut/SignOut';

const Nav = () => {
  const user = useUser();

  return (
    <StyledNav>
      <Link href="/products">Products</Link>

      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
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
