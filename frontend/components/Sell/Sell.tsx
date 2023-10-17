import useForm, { VendProductInputs } from '../../utils/useForm';
import Form from '../styles/Form.styles';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT_MUTATION } from './Sell.graphql';
import DisplayError from '../ErrorMessage';
import { ALL_PRODUCTS_QUERY } from '../Product/Products.graphql';
import Router, { useRouter } from 'next/router';
import useUser from '../../utils/useUser';
import { IsLoggedOut } from '../../utils/isLoggedOut';

const VendProduct = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm<VendProductInputs>({
    image: '',
    name: '',
    price: 0,
    description: '',
  });

  const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    // Whenever a new product is called, can refetch a query that uses affected data table
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });

  IsLoggedOut();

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault();

        // Submit input fields to backend
        const res = await createProduct();

        // Clear fields after submission
        clearForm();

        // Move user to new products page
        // TODO: Make this a toggleable function via checkbox incase there's numerous items to be added in one session
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        });
      }}>
      <DisplayError error={error} />

      <fieldset disabled={loading} aria-busy={loading}>
        <br />

        <label htmlFor="image">
          Image:
          <input required type="file" id="image" name="image" onChange={handleChange} />
          <br />
        </label>

        <label htmlFor="name">
          Name:{' '}
          <input type="text" id="name" name="name" placeholder="Product name" value={inputs.name} onChange={handleChange} />
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

        <button type="submit">+ Add product</button>

        <br />
        <br />

        <button type="button" onClick={resetForm}>
          Reset form
        </button>

        <button type="button" onClick={clearForm}>
          Clear form
        </button>
      </fieldset>
    </Form>
  );
};

export default VendProduct;
