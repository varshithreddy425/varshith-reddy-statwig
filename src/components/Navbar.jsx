import React from "react";
import HamburgerMenu from "./HamburgerMenu.jsx"
import '../css/Navbar.css'
import Logo from "../assets/Logo.svg";

function Navbar() {

  return (
    <>
      <div className="nav flex items-center justify-between pr-20 pl-20 pt-5 pb-5">
        <img src={Logo} alt="" className="logo" /> 

        <div className="menu">
          {/* The "display" property of Hamburger menu is set to "none" in Desktop mode and "block" in Mobile Mode */}
          <HamburgerMenu/> 

          {/* The "display" property of Desktop Menu is set to "block" in Desktop mode and "none" in Mobile Mode   */}
          <ul className="DesktopMenu font-bold text-xl text-[#103559]">
            <li><a href="">Home</a></li>
            <li><a href="">Category</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
