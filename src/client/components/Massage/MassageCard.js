import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const MassageCard = (props) => (
  <ScrollAnimation 
    animateIn="slideInUp"
    animateOnce
  >
    <div className='massage-card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h5>50 MINUTES</h5>
      <h4>{props.price}</h4>
    </div>
  </ScrollAnimation>
)

export default MassageCard;