import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';
import Header from './components/Header/index';
import MainBody from './components/MainBody/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import TreatmentComponent from './components/Treatments/index';
import Rates from './components/Rates/index';
import Footer from './components/Footer/index';
import GiftCard from './components/GiftCard/index';
import Acupuncture from './components/Acupuncture/index';
import Massage from './components/Massage/index';
import FootReflexology from './components/FootReflexology/index';


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
            <Route path="/giftcard" component={GiftCard} />
            <Route path="/massage" component={Massage} />
            <Route path="/acupuncture" component={Acupuncture} />
            <Route path="/foot-reflexology" component={FootReflexology} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
