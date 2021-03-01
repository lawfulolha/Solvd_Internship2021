import React from 'react'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; 
import './Services.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js'; 
import imag from "../../media/Group 3030@2x.png";
import Title from '../../components/Title/Title';
import servImg from "../../media/icons/Cleaner@2x.png";
import SmallTitle from '../../components/SmallTitle/SmallTitle'; 
import templateImg from '../../media/Image@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp ,faStar,
   faCheckCircle,faChevronDown, 
   faArrowUp, faArrowDown,faQuoteLeft,
    faArrowCircleDown, faHeart } from "@fortawesome/free-solid-svg-icons";

class Services extends React.Component { 
    render() {
      return <div>
        <Header/>
        <Title title="Services" adress="/services-details"/>
 
       <div className=" services posts">
          <div className="blog-post blog-post-big service-post">
          <div className="img-container">
                  <img src={templateImg}/>
                  </div>
              <div className="text">
                <h3><strong>Residential </strong>Cleaning</h3>
                <p className="text">Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt.</p>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Window Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Window Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
            </div>
          </div>
          <div className="blog-post blog-post-big service-post">
          <div className="img-container">
                  <img src={templateImg}/>
                  </div>
              <div className="text">
                <h3><strong>Residential </strong>Cleaning</h3>
                <p className="text">Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt.</p>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Window Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Window Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
            </div>
          {/* </div> */}
          
          </div>
        </div>
        <div className="services">
          <SmallTitle imgAdress={servImg} imgLabel="Services" title="Provide World Wide For Good Customer"/>
          {/* <img src={servImg} className="functional-image"></img>
          <p className="title">Services</p>
          <h3>Provide World Wide For Good Customer</h3> */}
          <div className="service-cards">
            <ServiceCard imgAdress={imag} title="Deep Cleaning Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                link="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                link="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="VesVestibulum commodocommodo commodo sapien nontibulum commodocommodo commodo sapien non elit sapien non elit  sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                link="/home"/>
            <ServiceCard imgAdress={imag} title="Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                link="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="Vestibulum  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                link="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                link="/home"/>                
          </div>
        </div>
        <div className="services appointment">
            <div className="wrapper">
          <SmallTitle imgAdress={servImg} 
          imgLabel="Appointment" 
          title="Make An Appointment"/>
          <form action="/" method="post" className="appointment-form">
            <h3>Request a Quote</h3>
            <div className="input-container">
              <input type="text" name="name" placeholder="Enter Your Name"/>
              <label for="name">#</label>
            </div>
            <div className="input-container">
              <input type="text" name="email" placeholder="Email"/>
              <label for="email">#</label> 
              </div>
            <div className="input-container">
            <input type="text" name="phone" placeholder="Phone"/>
            <label for="phone">#</label> 
            </div>
            <div className="input-container">
            <input type="text" name="order" placeholder="I would like to"/>
            <label for="order">#</label> 
            </div>
            <div className="input-container">
            <button type="submit">Submit Request</button>
            </div>
          </form>
          </div><div className="img-container"><img src={templateImg}/></div>
          </div>
         
        <Footer/>
      </div>
    }
  }

  export default Services;