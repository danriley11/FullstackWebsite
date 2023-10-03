import RequestPasswordReset from '../components/PasswordReset/RequestPasswordReset';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import { StyledSignIn } from '../components/styles/SignInPage.styles';

const SignInPage = () => {
  return (
    <StyledSignIn>
      <SignIn />
      <SignUp />
      <RequestPasswordReset />
    </StyledSignIn>
  );
};

export default SignInPage;
