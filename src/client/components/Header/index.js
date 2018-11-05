import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';
import logo from '../../assets/zen-logo.png';
import Nav from './Nav';

class Header extends React.Component {

  render = () => (
    <div id='header'>
      <Link to='/'><h1>Zen Wellness Center</h1></Link>
      {/* <Link to='/'><img src={logo} alt='zen wellness center logo' /></Link> */}
      <Nav />
    </div>
  )
}

export default Header;