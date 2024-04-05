import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./productcard.css";
import CartPopupForm from "./CartPopupForm";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [categories, setCategories] = useState(["All", "Electronics", "Fashion", "Jewelery", "Beauty"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Navigate to the checkout page
    navigate("/checkout");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleCartPopup = () => {
    setShowCartPopup(cart.length > 0 ? !showCartPopup : false);
  };

  useEffect(() => {
    if (cart.length === 0 && showCartPopup) {
      setShowCartPopup(false);
    }
  }, [cart.length, showCartPopup]);

  const filteredProducts = products.filter((product) =>
    (selectedCategory === "All" || product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ fontSize: "60px", marginBottom: "40px", color: "white", textShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
        Our Products
      </h1>
      <div className="categories-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%' }}>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)} style={{ flex: 1, textAlign: 'center' }}>
            {category}
          </button>
        ))}
      </div>
      <div className="products-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="cart-icon" onClick={toggleCartPopup}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
        {showCartPopup && (
          <CartPopupForm
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            handleCheckout={handleCheckout} 
            onClose={() => setShowCartPopup(false)}
          />
        )}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
