import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from '../../utils/useUser';
import { SIGN_OUT_MUTATION } from './SignOut.graphql';
import { useMutation } from '@apollo/client';
import nProgress from 'nprogress';

const SignOut = () => {
  const router = useRouter();
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSignOut = async (event) => {
    event.preventDefault();

    nProgress.start();

    signout();

    router.push({
      pathname: `/signin`,
    });

    nProgress.done();
  };

  return (
    <button type="button" onClick={handleSignOut}>
      Sign out
    </button>
  );
};

export default SignOut;
