import React from "react";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitt.png";
import facebook from "../assets/face.jpg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
        </div>

        <small>© 2025 PetFinder. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
