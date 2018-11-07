import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => (
  <div className='footer-block' id="company">
    <h2>COMPANY</h2>
    <Link to='/about'>About</Link>
    <Link to='/treatments'>Treatments</Link>
    <Link to='/rates'>Rates</Link>
    <Link to='/contact'>Contact</Link>
  </div>
)

export default Company;