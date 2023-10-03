import RequestReset from '../components/PasswordReset/RequestPasswordReset';
import PasswordReset from '../components/PasswordReset/PasswordReset';

export default function PasswordResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <h2>Sorry, you must have a password reset token.</h2>
        <RequestReset />
      </div>
    );
  }

  return (
    <div>
      <PasswordReset token={query.token} />
    </div>
  );
}
