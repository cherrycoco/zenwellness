import React from 'react';
// import '../styles/Home.css';
import logo from '../assets/zen-logo.png';

const Home = () => (
  <div id='home'>
    <div id='logo'>
      <img src={logo} alt='zen wellness center logo' />
      <h1>Restore your health with a touch of Zen</h1>
      <h3>Acupuncture | Massage | Foot Reflexology</h3>
    </div>
  </div>
)

export default Home;