import gql from 'graphql-tag';

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? What types are they?
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
        # Has a relationship
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
    }
  }
`;
