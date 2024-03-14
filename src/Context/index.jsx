import { createContext, useEffect, useState } from "react";
import { filteredProductsByCategory, filteredProductsByTitle } from "../utils";

const StoreContext = createContext();

function StoreProvider({children}) {
  // Products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productSearching, setProductSearching] = useState('');
  // Categories
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  // Product detail display
  const [detailing, setDetailing] = useState(false);
  const openProductDetail = () => setDetailing(true);
  const closeProductDetail = () => setDetailing(false);
  // Product detail info
  const [productInfo, setProductInfo] = useState({});
  // Checkout Side Menu display
  const [checking, setChecking] = useState(false);
  const openChecking = () => setChecking(true);
  const closeChecking = () => setChecking(false);
  // Cart
  const [cartProducts, setCartProducts] = useState([]);
  const removeCartProduct = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filteredProducts);
  };
  // Orders
  const [order, setOrder] = useState([]);
  // Effects
  // Fetch to products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(respose => respose.json())
    .then(data => setProducts(data));
  }, []);
  // Fetch to categories
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(respose => respose.json())
    .then(data => setCategories(data));
  }, []);
  useEffect(() => {
    let productsToShow = [...products];
    if (selectedCategory) {
      productsToShow = filteredProductsByCategory(products, selectedCategory);
    }
    if (productSearching) {
      productsToShow = filteredProductsByTitle(productsToShow, productSearching);
    }
    setFilteredProducts(productsToShow);
  }, [products, productSearching, selectedCategory]);
  return (
    <StoreContext.Provider value={{
      products,
      productSearching,
      setProductSearching,
      filteredProducts,
      categories,
      selectedCategory,
      setSelectedCategory,
      detailing,
      openProductDetail,
      closeProductDetail,
      productInfo,
      setProductInfo,
      cartProducts,
      setCartProducts,
      removeCartProduct,
      checking,
      openChecking,
      closeChecking,
      order,
      setOrder,
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };