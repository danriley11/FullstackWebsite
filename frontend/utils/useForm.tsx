import { useEffect, useState } from 'react';
import { Product } from '../path-to-output';

export type VendProductInputs = {
  image: string;
  name: string;
  price: number;
  description: string;
};
export type SignInInputs = {
  signInEmail: string;
  signInPassword: string;
};
export type SignUpInputs = {
  signUpName: string;
  signUpEmail: string;
  signUpPassword: string;
};
export type RequestPasswordResetInputs = {
  passwordResetEmail: string;
};
export type PasswordResetInputs = {
  passwordResetEmail: string;
  passwordResetPassword: string;
  passwordResetToken: string;
};

type FormInputs =
  | Product
  | VendProductInputs
  | SignInInputs
  | SignUpInputs
  | RequestPasswordResetInputs
  | PasswordResetInputs;

// TODO: Cleanup typing errors found on SignIn.tsx and UpdateProduct.tsx
const useForm = <InitialTypes extends FormInputs>(
  initial: InitialTypes,
  isLoading: boolean = false,
) => {
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
    setInputs(blankState as InitialTypes);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};

export default useForm;
