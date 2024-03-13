/**
 * Calculate total price of a set of products
 * @param {Array} products cartProducts: Array of objects with price attibute
 * @returns {number} total price
 */
const totalPrice = (products) => {
  const total = products.reduce((acc, product) => acc + product.price, 0);
  return total;
};

export {totalPrice}