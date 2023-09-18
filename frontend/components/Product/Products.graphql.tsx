import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY = gql`
  query {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
