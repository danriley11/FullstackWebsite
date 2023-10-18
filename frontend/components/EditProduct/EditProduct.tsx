import { useRouter } from 'next/router';

type Props = {
  productId: string;
};
const EditProduct = ({ productId }: Props) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        router.push({
          pathname: '/update',
          query: { id: productId },
        });
      }}>
      Edit ✏️
    </button>
  );
};

export default EditProduct;
