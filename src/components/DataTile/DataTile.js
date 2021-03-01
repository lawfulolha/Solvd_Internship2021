import React from 'react'; 
import './DataTile.css';
function DataTile(props) {     
    return (
    <div className="data-tile">
        <h4 >{props.number}</h4>
        <p>{props.title}</p> 
    </div>)
}
  

  export default DataTile;