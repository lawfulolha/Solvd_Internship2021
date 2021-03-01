import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage1 from './pages/Homepage1/Homepage1';
import Homepage3 from './pages/Homepage3/Homepage3'; 
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';
import OurProject from './pages/OurProject/OurProject';
import ContactUs from './pages/ContactUs/ContactUs';
import BlogStandard from './pages/BlogStandard/BlogStandard';

ReactDOM.render(
  <React.StrictMode>
     <Router>
       <Switch>
		      <Route exact path="/blog-standard" component={BlogStandard}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/contact-us" component={ContactUs}/>
          <Route exact path="/home" component={Homepage1}/> 
          <Route exact path="/our-project" component={OurProject}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/home-3" component={Homepage3}/> 
      </Switch>
      <App/>
    </Router>,
   
  </React.StrictMode>,
  document.getElementById('root')
);

 
reportWebVitals();
