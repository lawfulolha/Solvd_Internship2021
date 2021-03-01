import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import './Footer.css'; 
import logo from "../../media/Logo.png";
import emptyImg from "../../media/Rectangle 5374.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTelegramPlane, faFacebook, faLinkedin, faDribbble, faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer(props)  {
        if(props.fpage=="Homepage1") 
        return (
        <footer  className="footer-first">
           <ContactCard/>
          
          {/* <div className="grid-container"> */}
            <div className="footer-row top">
            <div className="footer-column">
                <h3>About The Company</h3>
                <span>Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et.</span>
                
                <div className="media-links">
                    <span className="media-link"><FontAwesomeIcon icon={faTwitter}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faFacebook}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faLinkedin}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faDribbble}/></span>
                </div>
            </div>
         
            <div className="footer-column">
                <h3>Services</h3>
                <a href="/">Deep Cleaning</a>
                <a href="/">Housekeeping</a>
                <a href="/">Window Cleaning</a>
                <a href="/">Cloth Washing</a>
                <a href="/">Regular Cleaning</a>
            </div>
            <div className="footer-column">
                <h3>Links</h3>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Services</a>
                <a href="/">Terms of Use</a> 
            </div>
            <div className="footer-column">
                <h3>News Feed</h3>
                <div className="news-card">
                    <img src={emptyImg}></img>
                    <p><strong>In consequat, quam id sodales hendrerit, eros mi.</strong></p>
                    <span>08 May 2020</span>
                </div>
                <div className="news-card">
                    <img src={emptyImg}></img>
                    <p><strong>In consequat, quam id sodales hendrerit, eros mi.</strong></p>
                    <span>08 May 2020</span>
                </div>
               
            </div>
            </div> 
             
            <div className="footer-row bottom">
                {/* <div className="copyright"> */}
                    <span>&copy;  2020 Zigzag all rights reserved.</span>
                <span>Privacy   |   Policy</span>
                {/* </div> */}
            </div>
       
        {/* </div> */}
      </footer>);
         
       return <footer>
          {/* <div className="grid-container"> */}
            <div className="footer-row top">
            <div className="footer-column">
                <img id="footer-logo" src={logo}/>
                <span>Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna.</span>
                <div className="email-form">
                    <input id="newsletter-email" type="text" placeholder="Enter Email"></input>
                    <button type="submit" id="newsletter-button"><FontAwesomeIcon icon={faTelegramPlane}/></button>
                    </div> 
            </div>
            <div className="footer-column">
                <h3>Services</h3>
                <a href="/">Deep Cleaning</a>
                <a href="/">Housekeeping</a>
                <a href="/">Window Cleaning</a>
                <a href="/">Cloth Washing</a>
                <a href="/">Regular Cleaning</a>
            </div>
            <div className="footer-column">
                <h3>Links</h3>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Services</a>
                <a href="/">Terms of Use</a> 
            </div>
            <div className="footer-column">
                <h3>Contact Us</h3>
                <span><b>455-362-3603</b></span>
                <span><b>sayhello@zigzg.com</b></span>
                <span>142  Fannie Street, Houston, Texas, USA</span> 
                <div className="media-links">
                    <span className="media-link"><FontAwesomeIcon icon={faTwitter}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faFacebook}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faLinkedin}/></span>
                    <span className="media-link"><FontAwesomeIcon icon={faDribbble}/></span>
                </div>
            </div>
            </div> 
             
            <div className="footer-row bottom">
                {/* <div className="copyright"> */}
                    <span>&copy;  2020 Zigzag all rights reserved.</span>
                <span>Privacy   |   Policy</span>
                {/* </div> */}
            </div>
       
        {/* </div> */}
      </footer>;
    }
  

  export default Footer;