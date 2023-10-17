import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query currentUserQuery {
    authenticatedItem {
      ... on User {
        id
        email
        name
        role {
          id
        }
        cart {
          id
          quantity
          product {
            id
            name
            price
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);

  return data?.authenticatedItem;
};

export default useUser;
