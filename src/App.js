import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import PriceList from './components/PriceList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Form from './components/Form';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
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
