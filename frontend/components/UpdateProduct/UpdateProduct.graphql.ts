import gql from 'graphql-tag';

export const UPDATE_SINGLE_PRODUCT_MUTATION = gql`
  mutation updateSingleProductMutation($id: ID!, $name: String, $description: String, $price: Int) {
    updateProduct(id: $id, data: { name: $name, description: $description, price: $price }) {
      id
      name
      description
      price
    }
  }
`;
