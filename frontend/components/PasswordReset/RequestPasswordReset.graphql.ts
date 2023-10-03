import gql from 'graphql-tag';

export const REQUEST_PASSWORD_RESET_MUTATION = gql`
  mutation requestPasswordResetMutation($passwordResetEmail: String!) {
    sendUserPasswordResetLink(email: $passwordResetEmail) {
      code
      message
    }
  }
`;
