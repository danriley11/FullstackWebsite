import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS_QUERY } from './Products.graphql';
import { ProductsList } from './Products.styles';
import ProductItem from './ProductItem';

const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);

  // Can replace below with loading or error components/visuals
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
