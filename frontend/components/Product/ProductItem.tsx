import Link from 'next/link';
import { Product } from '../../path-to-output';
import FormatMoney from '../../utils/formatMoney';
import { Item, PriceTag, Title } from './Products.styles';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import AddToCart from '../Cart/AddToCart';

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

        {/* TODO: Inside account settings, add toggle for auto-popout of cart after successfully adding new product */}
        <AddToCart id={product.id} />

        <DeleteProduct id={product.id} productName={product.name}>
          Delete ❌
        </DeleteProduct>
      </div>
    </Item>
  );
};

export default ProductItem;
