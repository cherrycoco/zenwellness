import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';
// import logo from './logo.svg';
// import PriceList from './components/PriceList';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';
// import Nav from './components/Nav';
// import Map from './components/Map';
// import Navbar from './components/Navbar';
import Header from './components/Header/index';
import MainBody from './components/MainBody/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import TreatmentComponent from './components/Treatments/index';
import Rates from './components/Rates/index';
import Footer from './components/Footer/index';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={MainBody} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/treatments" component={TreatmentComponent} />
            <Route path="/rates" component={Rates} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
