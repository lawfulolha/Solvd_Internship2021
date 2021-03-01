import React from 'react'; 
import logoImg from './Logo2x.png';
class Header extends React.Component {
    render() {
      return <header>
        <div className="header-row top"> 
        {/* <div className="content"> */}
        <span><b>Call for free estimate! </b>455-362-3603</span>
        {/* <span>455-362-3603</span> */}
        <div className="media-links"> 
        {/* </div> */}
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
    }
  }

  export default Header;