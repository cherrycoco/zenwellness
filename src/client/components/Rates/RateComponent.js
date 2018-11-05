import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const RateComponent = (props) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <div className='rate-component'>
      <img src={props.src} alt={props.alt} />
      <h2>{props.title}</h2>
      <p className='rate-component-left'>{props.lineOneLeft}</p>
      <p className='rate-component-right'>{props.lineOneRight}</p>
      <div className='clearFloat' />
      <p className='rate-component-left'>{props.lineTwoLeft}</p>
      <p className='rate-component-right'>{props.lineTwoRight}</p>
      <div className='clearFloat' />
      <p className='rate-component-left'>{props.lineThreeLeft}</p>
      <p className='rate-component-right'>{props.lineThreeRight}</p>
      <div className='clearFloat' />
    </div>
  </ScrollAnimation>
)

export default RateComponent;