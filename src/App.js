import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import PriceList from './components/PriceList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <AboutUs />
        <PriceList />
        <ContactUs />
        <Form />
      </div>
    );
  }
}

export default App;
