import { useMutation } from '@apollo/client';
import { REMOVE_ALL_FROM_CART_MUTATION, REMOVE_ALL_OF_ITEM_MUTATION } from './RemoveFromCart.graphql';
import DisplayError from '../ErrorMessage';
import { CURRENT_USER_QUERY } from '../../utils/useUser';

const RemoveFromCart = ({ cartItem, allCartItems }) => {
  const [
    removeAllOfItem,
    { data: removeAllOfItemData, loading: removeAllOfItemLoading, error: removeAllOfItemError },
  ] = useMutation(REMOVE_ALL_OF_ITEM_MUTATION, {
    variables: { id: cartItem.id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  let ids = [];
  const [
    removeAllItemsFromCart,
    { data: removeAllItemsData, loading: removeAllItemsLoading, error: removeAllItemsError },
  ] = useMutation(REMOVE_ALL_FROM_CART_MUTATION, {
    variables: {
      ids,
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    },
  });

  // Handle error
  if (removeAllOfItemError) {
    return <DisplayError error={removeAllOfItemError} />;
  }
  if (removeAllItemsError) {
    return <DisplayError error={removeAllItemsError} />;
  }

  return (
    <div>
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

      {/* TODO: Remove all items from cart */}
      <button
        type="button"
        // TODO: Query is correct but function is not
        disabled={true || removeAllItemsLoading}
        onClick={() => {
          if (confirm(`Are you sure you want to clear your cart?`)) {
            console.log(`Clearing cart...`);
            // ids = allCartItems.map((cartItem) => cartItem.id);
            const ids = allCartItems.map((cartItem) => `"${cartItem.id}"`);
            console.log(ids);
            removeAllItemsFromCart();
          }
        }}>
        Clear cart
      </button>
    </div>
  );
};

export default RemoveFromCart;
