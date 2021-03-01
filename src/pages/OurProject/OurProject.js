import React from 'react'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; 
import './OurProject.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js'; 
import imag from "../../media/Group 3030@2x.png";
import Title from '../../components/Title/Title';
import servImg from "../../media/icons/Cleaner@2x.png";
import SmallTitle from '../../components/SmallTitle/SmallTitle'; 
import templateImg from '../../media/Image@2x.png';
import ContactCard from '../../components/ContactCard/ContactCard';
class OurProject extends React.Component { 
    render() {
      return <div>
        <Header/>
        <Title title="Our Project" adress="/our-project"/>
        <ul className="categories">
            <li>Show All</li>
            <li>Housekeeping</li>
            <li>Office Cleaning</li>
            <li>Dish Wash</li>
            <li>Deep Cleaning</li>
            <li>Cloth Cleaning</li>
        </ul>
        <div className="projects">
            <ServiceCard imgAdress={templateImg} type="project" title="Webtend IT Solutions, Inc." text="Window Cleaning"/>
            <ServiceCard imgAdress={templateImg} type="project" title="Webtend IT Solutions, Inc." text="Window Cleaning"/>
            <ServiceCard imgAdress={templateImg} type="project" title="Webtend IT Solutions, Inc." text="Window Cleaning"/>
            <ServiceCard imgAdress={templateImg} type="project" title="Webtend IT Solutions, Inc." text="Window Cleaning"/>
            <ServiceCard imgAdress={templateImg} type="project" title="Webtend IT Solutions, Inc." text="Window Cleaning"/>
            <ServiceCard imgAdress={templateImg} type="project" title="Webtend IT Solutions, Inc." text="Window Cleaning"/>
        </div>
        <ContactCard/>
    
        <Footer/>
      </div>
    }
  }

  export default OurProject;