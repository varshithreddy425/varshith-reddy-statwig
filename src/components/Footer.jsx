import React from 'react'
import Logo from "../assets/Logo.svg"
import Facebook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"
import Twitter from "../assets/Twitter.svg"
import Youtube from "../assets/Youtube.svg"
import '../css/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="frame28">
        <div className="frame27">
          <div className="frame2">
            {/* Menu Options in footer */}
            <li><a href="">Home</a></li>
            <li><a href="">Category</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </div>

          <div className="frame25">
            {/* Social Media Buttons */}
            <a href=""><img src={Facebook} alt="" /></a>
            <a href=""><img src={Twitter} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
            <a href=""><img src={Youtube} alt="" /></a>
          </div>
        </div>
        
      </div>

      <div className="frame26">
        {/* Copyright, Logo and Privacy Policy */}
      <span className='text'>© 2022 Monito. All rights reserved.</span>
        <img src={Logo} alt="" />
        <a href="" className='text'>Terms of Service. Privacy Policy</a>
      </div>
    </div>
  )
}

export default Footer
