import { ReactNode } from 'react';
import Page from '../components/Page';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/givenStyles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../utils/withData';
import { CartStateProvider } from '../utils/cartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type MyAppProps = {
  Component: ReactNode;
  pageProps: any;
};
const MyApp = ({ Component, pageProps, apollo }: MyAppProps) => {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    </ApolloProvider>
  );
};

// Tell Next.js to fetch all the [Apollo] queries in the child component
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
