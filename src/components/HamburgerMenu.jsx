//Hamburger Menu which appers when the screen size is less than 425px
import React, { useState } from 'react';
import '../css/Hamburger.css';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false); // This will store the status of menu, whether it is opened or closed

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; // This will toggle the state of menu when the Hamburger icon is clicked

  return (
    <div className="hamburger-menu">
      <div className={`menuToggle${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menuList${menuOpen ? 'open' : ''}`}>
        <a href=""><li className='options'>Home</li></a>
        <a href=""><li className='options'>Category</li></a>
        <a href=""><li className='options'>About</li></a>
        <a href=""><li className='options'>Contact</li></a>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
