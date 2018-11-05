import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const MainImg = (props) => (
  <ScrollAnimation
    animatePreScroll
    animateIn="fadeInUp"
    animateOnce
  >
    <div 
      className='main-img' 
      style=
        {{backgroundImage: 
          `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)),
          url(${props.img})`
        }} 
    >
      <h1>{`\u2014 ${props.title} \u2014`}</h1>
    </div>
  </ScrollAnimation>
)

export default MainImg;

