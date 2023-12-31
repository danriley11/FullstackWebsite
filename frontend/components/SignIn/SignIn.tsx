import { useEffect } from 'react';
import useForm, { SignInInputs } from '../../utils/useForm';
import Form from '../styles/Form.styles';
import { SIGNIN_MUTATION } from './SignIn.graphql';
import { useMutation } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import useUser, { CURRENT_USER_QUERY } from '../../utils/useUser';
import router from 'next/router';

const SignIn = () => {
  const user = useUser();
  const { inputs, handleChange, resetForm } = useForm<SignInInputs>(
    {
      signInEmail: '',
      signInPassword: '',
    },
    false,
  );

  const [signin, { data }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(event) {
    event.preventDefault();
    await signin();
    resetForm();
  }

  // Redirect user to the products page on successful sign in
  useEffect(() => {
    if (user) {
      router.push({
        pathname: `/products`,
      });
      console.log('Logging in...');
    }
  }, [user]);

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign into your account</h2>

      <DisplayError error={data?.authenticateUserWithPassword} />

      <fieldset>
        <label htmlFor="signInEmail">
          Email:{' '}
          <input
            type="email"
            id="signInEmail"
            name="signInEmail"
            placeholder="samson@thewise.com"
            autoComplete="signInEmail"
            value={inputs.signInEmail}
            onChange={handleChange}
          />
          <br />
        </label>

        <label htmlFor="signInPassword">
          Password:{' '}
          <input
            type="password"
            id="signInPassword"
            name="signInPassword"
            placeholder="********"
            autoComplete="signInPassword"
            value={inputs.signInPassword}
            onChange={handleChange}
          />
          <br />
        </label>

        <button type="submit">Sign in</button>
      </fieldset>
    </Form>
  );
};

export default SignIn;
