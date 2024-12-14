import React from "react";
import "./ProductGrid.css"; // Ensure this path is correct

const products = [
  { id: 1, name: "Product 1", price: "$100", description: "Description 1", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Product 2", price: "$150", description: "Description 2", image: "https://via.placeholder.com/200" },
  { id: 3, name: "Product 3", price: "$200", description: "Description 3", image: "https://via.placeholder.com/200" },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
