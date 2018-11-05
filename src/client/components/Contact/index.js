import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Map from './Map';
import ContactInfo from './ContactInfo';
import ScrollToTop from '../ScrollToTop';
import MainImg from '../MainBody/MainImg';
import img from '../../assets/spa-background2.jpg';
import '../../styles/Contact.css';

const Contact = () => (
  <div>
    <ScrollToTop />
    <MainImg 
      img={img}
      title='Make a Reservation'
    />
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <div id="contact">
        <Map />
        <ContactInfo />
      </div>
    </ScrollAnimation>
  </div>
)


export default Contact;