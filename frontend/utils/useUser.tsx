import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
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

const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);

  return data?.authenticatedItem;
};

export default useUser;
