import React from 'react';
import './ContactCard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function ContactCard(props)  {
    return (
<div className="ad-container">
<h4>Our Team of experts in this area</h4>
<p>Get free estimate mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante.</p>
<div className="call-button">
    <p>(742)180-2893</p>
    <button type="button">
    <FontAwesomeIcon icon={faPhone}/>
    </button>
</div>
</div>);
}
export default ContactCard;