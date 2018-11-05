import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: '#ff9061',
}

class Nav extends React.Component {

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

  render () {
    return (
      <div id='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink activeStyle={activeStyle} to='/about'>About</NavLink>
        <NavLink activeStyle={activeStyle} to='/treatments'>Treatments</NavLink>
        <NavLink activeStyle={activeStyle} to='/rates'>Rates</NavLink>
        <NavLink activeStyle={activeStyle} to='/contact'>Contact</NavLink>
      </div>
  )}
}

export default Nav;