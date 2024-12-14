import React from "react";
import "../styles/Footer.css"; // Make sure this path is correct

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p>&copy; 2024 Stonepedia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
