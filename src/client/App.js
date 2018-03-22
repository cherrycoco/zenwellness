import React, { Component } from 'react';
import logo from './logo.svg';
import PriceList from './components/PriceList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Nav from './components/Nav';
import Map from './components/Map';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <AboutUs /> 
        <PriceList />
        <Map />
      </div>
    );
  }
}

export default App;
