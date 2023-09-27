import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS_QUERY } from './Products.graphql';
import { ProductsList } from './Products.styles';
import ProductItem from './ProductItem';
import { perPage } from '../../config';

type Props = {
  page: number;
};
const Products = ({ page }: Props) => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      first: perPage,
      skip: (page - 1) * perPage,
    },
  });

  // TODO: Replace below with loading and error styledComponents
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ProductsList>
        {data.allProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsList>
    </div>
  );
};

export default Products;
