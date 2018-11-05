import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const NumLink = (props) => (
  <ScrollAnimation
        animatePreScroll={false}
        animateIn="fadeInUp"
        animateOnce
        offset={120}
  >
    <div className={`num-link ${props.position}`}>
      <div className='num-link-title'>
        <h3>{props.num}—</h3>
        <h2><Link to={props.link}>{props.title}</Link></h2>
      </div>
      <img src={props.url} alt={props.alt}/>
    </div>
  </ScrollAnimation>
);

export default NumLink;