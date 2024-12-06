import React from "react";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-inner">
          <ul className="list-inline list-unstyled">
            <li>
              <Link to="/">Home / </Link>
            </li>
            <li>
              <Link to="/shop">Shop / </Link>
            </li>
            <li>{product.category} /</li>
            <li>{product.productName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
