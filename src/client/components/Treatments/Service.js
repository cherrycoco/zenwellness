import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => (
  <div className='service animated fadeInUp'>
    <img className='service-left-img' src={props.imgLeft} alt={props.altLeft} />
    <img className='service-right-img' src={props.imgRight} alt={props.altRight} />
    <div className='service-center'>
      <img src={props.imgCenter} alt={props.altCenter} />
      <Link to={props.link}><h2>{props.title}</h2></Link>
      <p>{props.body}</p>
    </div>
    <div className='clearFloat' />
  </div>
);

export default Service;