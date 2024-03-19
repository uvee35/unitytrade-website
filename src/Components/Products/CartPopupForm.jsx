import React from "react";
import "./CartPopupForm.css"; // Import CSS file for styling

function CartPopupForm({ cart, removeFromCart, increaseQuantity, decreaseQuantity, handleCheckout, onClose }) {
  // Calculate total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-popup">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>Shopping Cart</h2>
      {/* Render cart items */}
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img className="cart-item-image" src={item.image} alt={item.name} /> {/* Display product image */}
          <div className="cart-item-details">
            <p className="cart-item-name">{item.name}</p> {/* Display product name */}
            <p className="cart-item-price">${item.price}</p> {/* Display product price */}
            <div className="quantity-control">
              {/* Render minus button with onClick handler */}
              <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
              <span className="quantity">{item.quantity}</span> {/* Display product quantity */}
              {/* Render plus button with onClick handler */}
              <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            {/* Render Remove button with onClick handler */}
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      {/* Display total */}
      <div className="total">Total: ${total}</div>
      {/* Render checkout button */}
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartPopupForm;
