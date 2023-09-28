import { useEffect, useState } from 'react';
import { Product } from '../path-to-output';

type SignIn = {
  email: string;
  password: string;
};
// TODO: Cleanup typing errors found on SignIn.tsx and UpdateProduct.tsx
const useForm = (initial: Product | SignIn, isLoading: boolean) => {
  // create a state object for inputs
  const [inputs, setInputs] = useState(initial);

  useEffect(() => {
    setInputs(initial);
  }, [isLoading]);

  const handleChange = (event) => {
    let { value, name, type } = event.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = event.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    // TODO: correctly type
    setInputs(blankState);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};

export default useForm;
