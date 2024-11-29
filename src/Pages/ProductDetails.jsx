import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
export const Products = () => {
  const { AllData } = useContext(ShopContext)
  const { productId } = useParams()
  const product = AllData.find((e) => e.id === Number(productId))
  console.log(product)
  return (
    <>
      <div className="container">
        <h1>{product.productName}</h1>
        <img src={product.productImage} alt={product.productImage} />
        <p>Price: ${product.currentPrice}</p>
      </div>
    </>
  )
}

export default Products
