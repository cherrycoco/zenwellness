import React from 'react';

const Service = (props) => (
  <div className='service animated fadeInUp'>
    <img className='service-left-img' src={props.imgLeft} alt={props.altLeft} />
    <img className='service-right-img' src={props.imgRight} alt={props.altRight} />
    <div className='service-center'>
      <img src={props.imgCenter} alt={props.altCenter} />
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
    <div className='clearFloat' />
  </div>
);

export default Service;