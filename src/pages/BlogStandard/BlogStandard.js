import React from 'react'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';  
import PaginationControlled from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import './BlogStandard.css'; 

import emptyImg from "../../media/Rectangle 5374.png";
import templateImg from '../../media/Image@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faArrowRight, faBirthdayCake, faComment, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
class BlogStandard extends React.Component { 
    render() {
      return <div>
        <Header/> 
         <Title title="Blog Standard" adress="blog-standard"/>
         <div className="services service-white service-blog">
             <div className="blog-post-big" >
                 <img src={templateImg}/>
            <span><FontAwesomeIcon icon={faUser}/>David Miller</span>
            <span><FontAwesomeIcon icon={faBirthdayCake}/>20 Apr 2020</span>
            <span><FontAwesomeIcon icon={faComment}/>(05)</span>
            <h3>Free Virtual Conference To Take Your Agile UX Skills To The Next Level</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicbo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <button type="button" className="blue-button">Read More +</button>
            </div> 
             <div className="blog-post-big" >
                 <img src={templateImg}/>
            <span><FontAwesomeIcon icon={faUser}/>David Miller</span>
            <span><FontAwesomeIcon icon={faBirthdayCake}/>20 Apr 2020</span>
            <span><FontAwesomeIcon icon={faComment}/>(05)</span>
            <h3>Free Virtual Conference To Take Your Agile UX Skills To The Next Level</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicbo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <button type="button" className="blue-button">Read More +</button>
            </div> 
            <div className="banner">
              <img src={emptyImg}/>
              <h4>Web Development Reading List IPFS Wikipedia New Webpack And CSS Grid Breakout</h4>
              <hr/><p>Jared C. Stokes</p>
            </div>
             <div className="blog-post-big" >
                 <img src={templateImg}/>
            <span><FontAwesomeIcon icon={faUser}/>David Miller</span>
            <span><FontAwesomeIcon icon={faBirthdayCake}/>20 Apr 2020</span>
            <span><FontAwesomeIcon icon={faComment}/>(05)</span>
            <h3>Free Virtual Conference To Take Your Agile UX Skills To The Next Level</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicbo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <button type="button" className="blue-button">Read More +</button>
            </div>
            <div className="pagination">
                <span><FontAwesomeIcon icon={faAngleLeft}/></span>
                <span className="page-number">01</span>
                <span className="page-number">02</span>
                <span className="page-number">03</span>
                <span><FontAwesomeIcon icon={faAngleRight}/></span>
            </div>

            <div className="side-content"> 
				    	<div className="side-tile">
              <hr/>
				    		<form action="/" method="post">
				    			<input className="search" type="search" name="search" placeholder="Search Here"/>
				    			<FontAwesomeIcon icon={faSearch}/> 
                </form>
              </div>
				    	<div className="side-tile">
                <hr/>
							<h4 className="title">Category</h4> 
						        <div className="categories">
							        <a href="/">Deep Cleaning<FontAwesomeIcon icon={faArrowRight}/></a>
                      <a href="/">Housekeeping<FontAwesomeIcon icon={faArrowRight}/></a>
                      <a href="/">Window Cleaning<FontAwesomeIcon icon={faArrowRight}/></a>
                      <a href="/">Cloth Washing<FontAwesomeIcon icon={faArrowRight}/></a>
                      <a href="/">Regular Cleaning<FontAwesomeIcon icon={faArrowRight}/></a>
                      <a href="/">Dish Wash<FontAwesomeIcon icon={faArrowRight}/></a>
						        </div>  
						</div>
						<div className="side-tile">
            <hr/>
							<h4 className="title">Recent News</h4> 
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
                
                <div className="news-card">
                    <img src={emptyImg}></img>
                    <p><strong>In consequat, quam id sodales hendrerit, eros mi.</strong></p>
                    <span>08 May 2020</span>
                </div>
						</div>
						<div className="popular-tags">
            <hr/>
							<h4 className="title">Popular Tags</h4> 
									<a className="tag" href="/" target="_blank">House</a>
									<a className="tag" href="/" target="_blank">HTML</a> 
									<a className="tag" href="/" target="_blank">Office</a>
									<a className="tag" href="/" target="_blank">Services</a>  
									<a className="tag" href="/" target="_blank">Kitchen</a>
									<a className="tag" href="/" target="_blank">Works</a>
									<a className="tag" href="/" target="_blank">PSD</a>
									<a className="tag" href="/" target="_blank">Cleaning</a>
									<a className="tag" href="/" target="_blank">Wordpress</a> 
						</div>
				</div>
            </div>
           
        <Footer/>
         </div> 
    }
  }

  export default BlogStandard;