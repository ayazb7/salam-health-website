// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../images/logo-with-text.png';

function Navbar() {
  const navigate = useNavigate(); // Initialize the navigate function here

  const handleButtonClick = () => {
    navigate('/book'); // Navigate to /book when the button is clicked
  };

  return (
    <nav className="navbar">
      <img src={LogoImage} alt="Logo" className="logo"/>
      
      <div className="nav-item-right">
        <a href="/contact">Contact</a>
        <button className="book-now" onClick={handleButtonClick}>
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;