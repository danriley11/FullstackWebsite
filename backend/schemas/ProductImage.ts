import { cloudinaryImage } from '@keystone-next/cloudinary';
import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_NAME,
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
  },
});
