import gql from 'graphql-tag';

// allProducts is keystoneGQL api ref and we rename it to searchTerms
// searchTerms will be the named object holding the return of the query
export const SEARCH_PRODUCTS_QUERY = gql`
  query searchProductsQuery($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          # , { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
