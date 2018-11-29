import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: '#ff9061',
}

class Nav extends React.Component {
  render () {
    return (
      <div id='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink activeStyle={activeStyle} to='/about'>About</NavLink>
        <NavLink activeStyle={activeStyle} to='/treatments'>Treatments</NavLink>
        <NavLink activeStyle={activeStyle} to='/rates'>Rates</NavLink>
        <NavLink activeStyle={activeStyle} to='/contact'>Contact</NavLink>
        {/* <NavLink activeStyle={activeStyle} to='/giftcard'>Gift Card</NavLink> */}
      </div>
  )}
}

export default Nav;