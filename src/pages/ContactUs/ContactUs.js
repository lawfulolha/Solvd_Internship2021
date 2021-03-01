import React from 'react'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; 
import './ContactUs.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js'; 
import imag from "../../media/Group 3030@2x.png";
import Title from '../../components/Title/Title';
import servImg from "../../media/icons/Cleaner@2x.png";
import SmallTitle from '../../components/SmallTitle/SmallTitle'; 
import mapTemplate from '../../media/Map Image@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faEnvelope,
   faMapMarker } from "@fortawesome/free-solid-svg-icons";

class ContactUs extends React.Component { 
    render() {
      return <div>
        <Header/>
        <Title title="Contact Us" adress="/contact-us"/>
        <div className="services services-white">
          <div className="column contact-info">
            <p>Contact Information</p>
            <h1>Have Any Question? Contact With Us</h1>
            <p><FontAwesomeIcon icon={faPhone}/>1 800 222 4357</p>
            <p><FontAwesomeIcon icon={faMapMarker}/>25 Palmal Stree, London, England</p>
            <p><FontAwesomeIcon icon={faEnvelope}/>zigzag@gmail.com</p>
          </div>
          <form action="/" method="post" className="column">
            <h3>Get In Touch</h3>
            <textarea placeholder="Your Comment"></textarea>
            <input type="text" placeholder="Your Name"></input>
            <input type="text" placeholder="Your Email"></input>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="services services-white">
          <img className="map" src={mapTemplate}/>
          <FontAwesomeIcon icon={faMapMarker}/>
        </div>
        <Footer/>
      </div>
    }
  }

  export default ContactUs;