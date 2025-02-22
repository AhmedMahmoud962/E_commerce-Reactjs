import { createContext } from "react";
import { AllData } from "../assets/data";

export const ShopContext = createContext(null);
  const ShopContextProvider = (props) => {
  const contextValue = { AllData };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;