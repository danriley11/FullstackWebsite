import Head from 'next/head';
import { IsLoggedOut } from '../utils/isLoggedOut';

export default function AccountPage() {
  IsLoggedOut();

  return (
    <div>
      <Head>
        <title>Bespoke designs | Account</title>
      </Head>
      <p>Hello world!</p>
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
