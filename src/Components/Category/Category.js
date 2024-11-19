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
        </ul>
      </div>
    </section>
  );
};

export default Category;
