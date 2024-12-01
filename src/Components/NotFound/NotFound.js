import React from "react";
import { Link } from "react-router-dom";
import ImageError from "../../assets/ghost-img.png";
import "./NotFound.css";
function NotFound() {
  return (
    <>
      <main className="main">
        <section className="home">
          <div className="home__container container">
            <div className="home__data">
              <span className="home__subtitle">Error 404</span>
              <h1 className="home__title">Hey Buddy</h1>
              <p className="home__description">
                We can't seem to find the page <br /> you are looking for.
              </p>
              <Link to="/" className="home__button">
                Go Home
              </Link>
            </div>

            <div className="home__img">
              <img src={ImageError} alt="Not Found" />
              <div className="home__shadow"></div>
            </div>
          </div>

          {/* <footer className="home__footer">
                    <span>(554) 987-654</span>
                    <span>|</span>
                    <span>info@company.com</span>
                </footer> */}
        </section>
      </main>
    </>
  );
}

export default NotFound;
