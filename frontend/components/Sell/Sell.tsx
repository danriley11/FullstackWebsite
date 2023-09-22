import { Fragment, useState } from 'react';
import useForm from '../../utils/useForm';
import Form from '../styles/Form.styles';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT_MUTATION } from './Sell.graphql';
import DisplayError from '../ErrorMessage';

const VendProduct = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });

  const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
  });

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault();

        // Submit input fields to backend
        await createProduct();
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
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product name"
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
