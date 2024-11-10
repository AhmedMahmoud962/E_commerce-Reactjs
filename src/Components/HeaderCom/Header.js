import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          E-commerce
        </Link>
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${activeMenu === "home" ? "active" : ""}`}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`nav-link ${activeMenu === "products" ? "active" : ""}`}
            onClick={() => handleMenuClick("products")}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className={`nav-link ${activeMenu === "about" ? "active" : ""}`}
            onClick={() => handleMenuClick("about")}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${activeMenu === "contact" ? "active" : ""}`}
            onClick={() => handleMenuClick("contact")}
          >
            Contact
          </Link>
        </nav>
        <div className="header-actions">
          <Link
            to="/cart"
            className={`icon-link ${activeMenu === "cart" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link
            to="/login"
            className={`icon-link ${activeMenu === "login" ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
