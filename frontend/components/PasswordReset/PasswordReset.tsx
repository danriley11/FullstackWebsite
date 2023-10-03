import useForm, { PasswordResetInputs } from '../../utils/useForm';
import Form from '../styles/Form.styles';
import { useMutation } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import { PASSWORD_RESET_MUTATION } from './PasswordReset.graphql';

type Props = {
  token: string;
};
const PasswordReset = ({ token }: Props) => {
  const { inputs, handleChange, resetForm } = useForm<PasswordResetInputs>(
    {
      passwordResetEmail: '',
      passwordResetPassword: '',
      passwordResetToken: token,
    },
    false,
  );

  const [resetPassword, { data, error: queryError }] = useMutation(PASSWORD_RESET_MUTATION, {
    variables: inputs,
  });

  const tokenError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await resetPassword().catch(console.error);
    console.log('res', res);
    console.log('errors', queryError, tokenError);
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset your password</h2>

      <DisplayError error={queryError || tokenError} />

      {data?.redeemUserPasswordResetToken === null && <p>Success! You can now sign in.</p>}

      <fieldset>
        <label htmlFor="passwordResetEmail">
          Email:{' '}
          <input
            type="email"
            id="passwordResetEmail"
            name="passwordResetEmail"
            // TODO: prevent autocomplete
            autoComplete="off"
            placeholder="samson@thewise.com"
            value={inputs.passwordResetEmail}
            onChange={handleChange}
          />
          <br />
        </label>

        <label htmlFor="passwordResetPassword">
          Password:{' '}
          <input
            type="password"
            id="passwordResetPassword"
            name="passwordResetPassword"
            // TODO: prevent autocomplete
            autoComplete="off"
            placeholder="********"
            value={inputs.passwordResetPassword}
            onChange={handleChange}
          />
          <br />
        </label>

        <button type="submit">Request reset</button>
      </fieldset>
    </Form>
  );
};

export default PasswordReset;
