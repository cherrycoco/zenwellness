import React from 'react';
import ScrollToTop from '../ScrollToTop';
import MainImg from '../MainBody/MainImg';
import img from '../../assets/dog-spa.jpg';
import massageImg from '../../assets/massage.jpg';
import Card from './Card';
import Details from './Details';
import '../../styles/Giftcard.css';

const GiftCard = () => (
  <div>
    <ScrollToTop />
    <MainImg 
      img={img}
      title='Give the gift of relaxation'
    />
    <div>
      <Card 
        img={massageImg}
        title='FULL BODY MASSAGE'
        time='50 Minutes'
        price='$49'
      />
      <Details />
    </div>
  </div>
)

export default GiftCard;