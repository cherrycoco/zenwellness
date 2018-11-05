import React from 'react';
import ScrollToTop from '../ScrollToTop';
import ScrollAnimation from 'react-animate-on-scroll';
import Treatments from './Treatments';
import MainImg from '../MainBody/MainImg';
import img from '../../assets/spa-background3.jpg';
import '../../styles/Treatments.css';

const TreatmentComponent = () => (
  <div id='treatments'>
    <ScrollToTop />
    <MainImg 
      img={img}
      title='Treatments'
    />
    <ScrollAnimation animateIn="fadeIn" animateOnce>
      <Treatments />
    </ScrollAnimation>
  </div>
)
export default TreatmentComponent;