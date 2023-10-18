import gql from 'graphql-tag';

export const PAGINATION_QUERY = gql`
  query paginationQuery {
    _allProductsMeta(where: { status: "AVAILABLE" }) {
      count
    }
  }
`;
