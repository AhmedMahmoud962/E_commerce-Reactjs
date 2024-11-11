import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/products/banner.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <p className="category-text">Categories</p>
        <h1 className="banner-title">
          Enhance Your <br /> Music Experience
        </h1>
        <Link to="#" className="banner-button">
          Shop Now
        </Link>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Music Speaker" loading="lazy" />
      </div>
    </div>
  );
};

export default Banner;
