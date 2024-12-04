const CartItem = ({ item, updateQuantity, removeItem }) => (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div>
        <button onClick={() => updateQuantity(item, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item, 1)}>+</button>
      </div>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => removeItem(item)}>Delete</button>
    </div>
  );
export default CartItem;