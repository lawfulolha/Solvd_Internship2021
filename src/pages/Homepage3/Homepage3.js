import React from 'react'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; 
import playImg from '../../media/Play.png';
import './Homepage3.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js';
import background from "../../media/backgrounds/Background@2x.png";
import imag from "../../media/Group 3030@2x.png";
import servImg from "../../media/icons/Cleaner@2x.png";
import SmallTitle from '../../components/SmallTitle/SmallTitle';
import DataTile from '../../components/DataTile/DataTile';
import bgimg from '../../media/backgrounds/Dot@2x.png';
import templateImg from '../../media/Image@2x.png';
import womanSilhouette from '../../media/ImageWoman.png';
import shirtIcon from '../../media/icons/Shirt@2x.png';
import cleanerIcon from '../../media/icons/Cleaner@2x.png';
import soapIcon from '../../media/icons/Soap@2x.png';
import bucketIcon from '../../media/icons/Bucket@2x.png';
import drycleanIcon from '../../media/icons/DryCleaner.png';
import houseIcon from '../../media/icons/House@2x.png';
import broomIcon from '../../media/icons/Broom@2x.png';
import fingerIcon from '../../media/icons/Finger@2x.png';
import lineBg from '../../media/backgrounds/Line.png'
import homeIcon from '../../media/icons/016-house-1@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp ,faStar, faCheckCircle,faChevronDown, faArrowUp, faArrowDown,faQuoteLeft, faArrowCircleDown, faHeart } from "@fortawesome/free-solid-svg-icons";

