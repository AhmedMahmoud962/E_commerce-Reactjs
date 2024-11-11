import React from "react";
import "./BrandLogo.css";
import { BrandData } from "../BrandLogo/BrandData";
const BrandLogo = () => {
  return (
    <div className="brand-logos-container">
      <div className="brand-logos-wrapper">
        {BrandData.map((brand, index) => (
          <div key={index} className="brand-logo">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="logo-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogo;
