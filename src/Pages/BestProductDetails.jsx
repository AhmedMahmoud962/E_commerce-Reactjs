import React, { useContext } from 'react'
import { BestProduct } from '../Context/BestContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb'
import './css/ShopCategory.css'
import { Helmet } from "react-helmet-async";


function BestProductDetails() {
  const { BestProductData } = useContext(BestProduct)
  const { productId } = useParams()
  const product = BestProductData.find(
    (product) => product.id === Number(productId),
  )
  return (
    <>
      <Helmet>
        <title>{product.productName}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Breadcrumb product={product} />
      <div className="product-detail-page container">
        <div className="product-detail-content">
          {/* Product Image */}
          <div className="product-image">
            <img
              src={product.productImage} // Replace with the actual image URL or path
              alt={product.productName}
            />
          </div>
          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">{product.productName}</h1>
            <h2>Details of Product</h2>
            <p>{product.description}</p>
            {/* Size Selector */}
            <label htmlFor="size">Select Size:</label>
            <select id="size" className="size-selector">
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
            <div className="product-actions">
              <input
                type="number"
                className="quantity"
                min="1"
                defaultValue="1"
              />
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestProductDetails
