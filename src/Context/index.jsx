import { createContext, useEffect, useState } from "react";
import { filteredProductsByTitle } from "../utils";

const StoreContext = createContext();

function StoreProvider({children}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productSearching, setProductSearching] = useState('');
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
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(respose => respose.json())
    .then(data => setProducts(data));
  }, [])
  useEffect(() => {
    console.log(productSearching);
    if (productSearching) {
      setFilteredProducts((filteredProductsByTitle(products, productSearching)));
    }
    else {
      setFilteredProducts(products);
    }
  }, [products, productSearching]);
  return (
    <StoreContext.Provider value={{
      products,
      productSearching,
      filteredProducts,
      setProductSearching,
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