import React from 'react'; import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';  
import './Team.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js';  
import templateImg from '../../media/Image@2x.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram}  from "@fortawesome/free-brands-svg-icons"; 
import shirtIcon from '../../media/icons/Shirt@2x.png';
import cleanerIcon from '../../media/icons/Cleaner@2x.png';
import soapIcon from '../../media/icons/Soap@2x.png';
import bucketIcon from '../../media/icons/Bucket@2x.png';
import drycleanIcon from '../../media/icons/DryCleaner.png'; 
import homeIcon from '../../media/icons/016-house-1@2x.png';  
import SmallTitle from '../../components/SmallTitle/SmallTitle';
class Team extends React.Component { 
    render() {
      return <div>
        <Header/>
        <Title title="Team" adress="/team-details"/>
        <div className="services our-team">
        <div className="profile-card team" style={{ backgroundImage: `url(${templateImg})` }}>
          <div className="links">
            <a href="/twitter"><FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="/fb"><FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="/ig"><FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div className="profile-info">
            <h3>Mary Ann Ford</h3>
            <p>Founder</p>
          </div>        
          </div>
          <div className="profile-card team" style={{ backgroundImage: `url(${templateImg})` }}>
          <div className="links">
            <a href="/twitter"><FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="/fb"><FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="/ig"><FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div className="profile-info">
            <h3>Mary Ann Ford</h3>
            <p>Founder</p>
          </div>        
          </div>
          <div className="profile-card team" style={{ backgroundImage: `url(${templateImg})` }}>
          <div className="links">
            <a href="/twitter"><FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="/fb"><FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="/ig"><FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div className="profile-info">
            <h3>Mary Ann Ford</h3>
            <p>Founder</p>
          </div>        
          </div>
          <div className="profile-card team" style={{ backgroundImage: `url(${templateImg})` }}>
          <div className="links">
            <a href="/twitter"><FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="/fb"><FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="/ig"><FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div className="profile-info">
            <h3>Mary Ann Ford</h3>
            <p>Founder</p>
          </div>        
          </div>
          <div className="profile-card team" style={{ backgroundImage: `url(${templateImg})` }}>
          <div className="links">
            <a href="/twitter"><FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="/fb"><FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="/ig"><FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div className="profile-info">
            <h3>Mary Ann Ford</h3>
            <p>Founder</p>
          </div>        
          </div>
           <div className="profile-card team" style={{ backgroundImage: `url(${templateImg})` }}>
          <div className="links">
            <a href="/twitter"><FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="/fb"><FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="/ig"><FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
          <div className="profile-info">
            <h3>Mary Ann Ford</h3>
            <p>Founder</p>
          </div>        
          </div>
        </div>
        <div className="services team-services">
         <SmallTitle imgAdress={cleanerIcon} title="Why We Are Best" imgLabel="Features"/>
          <div className="service-cards  small-cards"  >
            <ServiceCard imgAdress={homeIcon} title="Housekeeping" 
                text="Nunc scelerisque tincidunt elit. Vestibulum ipsum. Cras pretium suscipit tellus sit amet aliquet." 
                />
               <ServiceCard imgAdress={drycleanIcon} title="Deep Cleaning" 
                text="Nunc scelerisque tincidunt elit. Vestibulum ipsum. Cras pretium suscipit tellus sit amet aliquet." 
                />
                   <ServiceCard imgAdress={bucketIcon} title="Regular Cleaning" 
                text="Nunc scelerisque tincidunt elit. Vestibulum ipsum. Cras pretium suscipit tellus sit amet aliquet." 
                />
                   <ServiceCard imgAdress={cleanerIcon} title="Window Cleaning" 
                text="Nunc scelerisque tincidunt elit. Vestibulum ipsum. Cras pretium suscipit tellus sit amet aliquet." 
                />
              

          </div>
        </div>
        <Footer/>
      </div>
    }
  }

  export default Team;