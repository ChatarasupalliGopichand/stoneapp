import React from "react";
import "./Navbar.css"; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => alert("Home clicked")}>Home</button>
        </li>
        <li>
          <button onClick={() => alert("About clicked")}>About</button>
        </li>
        <li>
          <button onClick={() => alert("Products clicked")}>Products</button>
        </li>
        <li>
          <button onClick={() => alert("Contact clicked")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
