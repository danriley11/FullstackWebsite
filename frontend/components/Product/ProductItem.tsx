import Link from 'next/link';
import { Product } from '../../path-to-output';
import FormatMoney from '../../utils/formatMoney';
import { Item, PriceTag, Title } from './Products.styles';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

type ProductProps = {
  product: Product;
};
const ProductItem = ({ product }: ProductProps) => {
  return (
    <Item>
      <PriceTag>{FormatMoney(product.price)}</PriceTag>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <p>{product.description}</p>
      {/* TODO: Add buttons to delete item */}
      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}>
          Edit ✏️
        </Link>

        <DeleteProduct id={product.id} productName={product.name}>
          Delete ❌
        </DeleteProduct>
      </div>
    </Item>
  );
};

export default ProductItem;
