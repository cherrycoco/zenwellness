import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PriceList from './components/PriceList';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Home />
      // <PriceList />
    );
  }
}

export default App;
