import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; // react slick
import "slick-carousel/slick/slick-theme.css"; // react slick
import ShopContextProvider from "./Context/ShopContext";
import BestContextProvider from "./Context/BestContext";
// import { ThemeProvider } from "./Components/Toggle/ToggleTheme";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ThemeProvider>
  <BrowserRouter>
    <ShopContextProvider>
      <BestContextProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BestContextProvider>
    </ShopContextProvider>
  </BrowserRouter>
  // </ThemeProvider>
);
