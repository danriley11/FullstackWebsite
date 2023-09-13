import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import { black } from './styles/colours';

type PageProps = {
  cool: string;
  children: string;
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Amiri';
    src: url('/static/Amiri-Regular.woff2')
    format('woff2');
  }
  @font-face {
    font-family: 'Great';
    src: url('/static/GreatVibes-Regular.woff2')
    format('woff2');
  }
  html {
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Amiri', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  header {
    font-family: 'Great';
  }
  header .sub-bar {
    font-family: 'Amiri';
  }
  a {
    text-decoration: none;
    color: ${black};
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'Amiri', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ cool, children }: PageProps) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
};

export default Page;
