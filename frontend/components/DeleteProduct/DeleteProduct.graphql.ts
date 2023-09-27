import gql from 'graphql-tag';

export const DELETE_PRODUCT_MUTATION = gql`
  mutation deleteProductMutation($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;
