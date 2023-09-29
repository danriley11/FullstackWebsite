import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation signupMutation($signUpEmail: String!, $signUpName: String!, $signUpPassword: String!) {
    createUser(data: { email: $signUpEmail, name: $signUpName, password: $signUpPassword }) {
      id
      email
      name
    }
  }
`;
