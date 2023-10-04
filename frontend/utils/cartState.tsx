import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider = ({ children }) => {
  // Store cart data and functionality
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  return <LocalStateProvider value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}>{children}</LocalStateProvider>;
};

const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { CartStateProvider, useCart };
