import { createContext } from "react";
import {BestProductData} from "../assets/data"
export const BestProduct = createContext(null);


function BestContextProvider(props) {
  const contextValue = { BestProductData };
  return (
    <>
      <BestProduct.Provider value={contextValue}>
        {props.children}
      </BestProduct.Provider>
    </>
  )
}

export default BestContextProvider