class Homepage3 extends React.Component { 
    render() {
      return <div>
        <Header/> 
        <div className="title third-home"  style={{ backgroundImage: `url(${womanSilhouette})` }}>
           
            <h1>Affordable & Reliable Cleaning Service</h1>
            <p>Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque.</p>
            <button type="button">Request a Quote</button>
             
        </div>
        <ul className="icons">
            <li><img src={shirtIcon}/></li>
            <li><img src={soapIcon}/></li>
            <li><img src={cleanerIcon}/></li>
            <li><img src={bucketIcon}/></li>
            <li><img src={drycleanIcon}/></li>
        </ul>
        <div className="services hp3">
          <h4>How We Work</h4> 
          <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.porttitor. Pellentesque vehicula est a lorem.</p>
          
          <div className="service-cards" style={{ backgroundImage: `url(${lineBg})`}}>
            <ServiceCard type="transparent" imgAdress={fingerIcon} title="Booking" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>
            <ServiceCard type="transparent" imgAdress={broomIcon} title="Cleaning" 
                text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>
            <ServiceCard type="transparent" imgAdress={houseIcon} title="Relax" 
                text="VesVestibulum commodocommodo commodo sapien nontibulum commodocommodo commodo sapien non elit sapien non elit  sapien non elit  porttitor, vitae volutpat nibh mollis. Nulla porta risus." 
                adress="/home"/>

          </div>
        </div>
        <div className="services ">
          <h4>What We Do</h4> 
          <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.porttitor. Pellentesque vehicula est a lorem.</p>
          
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
                   <ServiceCard  imgAdress={soapIcon} title="Dish Wash" 
                text="Nunc scelerisque tincidunt elit. Vestibulum ipsum. Cras pretium suscipit tellus sit amet aliquet." 
                />
                   <ServiceCard imgAdress={shirtIcon} title="Cloth Washing" 
                text="Nunc scelerisque tincidunt elit. Vestibulum ipsum. Cras pretium suscipit tellus sit amet aliquet." 
                />

          </div>
        </div>
        <div className="services questions">
            <h4>Have Any Questions? Look Here</h4> 
            <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.porttitor. Pellentesque vehicula est a lorem.</p>
            <div className="details">
                <img src={templateImg}/>
                <div className="number-card">
                    <p>More Questions?</p>
                    <h3>455-362-3603</h3>
                </div>

        <details>
            <summary>
                <span class="summary-title">Do you have stay in mind?</span>
                <div class="summary-chevron-up">
                    <FontAwesomeIcon icon={faChevronUp}/>
                </div>
            </summary>
            <div class="summary-content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</div>
                <div class="summary-chevron-down">
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
        </details>
        <details>
            <summary>
                <span class="summary-title">Do you have stay in mind?</span>
                <div class="summary-chevron-up">
                    <FontAwesomeIcon icon={faChevronUp}/>
                </div>
            </summary>
            <div class="summary-content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</div>
                <div class="summary-chevron-down">
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
        </details>
        <details>
            <summary>
                <span class="summary-title">Do you have stay in mind?</span>
                <div class="summary-chevron-up">
                    <FontAwesomeIcon icon={faChevronUp}/>
                </div>
            </summary>
            <div class="summary-content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</div>
                <div class="summary-chevron-down">
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
        </details>  <details>
            <summary>
                <span class="summary-title">Do you have stay in mind?</span>
                <div class="summary-chevron-up">
                    <FontAwesomeIcon icon={faChevronUp}/>
                </div>
            </summary>
            <div class="summary-content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</div>
                <div class="summary-chevron-down">
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
        </details>  <details>
            <summary>
                <span class="summary-title">Do you have stay in mind?</span>
                <div class="summary-chevron-up">
                    <FontAwesomeIcon icon={faChevronUp}/>
                </div>
            </summary>
            <div class="summary-content">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</div>
                <div class="summary-chevron-down">
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
        </details>
            </div>
        </div>
        <div className="services booking">
            <h4>Complete Your Booking</h4> 
            <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.porttitor. Pellentesque vehicula est a lorem.</p>
            <form action="/" method="post" className="booking-form">
            
            <div className="input-container">
            <select name="Option"  >  
                <option >House Cleaning</option>
                <option  >Dish Wash</option>
                <option  >Blow Dry</option>
            </select>
            </div>
            <div className="input-container">
              <input type="text" name="email" placeholder="Email"/> 
              </div>
              <div className="input-container">
             <select name="State"  >  
                <option >Alabama</option>
                <option  >Texas</option>
                <option  >Paris</option>
            </select>
            </div>
            <div className="input-container">
            <input type="text" name="phone" placeholder="Phone"/> 
            </div>
            <div className="input-container">
            <input type="text" name="order" placeholder="I would like to"/> 
            </div>
            <div className="input-container">
            <button type="submit">Book Now</button>
            </div>
          </form>
        </div>
        <div className="services pricing">
        <h4>Our Pricing &amp; Plan</h4> 
          <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.porttitor. Pellentesque vehicula est a lorem.</p>
          <div className="plan-card">
                <h4>Residental</h4>
                <div className="img-container"><img src={houseIcon}/></div>
                <h2>$220</h2>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Window Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Carpet Cleaning</p>
                <button type="button">Submit Request</button>
          </div>
          <div className="plan-card">
                <h4>Residental</h4>
                <div className="img-container"><img src={houseIcon}/></div>
                <h2>$220</h2>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Window Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Carpet Cleaning</p>
                <button type="button">Submit Request</button>
          </div>
          <div className="plan-card">
                <h4>Residental</h4>
                <div className="img-container"><img src={houseIcon}/></div>
                <h2>$220</h2>
                <p><FontAwesomeIcon icon={faCheckCircle}  color="#01f0db"/>2 Bedrooms Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Vacuuming</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Window Cleaning</p>
                <p><FontAwesomeIcon icon={faCheckCircle} color="#01f0db"/>Carpet Cleaning</p>
                <button type="button">Submit Request</button>
          </div>
          <div className="services">
          <div className="quote-card"> 
                  <div className="customer-profile">
                      <div className="img-container">
                          <img src={templateImg}/>
                          <div className="name">
                              <span>4.5<FontAwesomeIcon icon={faStar}/></span>
                              <h3>Chad Jones</h3>
                              <p>New York, USA</p>
                          </div>
                      </div>
                  </div>
                  <div className="quote-block">
                  <FontAwesomeIcon icon={faQuoteLeft}/>
                  <h3>Perfect Cleaning Service</h3>
                  <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Pellentesque vehicula est a lorem gravida bibendum. </p>
                  </div>
                  <div className="buttons"> 
                    <button type="button" className="round-button">
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </button>
                    <button type="button" className="round-button">
                        <FontAwesomeIcon icon={faArrowDown}/>
                    </button>
                    </div>
                    </div>
            
          </div>
        </div>
        <div className="services blog-news">
        <h4>Blog &amp; News</h4> 
          <p>Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum.porttitor. Pellentesque vehicula est a lorem.</p>
          <div className="posts">
          <div className="blog-post blog-post-big">
          <div className="img-container">
                  <img src={templateImg}/>
                  </div>
              <div className="text">
                <span>By Admin</span>
                <span>120<FontAwesomeIcon icon={faHeart}/></span>
                <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt.</p>
                <span>26 April 2020</span>
            </div>
          </div>
          <div className="small-posts">
          <div className="blog-post blog-post-small">
          <div className="img-container">
                  <img src={templateImg}/>
                  </div>
              <div className="text">
              <span>By Admin</span>
              <span>120<FontAwesomeIcon icon={faHeart}/></span>
              <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt.</p>
              <span>26 April 2020</span>
              </div>
          </div>
          <div className="blog-post blog-post-small">
          <div className="img-container">
                  <img src={templateImg}/>
                  </div>
              <div className="text">
              <span>By Admin</span>
              <span>120<FontAwesomeIcon icon={faHeart}/></span>
              <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt.</p>
              <span>26 April 2020</span>
              </div>
              </div>
          </div>
          </div>
          </div>
        <Footer/>
      </div>
    }
  }

  export default Homepage3;