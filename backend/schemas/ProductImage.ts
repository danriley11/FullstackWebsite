import 'dotenv/config';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

// console.log('============================');
// console.log('cloudinary', cloudinary);

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'bespokedesigns',
};

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product'],
    },
  },
});
