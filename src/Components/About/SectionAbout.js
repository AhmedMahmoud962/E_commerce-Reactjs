import React from "react";
import "./SectionAbout.css"; // Import CSS for styling
import { Link } from "react-router-dom";
import { AboutData } from "../../assets/data";
const SectionAbout = () => {
  return (
    <>
      {AboutData.map((item) => (
        <section className="about-us" key={item.id}>
          <div className="main-img">
            <img src={item.Image} alt="About Us" loading="lazy" />
          </div>
          <div className="about-content">
            <h4 className="data">{item.date}</h4>
            <h1>{item.title}</h1>
            <hr />
            <p>{item.description}</p>
            <div className="last-part">
              <Link className={item.cName}>{item.buttonText}</Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default SectionAbout;
