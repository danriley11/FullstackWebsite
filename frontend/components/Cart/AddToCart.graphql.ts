import gql from 'graphql-tag';

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCartMutation($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
