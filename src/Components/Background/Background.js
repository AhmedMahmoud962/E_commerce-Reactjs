import React from "react";
import "./Background.css";
const HeroSection = (props) => {
  return (
    <section>
      <div className="eco-mid-background">
        <img src={props.backgroundImg} alt="BackgroundImg" loading="lazy" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
