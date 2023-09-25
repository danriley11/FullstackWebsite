import { ReactNode } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_PRODUCT_MUTATION } from './DeleteProduct.graphql';

const updateLocalMemory = (cache, payload) => {
  cache.evict(cache.identify(payload.data.deleteProduct));
};

type DeleteProductProps = {
  id: string;
  children: ReactNode;
  productName: string;
};
const DeleteProduct = ({ id, children, productName }: DeleteProductProps) => {
  const [deleteProduct, { data, loading, error }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update: updateLocalMemory,
  });

  return (
    <button
      type="button"
      onClick={() => {
        // TODO: Modal message for confirmation
        if (confirm(`Are you sure you want to delete ${productName}?`)) {
          console.log(`Deleting ${productName}`);
          deleteProduct();
        }
      }}>
      {children}
    </button>
  );
};

export default DeleteProduct;
