import React from 'react';
import './Carousel.css';  
function Carousel(props)  {
    const photoItems = props.photos.map((l) =>
    <img class="carousel__photo" src={l}/>
    );
    return (<div class="carousel-wrapper">
            <div class="carousel">
                {photoItems}
                
                <div class="carousel__button--next"></div>
                <div class="carousel__button--prev"></div>
            </div>
        </div> );
}
export default Carousel;