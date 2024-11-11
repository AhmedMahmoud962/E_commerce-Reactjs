import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faShoppingCart,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { AllData } from "../../assets/data";
import FilterByCategory from "../FilterByCatergory/FilterByCategory";
import "./Products.css";

const Product = () => {
  const [itemData, setItemData] = useState(AllData);

  const filterByCategory = (category) => {
    if (category === "all") {
      setItemData(AllData);
    } else {
      const filteredData = AllData.filter(
        (product) => product.category === category
      );
      setItemData(filteredData);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-dark title-products">
        Explore Our Products
      </h1>
      <FilterByCategory filterByCategory={filterByCategory} />
      <div className="row">
        {itemData.map((product, index) => (
          <div className="col-md-3 col-sm-6" key={index} >
            <div className="product-grid">
              <div className="product-image">
                <img
                  className="pic-1"
                  src={product.productImage}
                  alt={product.productName}
                />
                {product.New && (
                  <span className="product-discount-label">{product.New}</span>
                )}
              </div>
              <div className="product-content">
                <h3 className="title">
                  <Link to={`/product/${product.id}`}>
                    {product.productName}
                  </Link>
                </h3>
                <div className="price">
                  {product.currentPrice}
                  <span>{product.Price}</span>
                </div>
              </div>
              <ul className="social">
                <li>
                  <Link to={`/product/${product.id}`} data-tip="Quick View">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </li>
                <li>
                  <Link to="" data-tip="Wishlist">
                    <FontAwesomeIcon icon={faHeart} />
                  </Link>
                </li>
                <li>
                  <Link to="" data-tip="Add to Cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Link>
                </li>
                <li>
                  <Link to="" data-tip="Compare">
                    <FontAwesomeIcon icon={faRandom} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="#" className="view-all">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Product;
