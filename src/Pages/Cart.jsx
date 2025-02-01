import React from 'react'
import './css/CartStyle.css'
import { Helmet } from 'react-helmet-async'

const Cart = () => {
  return (
    <div>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Cart" />
        <meta name="keywords" content="cart, e-commerce" />
      </Helmet>
      <div className="cart">
        <h1>SHOPPING CART</h1>
        <div className="shop-name">Shop name: the shop</div>
        <div className="cart-header">
          <span>SL#</span>
          <span>Product details</span>
          <span>Unit price</span>
          <span>Qty</span>
          <span>Price</span>
        </div>

        <div className="shipping-method">
          <h3>Choose shipping method</h3>
          {/* Add shipping method options here */}
        </div>
        <div className="order-note">
          <h3>Order note (Optional)</h3>
          <textarea placeholder="Add a note to your order"></textarea>
        </div>
        <div className="totals">
          <div className="subtotal">
            <span>Sub total</span>
            <span>EGP</span>
          </div>
          <div className="tax">
            <span>Tax</span>
            <span>EGP0.00</span>
          </div>
          <div className="shipping">
            <span>Shipping</span>
            <span>EGP0.00</span>
          </div>
          <div className="discount">
            <span>Discount on product</span>
            <span>- EGP</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>EGP</span>
          </div>
        </div>
        <div className="coupon-code">
          <input type="text" placeholder="Coupon code" />
          <button>Apply code</button>
        </div>
        <div className="checkout">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
