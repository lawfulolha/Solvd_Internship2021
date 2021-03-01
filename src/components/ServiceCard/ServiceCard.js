import React from 'react';  
import ReactDOM from 'react-dom';   
import './ServiceCard.css';
function ServiceCard(props) {  
    if(props.link==null && props.links==null){
        if(props.type=="transparent") return(
            <div className="service-card transparent-card">
                <div className="img-container">
                    <img  className="functional-img" src={props.imgAdress}/>
                </div>
                <div className="text-block">
                    <h4 className="title">{props.title}</h4>
                <p>{props.text}</p>
                </div>
            </div>
        );
        if(props.type=='project') return( 
            <div className="service-card project-card">
                <img  className="functional-img" src={props.imgAdress}/>
                <div className="text-block">
                    <h4 className="title">{props.title}</h4>
                <p>{props.text}</p>
                </div>
            </div>
    );
        return( 
                <div className="service-card">
                    <img  className="functional-img" src={props.imgAdress}/>
                    <h4 className="title">{props.title}</h4>
                    <p>{props.text}</p>
                    
                </div>
        );
    }
    if(props.links!=null && props.link==null){
        const linkItems = props.links.map((l) =>
         <a href={l}>0</a>
         );
    return(
    <div className="service-card profile-card">
        <img  className="functional-img" src={props.imgAdress}/>
        <h4 className="title">{props.title}</h4>
        <p>{props.text}</p>
        {linkItems}
        
    </div>
    )   };
    return (
    <div className="service-card">
        <img  className="functional-img" src={props.imgAdress}/>
        <h4 className="title">{props.title}</h4>
        <p>{props.text}</p>
        <a href={props.link}>Learn More</a>
    </div>)
}
  

  export default ServiceCard;