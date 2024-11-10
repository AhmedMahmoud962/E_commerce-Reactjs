import React from "react";
import "./Category.css";
import { CategoryData } from "../../assets/data";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="section collection">
      <div className="container">
        <ul className="collection-list has-scrollbar">
          {CategoryData.map((category, index) => (
            <li key={index}>
              <div
                className="collection-card"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <h3 className="h4 card-title">{category.name}</h3>
                <Link to="/shop" className="btn btn-secondary">
                  <span>Explore All</span>
                </Link>
              </div>
            </li>
          ))}
          {/* <li>
            <div className="collection-card men">
              <h3 className="h4 card-title">Men Collections</h3>
              <Link to="#" className="btn btn-secondary">
                <span>Explore All</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="collection-card women">
              <h3 className="h4 card-title">Women Collections</h3>
              <Link to="#" className="btn btn-secondary">
                <span>Explore All</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="collection-card sports">
              <h3 className="h4 card-title">Sports Collections</h3>
              <Link to="#" className="btn btn-secondary">
                <span>Explore All</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="collection-card accessories">
              <h3 className="h4 card-title">Accessories</h3>
              <Link to="#" className="btn btn-secondary">
                <span>Explore All</span>
              </Link>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Category;
