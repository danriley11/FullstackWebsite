import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-bespoke-designs';

const sessionConfig = {
  // How long does the user stay logged in
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // add data seeding here
  },
  lists: createSchema({
    // schema items here
  }),
  // Do we want people to have access to keystoneUI
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  //   TODO: add session values here
});
