import React, { useState } from "react";
import "../CSS/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <h1>
          coin<span className="primary">Hub</span>
        </h1>
        <ul className={click ? "active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/coin" onClick={handleLinkClick}>
              Coin
            </Link>
          </li>
          <li>
            <Link to="/exchange" onClick={handleLinkClick}>
              Exchange
            </Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
