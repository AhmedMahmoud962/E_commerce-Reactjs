// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
export const Products = () => {
  const { all_Products } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_Products.find(
    (product) => product.id === Number(product.id),
  )
  return <div></div>
}

export default Products
