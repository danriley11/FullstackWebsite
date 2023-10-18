// This filename convention is specific to Next.JS when rendering based on the url

import { useQuery } from '@apollo/client';
import SINGLE_ITEM_QUERY from '../../components/SingleProduct/SingleProduct.graphql';
import DisplayError from '../../components/ErrorMessage';
import Head from 'next/head';
import { ProductDetails, ProductStyles } from '../../components/SingleProduct/SingleProduct.styles';
import { Query } from '../../utils/globalTypes';
import FormatMoney from '../../utils/formatMoney';
import AddToCart from '../../components/Cart/AddToCart';
import { useRouter } from 'next/router';
import { Heading1, Heading2, Heading3, P } from '../../components/styles/core/typography';
import { Fragment } from 'react';

const SingleProductPage = ({ query }: Query) => {
  const router = useRouter();
  const productId = router.asPath.split('/').at(2);
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
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
        <title>Bespoke Designs | {Product.name}</title>
      </Head>

      <img src={Product.photo.image.publicUrlTransformed} alt={Product.photo.alt} />

      <ProductDetails>
        <Fragment>
          <Heading1>{Product.name}</Heading1>
          <Heading2>{FormatMoney(Product.price)}</Heading2>
          <AddToCart id={productId} />
        </Fragment>

        <Fragment>
          <div>
            <Heading3>Description</Heading3>
            <P>{Product.description}.</P>
          </div>
          <div>
            <Heading3>Material</Heading3>
            <P>Information coming soon.</P>
          </div>
          <div>
            <Heading3>Dimensions</Heading3>
            <P>Information coming soon.</P>
          </div>
          <div>
            <Heading3>Care instructions</Heading3>
            <P>Information coming soon.</P>
          </div>
        </Fragment>
      </ProductDetails>
    </ProductStyles>
  );
};

export default SingleProductPage;
