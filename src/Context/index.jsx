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

  return (
    <StoreContext.Provider value={{
      count,
      setCount,
      detailing,
      openProductDetail,
      closeProductDetail,
      productInfo,
      setProductInfo
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };