import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb'
export const Products = () => {
  const { AllData } = useContext(ShopContext)
  const { productId } = useParams()
  const product = AllData.find((e) => e.id === Number(productId))
  console.log(product)
  return (
    <>
      <div className="container">
        <Breadcrumb product={product} />
        <h1>{product.productName}</h1>
        <p>{product.description}</p>
        <img src={product.productImage} alt={product.productImage} />
        <p>Price: ${product.currentPrice}</p>
      </div>
    </>
  )
}

export default Products
