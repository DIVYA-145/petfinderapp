import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo1.png"; // adjust path if different

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="PetFinder Logo" />
        PetFinder
      </div>

      {/* Hamburger Icon */}
      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink onClick={closeMenu} to="/">Home</NavLink>
        <NavLink onClick={closeMenu} to="/add-pet">Add Pet</NavLink>
        <NavLink onClick={closeMenu} to="/lost-pets">Lost Pets</NavLink>
        <NavLink onClick={closeMenu} to="/found-pets">Found Pets</NavLink>
        <NavLink onClick={closeMenu} to="/about">About</NavLink>
        <NavLink onClick={closeMenu} to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
