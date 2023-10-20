import React from 'react';
import Navbar from './Navbar';
import '../css/Header.css';
import Showcase from '../assets/Showcase.png';
import ShowcaseMobile from '../assets/Showcase-mobile.png';
import ViewIntro from '../assets/ViewIntro.png';

function Header() {
  return (
    <div className="header">
      {/* The Navbar component has the logo and menu options */}
      <Navbar />  

      {/* The remaining content in the header */}
      <div className="headerContent">
        <div className="textAndButtons">
          <h1 className="text1">One More Friend</h1>
          <h2 className="text2">Thousands More Fun!</h2>
          <p className="text3">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="headerButtons">
            <button>
              <img src={ViewIntro} alt="View Intro" className="button1" />
            </button>
            <button className="button2">Explore now</button>
          </div>
        </div>
        <img src={ShowcaseMobile} alt="Mobile Showcase" className="ShowcaseMobile max-w-full" />
        <img src={Showcase} alt="Desktop Showcase" className="ShowcaseDesktop max-w-xl" />
      </div>
    </div>
  );
}

export default Header;
