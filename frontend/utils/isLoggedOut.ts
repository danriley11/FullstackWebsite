import { useRouter } from 'next/router';
import useUser from './useUser';
import { useEffect } from 'react';

export const IsLoggedOut = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.push({
        pathname: '/signin',
      });
    }
  });
};
