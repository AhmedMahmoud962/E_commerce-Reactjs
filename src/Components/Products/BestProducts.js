import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEye,
  faHeart,
  faShoppingCart,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { BestProductData } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BestProduct = () => {
  return (
    <div className="container">
      <h1 className="text-center text-dark title-products">
        Best Selling <span>Products</span>
      </h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {BestProductData.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-grid">
              <div className="product-image">
                <img className="pic-1" src={product.productImage} alt="shoes" loading="lazy"  />
                <span className="product-discount-label">
                  {product.Discount}
                </span>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <Link href="#">{product.productName}</Link>
                </h3>
                <p></p>
                <div className="price">
                  {product.currentPrice}
                  <span>{product.Price}</span>
                </div>
              </div>
              <ul className="social">
                <li>
                  <Link href="" data-tip="Quick View">
                    <FontAwesomeIcon icon={faEye} />
                  </Link>
                </li>
                <li>
                  <Link href="" data-tip="Wishlist">
                    <FontAwesomeIcon icon={faHeart} />
                  </Link>
                </li>
                <li>
                  <Link href="" data-tip="Add to Cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </Link>
                </li>
                <li>
                  <Link href="" data-tip="Compare">
                    <FontAwesomeIcon icon={faRandom} />
                  </Link>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestProduct;
