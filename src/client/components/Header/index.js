import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';
import logo from '../../assets/zen-logo.png';
import Nav from './Nav';
import MobileNav from './MobileNav';

class Header extends React.Component {

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // add and remove shrink class to navbar
    let header = document.getElementById('header');
    if (window.scrollY !== 0) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  };
  
  renderFull = () => (
    <Nav />
  )

  renderMobile = () => (
    <MobileNav />
  )

  render = () => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    return (
      <div id='header'>
        <Link to='/'><h1>Zen Wellness Center</h1></Link>
        {w > 800 ? this.renderFull() : this.renderMobile()}
      </div>
    )
  }
}

export default Header;