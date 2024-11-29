import React, { useContext } from 'react'
import { BestProduct } from '../Context/BestContext'
import { useParams } from 'react-router-dom'

function BestProductDetails() {
  const { BestProductData } = useContext(BestProduct)
  const { productId } = useParams()
  const product = BestProductData.find(
    (product) => product.id === Number(productId),
  )
  return (
    <>
      <div className="container">
        <h1>{product.productName}</h1>
        <img
          src={product.productImage}
          alt={product.productImage}
          style={{ width: '40%' }}
        />
        <p>Price: ${product.currentPrice}</p>
      </div>
    </>
  )
}

export default BestProductDetails
