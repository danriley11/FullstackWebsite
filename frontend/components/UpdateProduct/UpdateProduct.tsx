import { useQuery, useMutation } from '@apollo/client';
import SINGLE_ITEM_QUERY from '../SingleProduct/SingleProduct.graphql';
import { UPDATE_SINGLE_PRODUCT_MUTATION } from './UpdateProduct.graphql';
import DisplayError from '../ErrorMessage';
import Form from '../styles/Form.styles';
import useForm from '../../utils/useForm';
import { Product } from '../../path-to-output';

const UpdateProduct = ({ id }) => {
  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(
    SINGLE_ITEM_QUERY,
    {
      variables: {
        id,
      },
    },
  );

  const { inputs, handleChange, resetForm, clearForm } = useForm<Product>(
    queryData?.Product || {
      name: '',
      description: '',
      price: '',
    },
    queryLoading,
  );

  const [
    updateProduct,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_SINGLE_PRODUCT_MUTATION, {
    variables: {
      id,
      name: inputs.name,
      description: inputs.description,
      price: inputs.price,
    },
    onError(error) {
      console.log(error);
    },
  });

  if (queryLoading) return <p>Loading...</p>;

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault();
        const res = updateProduct();
        console.log(res);
      }}>
      <DisplayError error={queryError || updateError} />

      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <br />

        <label htmlFor="name">
          Name:{' '}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product name"
            // TODO: Type correctly
            value={inputs.name}
            onChange={handleChange}
          />
          <br />
        </label>

        <label htmlFor="price">
          Price:{' '}
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Product price (1000 = $10)"
            value={inputs.price}
            onChange={handleChange}
          />
          <br />
        </label>

        <label htmlFor="description">
          Description:{' '}
          <textarea
            id="description"
            name="description"
            placeholder="Product description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">+ Update product</button>
      </fieldset>
    </Form>
  );
};

export default UpdateProduct;
