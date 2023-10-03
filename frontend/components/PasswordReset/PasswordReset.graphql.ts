import gql from 'graphql-tag';

export const PASSWORD_RESET_MUTATION = gql`
  mutation passwordResetMutation(
    $passwordResetEmail: String!
    $passwordResetPassword: String!
    $passwordResetToken: String!
  ) {
    redeemUserPasswordResetToken(
      email: $passwordResetEmail
      password: $passwordResetPassword
      token: $passwordResetToken
    ) {
      code
      message
    }
  }
`;
