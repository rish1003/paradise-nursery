import React from "react";
import "../styles/CartPage.css";
import { Link } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
  const increaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toFixed(2)} x {item.quantity}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button onClick={() => removeItem(item.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-summary">
        <p>Total Items: {totalCount}</p>
        <p>Total Price: ₹{totalAmount.toFixed(2)}</p>
        <div className="cart-buttons">
          <button className="continue-shopping"><Link to="/products">
          Continue Shopping
        </Link></button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
