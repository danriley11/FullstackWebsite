import { useEffect } from 'react';
import useForm from '../../utils/useForm';
import Form from '../styles/Form.styles';
import { SIGNIN_MUTATION } from './SignIn.graphql';
import { useMutation } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import useUser, { CURRENT_USER_QUERY } from '../../utils/useUser';
import router from 'next/router';

const SignIn = () => {
  const user = useUser();
  const { inputs, handleChange, resetForm } = useForm(
    {
      email: '',
      password: '',
    },
    false,
  );

  const [signin, { data }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  console.log('signin data', data);

  async function handleSubmit(event) {
    event.preventDefault();
    await signin();
    resetForm();
  }

  // Redirect user to their account page on successful sign in
  useEffect(() => {
    if (user) {
      router.push({
        pathname: `/account`,
      });
    }
  }, [user]);

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign into your account</h2>

      <DisplayError error={data?.authenticateUserWithPassword} />

      <fieldset>
        <label htmlFor="email">
          Email:{' '}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="samson@thewise.com"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <br />
        </label>

        <label htmlFor="password">
          Password:{' '}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            autoComplete="password"
            value={inputs.password}
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
