import React from "react";
import Slider from "react-slick";
import { HeroData } from "../../assets/data";
import "./Hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings} className="slider">
      {HeroData.map((slide, index) => (
        <div key={index} className="slide-container">
          <div
            className="slide-background"
            style={{ backgroundImage: `url(${slide.UrlImage})` }}
          >
            <div className="slide">
              <div className="content">
                <div className="badge">{slide.badge}</div>
                <h1>{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
                <p className="description">{slide.description}</p>
                <Link to="/shop" href={slide.buttonLink} className="shop-now">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
