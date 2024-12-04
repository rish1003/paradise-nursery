import React from "react";

const PlantCard = ({ plant, addToCart }) => (
  <div className="plant-card">
    <img src={plant.image} alt={plant.name} />
    <h3>{plant.name}</h3>
    <p>${plant.price}</p>
    <button 
      onClick={() => addToCart(plant)} 
      disabled={plant.inCart}>
      {plant.inCart ? "Added to Cart" : "Add to Cart"}
    </button>
  </div>
);

export default PlantCard;
