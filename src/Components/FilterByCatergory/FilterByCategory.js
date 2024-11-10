import React from "react";
import "./FilterByCategory.css";

const FilterByCategory = ({ filterByCategory }) => {
  const categories = ["all", "electronics", "clothes", "furniture", "shoes"];

  return (
    <div className="filter-by-category">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => filterByCategory(category)}
          className="btn-category"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterByCategory;
