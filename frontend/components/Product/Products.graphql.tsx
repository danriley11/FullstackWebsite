import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY = gql`
  query allProductsQuery($first: Int, $skip: Int = 0) {
    allProducts(first: $first, skip: $skip, where: { status: "AVAILABLE" }) {
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
