import { useMutation } from '@apollo/client';
import { REMOVE_ALL_FROM_CART_MUTATION, REMOVE_ALL_OF_ITEM_MUTATION } from './RemoveFromCart.graphql';
import DisplayError from '../ErrorMessage';
import { CURRENT_USER_QUERY } from '../../utils/useUser';

const RemoveFromCart = ({ cartItem }) => {
  const [
    removeAllOfItem,
    { data: removeAllOfItemData, loading: removeAllOfItemLoading, error: removeAllOfItemError },
  ] = useMutation(REMOVE_ALL_OF_ITEM_MUTATION, {
    variables: { id: cartItem.id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  // Handle error
  if (removeAllOfItemError) {
    return <DisplayError error={removeAllOfItemError} />;
  }

  return (
    <div style={{ display: 'flex', justifySelf: 'flex-end' }}>
      {/* Increment 1 of the item */}
      <button
        type="button"
        disabled={true}
        onClick={() => {
          // check if last item
          // true ? confirm() : increase()
        }}>
        +
      </button>

      {/* TODO: Remove all of the 1 item */}
      <button
        type="button"
        disabled={removeAllOfItemLoading}
        onClick={() => {
          if (confirm(`Are you sure you want to remove all ${cartItem.product.name}'s?`)) {
            console.log(`Deleting ${cartItem.product.name}`);
            removeAllOfItem();
          }
        }}>
        Remove item
      </button>

      {/* Remove 1 of the item */}
      <button
        type="button"
        disabled={true}
        onClick={() => {
          // check if last item
          // true ? confirm() : reduce()
        }}>
        -
      </button>
    </div>
  );
};

export default RemoveFromCart;
