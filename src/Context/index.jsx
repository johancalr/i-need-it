import { createContext, useState } from "react";

const StoreContext = createContext();

function StoreProvider({children}) {
  const [count, setCount] = useState(0);
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

  return (
    <StoreContext.Provider value={{
      count,
      setCount,
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
      closeChecking
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };