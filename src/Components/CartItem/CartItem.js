import React from "react";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="product-details">
        <span>{product.name}</span>
        <span>EGP{product.price}</span>
      </div>
      <div className="quantity">
        <span>Qty: {product.quantity}</span>
      </div>
      <div className="total-price">
        <span>EGP{product.price * product.quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
