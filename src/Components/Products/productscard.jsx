import React from "react";
import "./productcard.css";

const ProductCard = ({ product, addToCart, handleProductClick }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => handleProductClick(product)}>View Details</button>
    </div>
  );
};

export default ProductCard;
