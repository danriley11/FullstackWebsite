const CalcTotalPrice = (cart) => {
  return cart.reduce((sumTotal, cartItem) => {
    // If empty cart:
    if (!cartItem.product) return sumTotal;

    // If occupied cart:
    return sumTotal + cartItem.quantity * cartItem.product.price;
  }, 0);
};

export default CalcTotalPrice;
