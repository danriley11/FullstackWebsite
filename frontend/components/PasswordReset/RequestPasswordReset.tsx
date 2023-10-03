import useForm, { RequestPasswordResetInputs } from '../../utils/useForm';
import Form from '../styles/Form.styles';
import { useMutation } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import { REQUEST_PASSWORD_RESET_MUTATION } from './RequestPasswordReset.graphql';

const RequestPasswordReset = () => {
  const { inputs, handleChange, resetForm } = useForm<RequestPasswordResetInputs>(
    {
      passwordResetEmail: '',
    },
    false,
  );

  const [requestPasswordReset, { data, error }] = useMutation(REQUEST_PASSWORD_RESET_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await requestPasswordReset().catch(console.error);
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request a password reset</h2>

      <DisplayError error={error} />

      {/* TODO: Enhance response (use same/similar query as logged-in view) 
      1. If(emailExists) return "Success! Your reset email has been sent."
      2. If(!emailExists) return "Unfortunately the provided email has not been registered with us, please sign up!"
      3. If(awaiting check for emailExists) return "If the provided email exists, you will receive your link shortly!"
    */}
      {data?.sendUserPasswordResetLink === null && (
        <p>If the provided email exists, you will receive your link shortly!</p>
      )}

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

        <button type="submit">Request reset</button>
      </fieldset>
    </Form>
  );
};

export default RequestPasswordReset;
