import React from 'react'; 
import './SmallTitle.css';
function SmallTitle(props) {     
    return (
    <div  className="small-title">
        <img  className="functional-img"  src={props.imgAdress}/>
        <p>{props.imgLabel}</p>
        <h3 className="title">{props.title}</h3> 
    </div>)
}
  

  export default SmallTitle;