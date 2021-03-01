import React from 'react'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; 
import playImg from '../../media/Play.png';
import './Homepage1.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js';
import background from "../../media/backgrounds/Background@2x.png";
import imag from "../../media/Group 3030@2x.png";
import servImg from "../../media/icons/Cleaner@2x.png";
import SmallTitle from '../../components/SmallTitle/SmallTitle';
import DataTile from '../../components/DataTile/DataTile';
import bgimg from '../../media/backgrounds/Dot@2x.png';
import Quote from '../../components/Quote/Quote';
import templateImg from '../../media/Image@2x.png';
import galleryImg from'../../media/Images@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp ,faStar, faCheckCircle,faChevronDown, faArrowUp, faArrowDown,faQuoteLeft, faArrowCircleDown, faHeart } from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component { 
    render() {
      return <div>
        <Header page="Homepage1"/> 
        <div className="title" id="homepage-first-title" style={{ backgroundImage: `url(${background})` }}>
            <img className="functional-img" src={playImg}/>
            <p>Trusted for Over 30 Years</p>
            <h1>Professional Cleaner</h1>
        </div>

        <div className="services">
          <SmallTitle imgAdress={servImg} imgLabel="Services" title="Provide World Wide For Good Customer"/>
          {/* <img src={servImg} className="functional-image"></img>
          <p className="title">Services</p>
          <h3>Provide World Wide For Good Customer</h3> */}
          <div className="service-cards">
            <ServiceCard imgAdress={imag} title="Deep Cleaning Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="VesVestibulum commodocommodo commodo sapien nontibulum commodocommodo commodo sapien non elit sapien non elit  sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>
            <ServiceCard imgAdress={imag} title="Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="Vestibulum  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>
            <ServiceCard imgAdress={imag} title="Deep Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>                
          </div>
        </div>
        <div className="services about-us" >
          <div className="img-container" style={{ backgroundImage: `url(${bgimg})` }}>
             <img src=""/> 
          </div>
          {/* <div className="content"> */}
        <SmallTitle imgAdress={servImg} imgLabel="About Us" title="Professional Cleaning Services"/>
         <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Pellentesque vehicula est a lorem.</p>
          <div className="data-tiles">
          <DataTile number="50+" title="Employers"/>
          <DataTile number="500+" title="Projects Done"/>
          <DataTile number="300+" title="Happy Clients"/>
          <DataTile number="65+" title="Won Awards"/>
          </div>
          <button type="button">Learn More</button>
        </div>
        {/* </div> */}

        <div className="services features">
          <SmallTitle imgAdress={servImg} imgLabel="Features" title="Why We Are Best"/>
          <div className="tiles">
            <ServiceCard imgAdress={imag} 
            title="Expert Emplyees" 
            text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
            <ServiceCard imgAdress={imag} 
            title="Expert Emplyees" 
            text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
            <ServiceCard imgAdress={imag} 
            title="Expert Emplyees" 
            text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
            <ServiceCard imgAdress={imag} 
            title="Expert Emplyees" 
            text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
          </div>
          <div className="img-container"><img src={templateImg}/></div>
        </div>
        <div className="services team">
        <SmallTitle imgAdress={servImg} 
          imgLabel="Team" 
          title="Provide World  Wide For Good Customer"/>
           <ServiceCard className="profile-card" imgAdress={templateImg} 
            title="Mary Ann Ford" 
            text="Founder"
            links={["www.google.com","www.google.com","www.google.com"]}/>
             <ServiceCard className="profile-card" imgAdress={templateImg} 
            title="Mary Ann Ford" 
            text="Founder"
            links={["www.google.com","www.google.com","www.google.com"]}/>
             <ServiceCard className="profile-card" imgAdress={templateImg} 
            title="Mary Ann Ford" 
            text="Founder"
            links={["www.google.com","www.google.com","www.google.com"]}/>
             <ServiceCard className="profile-card" imgAdress={templateImg} 
            title="Mary Ann Ford" 
            text="Founder"
            links={["www.google.com","www.google.com","www.google.com"]}/>
       
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
          <div className="services customers">
          <SmallTitle imgAdress={servImg} imgLabel="Testimonials" 
          title="Our Some Customer"/>
          <div className="carousel">
            <img src={galleryImg}/>
          </div>
          <div className="column">
          <Quote title="Perfect Cleaning Service" 
                 text="Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Pellentesque vehicula est a lorem gravida bibendum."
                 name="Chad S. Jones"  
                 occupation="House Owner"/>
        </div>
            </div>
        <Footer fpage="Homepage1" />
      </div>
    }
  }

  export default Homepage;