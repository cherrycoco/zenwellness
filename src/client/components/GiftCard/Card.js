import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const RateComponent = (props) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <div className='card'>
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <h4>{props.time}</h4>
      <h5>{props.price}</h5>
    </div>
  </ScrollAnimation>
)

export default RateComponent;