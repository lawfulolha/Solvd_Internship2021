import React from 'react'; 
import './Features.css';
function Features(props) {     
    if(props.image!=null)
    return (
<div className="services features">
<SmallTitle imgAdress={servImg} imgLabel="Features" title="Why We Are Best"/>
<div className="tiles">
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
</div>
<div className="img-container"><img src={props.image}/></div>
</div>);}
return (
    <div className="services features">
<SmallTitle imgAdress={servImg} imgLabel="Features" title="Why We Are Best"/>
<div className="tiles no-img">
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
  <ServiceCard imgAdress={imag} 
  title="Expert Emplyees" 
  text="Vestibulum commodo sapien non elit  porttitor, vitae volutpat nibh."/>
</div> 
</div>
);
export default Features;