import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderCom/Header.js";
import React from "react";
import Footer from "./Components/Footer/Footer.js";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"; //ScrollToTop to return to top
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Contact from "./Pages/Contact.jsx";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import BestProductDetails from "./Pages/BestProductDetails.jsx";
import NotFound from "./Components/NotFound/NotFound.js";
// import { useTheme } from './Components/Toggle/ToggleTheme';

// const ThemeToggleButton = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// };

function App() {
  return (
    <div className="App">
      {/* <ThemeToggleButton /> */}
      <Header />
      {/* ScrollToTop to return to top */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/bestProductDetails/:productId"
          element={<BestProductDetails />}
        />
        <Route path="/products" >
        <Route index={true} element={<ProductDetails />} />
        <Route path=":productId" element={<ProductDetails />} />
        </Route> 
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopCategory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
