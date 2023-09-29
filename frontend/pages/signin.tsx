import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import { StyledSignIn } from '../components/styles/SignInPage.styles';

const SignInPage = () => {
  return (
    <StyledSignIn>
      <SignIn />
      <SignUp />
    </StyledSignIn>
  );
};

export default SignInPage;
