import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/ProductListingPage.css";

const plants = [
  { id: 1, name: "Snake Plant", price: 20.99, category: "Air Purifying", image: "assets/snake_image.jpg" },
  { id: 2, name: "Aloe Vera", price: 15.49, category: "Aromatic", image: "assets/aloe_image.jpeg" },
  { id: 3, name: "Spider Plant", price: 18.99, category: "Air Purifying", image: "assets/spider_image.jpg" },
  { id: 4, name: "Lavender", price: 12.99, category: "Aromatic", image: "assets/lavender_image.jpeg" },
  { id: 5, name: "Peace Lily", price: 22.49, category: "Low Maintenance", image: "assets/peace_image.png" },
  { id: 6, name: "Fiddle Leaf Fig", price: 30.99, category: "Low Maintenance", image: "assets/fiddle_image.jpeg" },
];

const ProductListingPage = ({ cart, setCart }) => {

  const [disabledItems, setDisabledItems] = useState(() => {
    const savedDisabledItems = JSON.parse(localStorage.getItem("disabledItems"));
    return savedDisabledItems || [];
  });

  const categories = Array.from(new Set(plants.map((plant) => plant.category)));

  const addToCart = (plant, quantity) => {
    const existingItem = cart.find(item => item.id === plant.id);
    if (existingItem) {

      setCart(cart.map(item =>
        item.id === plant.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {

      setCart([...cart, { ...plant, quantity }]);
    }

    const newDisabledItems = [...disabledItems, plant.id];
    setDisabledItems(newDisabledItems);
    localStorage.setItem("disabledItems", JSON.stringify(newDisabledItems)); 
  };

  return (
    <div className="product-listing-page">
      <div className="category-container">
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />
                    <h3>{plant.name}</h3>
                    <p>₹{plant.price.toFixed(2)}</p>
                    <div className="quantity-selector">
                      <label>Quantity: </label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        id={`quantity-${plant.id}`}
                      />
                    </div>
                    <div className="add-to-cart">
                      <button
                        onClick={() => {
                          const quantity = parseInt(
                            document.getElementById(`quantity-${plant.id}`).value
                          ) || 1;
                          addToCart(plant, quantity);
                        }}
                        disabled={disabledItems.includes(plant.id)} 
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
