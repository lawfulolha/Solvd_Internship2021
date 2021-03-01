import React from 'react'; 
function Title(props) {     
      return (<div className="page-title">
          <h1 className="title">{props.title}</h1>
          <div className="navigation-block">
              <a href="/home">Home</a>
              <span>&#8594;</span>
              <a href={props.adress}>{props.title}</a>
          </div>
      </div>)
}
  

  export default Title;