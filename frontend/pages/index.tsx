import Head from 'next/head';
import { ButtonLink } from '../components/styles/buttons/buttons';

export default function IndexPage() {
  return (
    <>
      <header>
        <h1>Welcome to Bespoke Designs by Sharon!</h1>
      </header>

      <div>
        <p>This space is the home of all my products and is currently undergoing further development and fine-tuning.</p>
        <p>Please also note that this site currently only supports desktop and will support tablet and mobile in time.</p>
        <p>
          For further information about the development of this website, feel free to check it out at{' '}
          <ButtonLink target="_blank" href="https://www.dansdevden.com">
            DansDevDen.com
          </ButtonLink>{' '}
          and navigate to the Showcasing suite.
        </p>
      </div>
    </>
  );
}
