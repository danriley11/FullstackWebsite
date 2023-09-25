// This filename convention is specific to Next.JS when rendering based on the url

import { useQuery } from '@apollo/client';
import SINGLE_ITEM_QUERY from '../../components/SingleItem/SingleItem.graphql';
import DisplayError from '../../components/ErrorMessage';
import Head from 'next/head';
import { ProductStyles } from '../../components/SingleItem/SingleItem.styles';

type SingleProductProps = {
  query: string;
};
const SingleProductPage = ({ query }: SingleProductProps) => {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      // TODO: Type correctly
      id: query.id,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <DisplayError error={error} />;

  const { Product } = data;

  // Render product-specific content
  return (
    <ProductStyles>
      {/* Utilise NextJS component to update Tab text */}
      <Head>
        <title>Bespoke designs | {Product.name}</title>
      </Head>

      <img src={Product.photo.image.publicUrlTransformed} alt={Product.photo.alt} />
      <div>
        <p>{Product.name}</p>
        <p>{Product.price}</p>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleProductPage;