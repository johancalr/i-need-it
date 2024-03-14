/**
 * Calculate total price of a set of products
 * @param {Array} products cartProducts: Array of objects with price attibute
 * @returns {number} total price
 */
const totalPrice = (products) => {
  const total = products.reduce((acc, product) => acc + product.price, 0);
  return total;
};


const filteredProductsByTitle = (products, searchValue) => {
  return products.filter(product =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const filteredProductsByCategory = (products, category) => {
  return products.filter(product =>
    formalizeCategory(product.category)===category
  );
};

const formalizeCategory = (route) => {
  route = route.replace("'", "");
  route = route.replace(" ", "_");
  return route;
}

export {totalPrice, filteredProductsByTitle, filteredProductsByCategory, formalizeCategory}