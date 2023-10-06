import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import addToCart from './addToCart';
import checkout from './checkout';

// Faking GQL template literal for VSCode syntax highlights
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  // typeDefs is the name of method, what args it takes, what it returns
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
      checkout(token: String!): Order
    }
  `,
  // Links to nodejs fns that run when those things are requested via graphql api
  resolvers: {
    Mutation: {
      addToCart,
      checkout,
    },
  },
});
