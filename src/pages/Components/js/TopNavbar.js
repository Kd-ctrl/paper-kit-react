// src/components/TopNavBar.js
import React from "react";
import { Link } from "react-router-dom"; 
import "../css/TopNavBar.css";

const TopNavBar = () => {
  return (
    <nav className="top-navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/"> <img src={require("assets/img/Droidal-Colour.png")} /></Link> 
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
