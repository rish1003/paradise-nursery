import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import "./styles/Responsive.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Router>
      <Header cartItemCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
