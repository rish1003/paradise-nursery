import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1>Paradise Nursery</h1>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="cart-link">
        <span className="cart-icon">
  <img height="30px" src="assets//shopping.png" alt="Shopping Cart" />
</span>

          <span className="cart-count">{cartItemCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
