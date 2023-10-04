import { CURRENT_USER_QUERY } from '../../utils/useUser';
import { ADD_TO_CART_MUTATION } from './AddToCart.graphql';
import { useMutation } from '@apollo/client';

const AddToCart = ({ id }) => {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <>
      <button type="button" onClick={addToCart} disabled={loading}>
        Add to cart{' '}
      </button>
    </>
  );
};

export default AddToCart;
