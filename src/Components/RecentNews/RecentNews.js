import React from "react";
import "./RecentNews.css";
import { Link } from "react-router-dom";
import { RecentData } from "../../assets/data";

const RecentNews = () => {
  return (
    <div>
      <div className="upper">
        <h1 className="title">
          Recent <span>News</span>
        </h1>
        <div className="wrapper">
          {RecentData.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-banner">
                  <p className="category-tag popular">{item.category}</p>
                  <img
                    className="banner-img"
                    src={item.Image}
                    alt="article"
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <p className="blog-date">{item.date}</p>
                  <h4 className="blog-title">{item.title}</h4>
                  <p className="blog-description">{item.description}</p>
                  <Link to="#" className="read-more">
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
