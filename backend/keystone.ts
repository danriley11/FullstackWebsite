import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { insertSeedData } from './seed-data';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-bespoke-designs';

const sessionConfig = {
  // How long does the user stay logged in
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add initial roles here -> will become admin
  },
  passwordResetLink: {
    async sendToken(args) {
      // currently printing out token on server side
      // if this were printed on browser, any user could have their password reset
      console.log('args', args);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        console.log('Connected to the database!');
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },
    // Schemas here
    lists: createSchema({
      User,
      Product,
      ProductImage,
    }),
    // Do we want people to have access to keystoneUI
    ui: {
      //   Only show UI to those who pass this test:
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  }),
);
