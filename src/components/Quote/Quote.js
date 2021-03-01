import React from 'react'; 
import './Quote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
function Quote(props) { 
    return(  
        <div className="quote quote-white">
            <FontAwesomeIcon icon={faQuoteLeft}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <span><FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/></span>
            <h3 className="customer-info">{props.name}</h3>
            <p className="customer-info">{props.occupation}</p>
        </div>);}
export default Quote;