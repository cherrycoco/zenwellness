import React from 'react';
import '../../pe-icon-7-stroke/css/pe-icon-7-stroke.css';
import '../../styles/Footer.css';
import MadeBy from './MadeBy';
import Location from './Location';
import Contact from './Contact';
import Company from './Company';
import Follow from './Follow';
import EndImg from './EndImg';

const Footer = () => (
  <div id='footer'>
    <Location />
    <Contact />
    <Company />
    <Follow />
    <MadeBy />
  </div>
)

export default Footer;
