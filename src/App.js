import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderCom/Header.js";
// import Hero from "./Components/Hero/Hero.js";
// import BrandLogo from "./Components/BrandLogo/BrandLogo.js";
// import Category from "./Components/Category/Category.js";
// import BestProduct from "./Components/Products/BestProducts.js";
// import AllProduct from "./Components/Products/AllProduct.js";
// import Banner from "./Components/Banner/Banner.js";
// import NewArrival from "./Components/NewArrival/NewArrival.js";
import React from 'react';

import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx";
import About from "./Pages/About.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} > </Route>
        <Route path=":productId" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopCategory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
