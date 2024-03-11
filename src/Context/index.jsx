import { createContext, useState } from "react";

const StoreContext = createContext();

function StoreProvider({children}) {
  const [count, setCount] = useState(0);

  return (
    <StoreContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };