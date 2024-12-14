import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      imageUrl: "https://via.placeholder.com/300",
      name: "Granite Stone",
      description: "Durable and elegant natural stone.",
      price: 120.0,
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      name: "Marble Stone",
      description: "Premium stone with a luxurious finish.",
      price: 150.0,
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      name: "Sandstone",
      description: "Versatile stone for construction and design.",
      price: 100.0,
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
