import React from "react";
import "./Breadcrumb.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb-inner">
          <ul className="list-inline list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Shop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
