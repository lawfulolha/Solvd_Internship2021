import React from 'react';
import './Header.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTelegramPlane, faFacebook, faLinkedin, faDribbble, faTwitter } from "@fortawesome/free-brands-svg-icons";

import logoImg from './Logo2x.png';
function Header(props)  { 
  if(props.page=="Homepage1")
      return <header className="header-homepage"> 
      <div className="header-row top">  
      <span><b>Call for free estimate! </b>455-362-3603</span> 
      <div className="media-links">
                    <span className="media-link"><FontAwesomeIcon icon={faTwitter}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faFacebook}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faLinkedin}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faDribbble}/></span>
      </div>
      </div>
      <div className="header-row bottom"> 
      {/* <div className="content"> */}
          <img className="logo" src={logoImg}/>
          <nav className="navigation">
              <a className="nav-link" href="/home">Home</a>
              <a className="nav-link" href="/about-us">About Us</a>
              <a className="nav-link" href="/services">Services</a>
              <a className="nav-link" href="/pages">Pages</a> 
          </nav>
          <button type="button" >Get a Quote</button>
          {/* </div> */}
      </div> 
      
    </header>;
      return <header>
        <div className="header-row top">  
        <span><b>Call for free estimate! </b>455-362-3603</span> 
        <div className="media-links">
                    <span className="media-link"><FontAwesomeIcon icon={faTwitter}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faFacebook}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faLinkedin}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faDribbble}/></span>
                </div>
        </div>
        <div className="header-row bottom"> 
        {/* <div className="content"> */}
            <img className="logo" src={logoImg}/>
            <nav className="navigation">
                <a className="nav-link" href="/home">Home</a>
                <a className="nav-link" href="/about-us">About Us</a>
                <a className="nav-link" href="/services">Services</a>
                <a className="nav-link" href="/pages">Pages</a>
                <a className="nav-link" href="/blog">Blog</a>
                <a className="nav-link" href="/contact-us">Contact Us</a>
            </nav>
            <button type="button" >Get a Quote</button>
            {/* </div> */}
        </div> 
        
      </header>; 
  }

  export default Header;