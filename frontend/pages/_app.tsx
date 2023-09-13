import { ReactNode } from 'react';
import Page from '../components/Page';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/givenStyles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type MyAppProps = {
  Component: ReactNode;
  pageProps: any;
};
const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default MyApp;
