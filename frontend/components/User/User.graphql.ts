import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query currentUserQuery {
    authenticatedItem {
      ... on User {
        id
        email
        name
        # TODO: query the cart
      }
    }
  }
`;
