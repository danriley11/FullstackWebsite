import Head from 'next/head';
import { IsLoggedOut } from '../utils/isLoggedOut';
import useUser from '../utils/useUser';
import { Heading1, Heading2, P } from '../components/styles/core/typography';

export default function AccountPage() {
  IsLoggedOut();
  const user = useUser();

  // TODO: Enhance this to check .env key instead of undefined
  const isAdmin = user?.role?.id !== undefined;

  return (
    <div>
      <Head>
        <title>Bespoke designs | Account</title>
      </Head>

      <div>
        <Heading1>Hello {user?.email}!</Heading1>

        <P>
          Here at Bespoke Designs by Sharon, we strive to produce tailored products, each different from the last and there's no
          reason your website experience with us shouldn't be the same!
        </P>
        <P>Below you can find all the customising options for our website and your preference:</P>
        <br />
        <Heading2>Available</Heading2>

        <br />
        <Heading2>Coming soon!</Heading2>
        <div>
          <input type="checkbox" disabled />
          <span> Light mode / Dark mode</span>
        </div>
        <div>
          <input type="checkbox" disabled />
          <span> Toggle auto-popout cart after adding a new product.</span>
        </div>
        <div>
          <input type="number" disabled />
          <span> Choose how many items to show per products page.</span>
        </div>

        {isAdmin && (
          <>
            <br />
            <Heading2>Admin options</Heading2>

            <div>
              <input type="checkbox" disabled />
              <span>Toggle auto-redirect to product page after adding new item</span>
            </div>
          </>
        )}
      </div>

      {/* TODO:
        Checkbox settings list:
          - Light mode/Dark mode
          - Toggle for auto-popout of cart after successfully adding new product
          - Toggle for auto-redirecting admin to product page after successfully implementing (incase of multiple items to add).
          - Define how many products to show per page (var = perPage; config.js)
      */}
    </div>
  );
}
