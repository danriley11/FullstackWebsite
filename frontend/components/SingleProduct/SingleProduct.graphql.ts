import gql from 'graphql-tag';

const SINGLE_ITEM_QUERY = gql`
  query singleItemQuery($id: ID!) {
    Product(where: { id: $id }) {
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
      name
      price
      description
    }
  }
`;

export default SINGLE_ITEM_QUERY;
