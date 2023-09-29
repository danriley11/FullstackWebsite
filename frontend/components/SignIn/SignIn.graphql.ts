import gql from 'graphql-tag';

export const SIGNIN_MUTATION = gql`
  mutation signinMutation($signInEmail: String!, $signInPassword: String!) {
    authenticateUserWithPassword(email: $signInEmail, password: $signInPassword) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
