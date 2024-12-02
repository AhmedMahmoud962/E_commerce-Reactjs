import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
function ViewProducts() {
  return (
    <div className="text-center">
      <Link to="/shop" className="view-all">
        View All Products
      </Link>
    </div>
  );
}

export default ViewProducts;
