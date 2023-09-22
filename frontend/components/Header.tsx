import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';
import { lightCoralSolid } from './styles/core/colours';
import { Divider } from './styles/core/divider';

const Logo = styled.h1`
  color: ${lightCoralSolid};
  font-size: 4rem;
  position: relative;
  cursor: pointer;
`;

const HeaderStyles = styled.header`
  .bar {
    /* border-bottom: 10px solid var(--black, black); */
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: stretch;
    margin: 0 2rem;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    border-bottom: 1px solid var(--black, black);
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link href="/">
          <Logo>Bespoke Designs by Sharon</Logo>
        </Link>
        <Nav />
      </div>
      <Divider />
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
};

export default Header;
