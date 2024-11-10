import React from 'react'
import { createContext } from 'react'
import { all_Products } from '../assets/data'

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
  const contextValue = { all_Products }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
