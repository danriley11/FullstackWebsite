import gql from 'graphql-tag';

// export const INCREASE_ITEM_ONCE_MUTATION = gql`
//   mutation increaseItemOnceMutation($id: ID!, $data: CartItemUpdateInput) {
//     updateCartItem(id: $id, data: { quantity: +1 }) {
//       id
//     }
//   }
// `;

// export const REDUCE_ITEM_ONCE_MUTATION = gql`
//   mutation reduceItemOnceMutation($id: ID!) {
//     updateCartItem(id: $id, data: { quantity: -1 }) {
//       id
//     }
//   }
// `;

export const REMOVE_ALL_OF_ITEM_MUTATION = gql`
  mutation removeAllOfItemMutation($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

export const REMOVE_ALL_FROM_CART_MUTATION = gql`
  mutation removeAllFromCartMutation($ids: [ID!]) {
    deleteCartItems(ids: $ids) {
      id
    }
  }
`;
