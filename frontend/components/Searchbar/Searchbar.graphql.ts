import gql from 'graphql-tag';

// allProducts is keystoneGQL api ref and we rename it to searchTerms
// searchTerms will be the named object holding the return of the query
export const SEARCH_PRODUCTS_QUERY = gql`
  query searchProductsQuery($searchTerm: String!) {
    searchTerms: allProducts(where: { AND: [{ name_contains_i: $searchTerm }, { status: "AVAILABLE" }] }) {
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
