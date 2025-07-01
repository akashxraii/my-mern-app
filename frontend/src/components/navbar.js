import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-circle">N</div>
          <span className="logo-text">NotesNExam</span>
        </div>

        <button
          className="navbar-hamburger"
          onClick={handleMenuToggle}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Menu items that toggle */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Study Notes</a></li>
          <li><a href="#">Practice Exams</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Blog</a></li>
        </ul>

        {/* Login button toggles with menu */}
        <div className={`navbar-buttons ${menuOpen ? 'open' : ''}`}>
          <button className="login-btn">Login</button>
        </div>

        {/* Sign Up button always visible */}
        {/* ✅ Sign Up next to hamburger */}
        <div className="navbar-signup">
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
