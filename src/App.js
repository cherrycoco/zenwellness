import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PriceList from './components/PriceList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

class App extends Component {
  render() {
    return (
      <AboutUs />
      // <Home />
      // <PriceList />
    );
  }
}

export default App;
