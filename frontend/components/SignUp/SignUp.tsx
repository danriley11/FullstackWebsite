import useForm, { SignUpInputs } from '../../utils/useForm';
import Form from '../styles/Form.styles';
import { SIGNUP_MUTATION } from './SignUp.graphql';
import { useMutation } from '@apollo/client';
import DisplayError from '../ErrorMessage';

const SignUp = () => {
  const { inputs, handleChange, resetForm } = useForm<SignUpInputs>({
    signUpName: '',
    signUpEmail: '',
    signUpPassword: '',
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await signup().catch(console.error);
    console.log('signUp', data, loading, error);
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign up for an account</h2>

      <DisplayError error={error} />

      {data?.createUser && <p>You have successfully signed up with {data.createUser.email}!</p>}

      <fieldset>
        <label htmlFor="signUpName">
          Name:{' '}
          <input
            type="text"
            id="signUpName"
            name="signUpName"
            placeholder="samson thewise"
            autoComplete="name"
            value={inputs.signUpName}
            onChange={handleChange}
          />
          <br />
        </label>

        <label htmlFor="signUpEmail">
          Email:{' '}
          <input
            type="email"
            id="signUpEmail"
            name="signUpEmail"
            // TODO: prevent autocomplete
            autoComplete="off"
            placeholder="samson@thewise.com"
            value={inputs.signUpEmail}
            onChange={handleChange}
          />
          <br />
        </label>

        <label htmlFor="signUpPassword">
          Password:{' '}
          <input
            type="password"
            id="signUpPassword"
            name="signUpPassword"
            // TODO: prevent autocomplete
            autoComplete="off"
            placeholder="********"
            value={inputs.signUpPassword}
            onChange={handleChange}
          />
          <br />
        </label>

        <button type="submit">Sign up</button>
      </fieldset>
    </Form>
  );
};

export default SignUp;
