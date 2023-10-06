import gql from 'graphql-tag';

export const CHECKOUT_MUTATION = gql`
  mutation checkoutMutation($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
