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
        <div className="product-detail-page container">
          <div className="product-detail-content">
            {/* Product Image */}
            <div className="product-image">
              <img src={product.productImage} alt={product.productName} />
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
      </div>
    </>
  )
}

export default Products
