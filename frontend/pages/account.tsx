import { useRouter } from 'next/router';
import useUser from '../utils/useUser';

export default function AccountPage() {
  const router = useRouter();
  const me = useUser();

  if (!me) {
    router.push({
      pathname: '/signin',
    });
  }

  return (
    <div>
      <p>Hello world!</p>
      {/* TODO:
        Checkbox settings list:
          - Light mode/Dark mode
          - Toggle for auto-popout of cart after successfully adding new product
          - Toggle for auto-redirecting admin to product page after successfully implementing (incase of multiple items to add).
      */}
    </div>
  );
}
