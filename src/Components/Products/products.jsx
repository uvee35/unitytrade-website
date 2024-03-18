import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./productcard.css";


function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
      <div className="cart-icon" onClick={handleCheckout}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>
      {selectedProduct && (
        <div>
          <h2>{selectedProduct.title}</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            width="100"
          />
          <p>{selectedProduct.description}</p>
          <button onClick={() => setSelectedProduct(null)}>
            Back to Products
          </button>
        </div>
      )}
      {showCheckout ? (
        <div>
          <h2>Checkout</h2>
          {/* Simplified Checkout Form */}
          <p>Your order is ready. Implement checkout form here.</p>
          <button onClick={() => setShowCheckout(false)}>Back to Cart</button>
        </div>
      ) : (
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
      )}
    </div>
  );
}
export default Products;
