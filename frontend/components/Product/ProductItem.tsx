import Link from 'next/link';
import { Product } from '../../path-to-output';
import FormatMoney from '../../utils/formatMoney';
import { Item, PriceTag, Title } from './Products.styles';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import AddToCart from '../Cart/AddToCart';
import useUser from '../../utils/useUser';
import { ButtonLink } from '../styles/buttons/buttons';
import { P } from '../styles/core/typography';

type ProductProps = {
  product: Product;
};
const ProductItem = ({ product }: ProductProps) => {
  const user = useUser();

  // TODO: Enhance this to check .env key instead of undefined
  const isAdmin = user?.role?.id !== undefined;

  return (
    <Item>
      <Link href={`/product/${product.id}`}>
        <PriceTag>{FormatMoney(product.price)}</PriceTag>
      </Link>

      <Link href={`/product/${product.id}`}>
        <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
      </Link>

      <Title>
        <ButtonLink href={`/product/${product.id}`}>{product.name}</ButtonLink>
      </Title>

      <P>{product.description}</P>

      <div className="buttonList">
        {isAdmin && (
          <Link
            href={{
              pathname: 'update',
              query: {
                id: product.id,
              },
            }}>
            Edit ✏️
          </Link>
        )}

        {/* TODO: Inside account settings, add toggle for auto-popout of cart after successfully adding new product */}
        <AddToCart id={product.id} />

        {isAdmin && (
          <DeleteProduct id={product.id} productName={product.name}>
            Delete ❌
          </DeleteProduct>
        )}
      </div>
    </Item>
  );
};

export default ProductItem;
