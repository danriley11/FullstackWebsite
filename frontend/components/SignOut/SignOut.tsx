import { CURRENT_USER_QUERY } from '../../utils/useUser';
import { SIGN_OUT_MUTATION } from './SignOut.graphql';
import { useMutation } from '@apollo/client';

const SignOut = () => {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    // TODO: Create "successfully signed out" page
  });

  return (
    <button type="button" onClick={signout}>
      Sign out
    </button>
  );
};

export default SignOut;
