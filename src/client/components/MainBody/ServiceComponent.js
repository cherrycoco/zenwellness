import React from 'react';
import { Link } from 'react-router-dom';

const ServiceComponent = (props) => (
  <div 
    className='mainBody-serviceComponent' 
    style={{backgroundImage: 
      `linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)),
      url(${props.img})`
    }}>
    <div className='mainBody-serviceComponent-title'>
      <h1>{props.title}</h1>
    </div>
    <div className='mainBody-serviceComponent-readMore'>
    <Link to={props.link}><h2>READ MORE</h2></Link>
    </div>
  </div>
);

export default ServiceComponent;