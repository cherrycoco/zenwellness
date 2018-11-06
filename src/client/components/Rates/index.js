import React from 'react';
import RateComponent from './RateComponent';
import MainImg from '../MainBody/MainImg';
import ScrollToTop from '../ScrollToTop';
import img from '../../assets/spa-background5.jpg';
import comboImg from '../../assets/spa-background11.jpg';
import '../../styles/Rates.css';
import PriceList from './PriceList';

const Rates = () => (
  <div id='rates'>
    <ScrollToTop />
    <MainImg 
      img={img}
      title='Rates'
    />
    <PriceList />
    {/* <div id='rate-components-wrapper'>
      <RateComponent 
        src='https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/20141119122408ubqupt.jpg'
        alt='swedish massage'
        title='SWEDISH MASSAGE'
        lineOneLeft='50 min'
        lineOneRight='$49'
        lineTwoLeft='75 min'
        lineTwoRight='$74'
        lineThreeLeft='90 min'
        lineThreeRight='$89'
      />
      <RateComponent 
        src='https://img.grouponcdn.com/iam/3fHL8kzsf4SDGa4ngYknzNnRiq2S/3f-2048x1229/v1/c700x420.jpg'
        alt='deep tissue massage'
        title='DEEP TISSUE MASSAGE'
        lineOneLeft='50 min'
        lineOneRight='$49'
        lineTwoLeft='75 min'
        lineTwoRight='$74'
        lineThreeLeft='90 min'
        lineThreeRight='$89'
      />
      <RateComponent 
        src='https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/org/istock-480392420.jpg'
        alt='foot reflexology'
        title='FOOT REFLEXOLOGY'
        lineOneLeft='50 min'
        lineOneRight='$39'
        lineTwoLeft='75 min'
        lineTwoRight='$58'
        lineThreeLeft='90 min'
        lineThreeRight='$70'
      />
      <RateComponent 
        src='https://www.mccaffreyhealth.com/wp-content/uploads/2017/11/Acupuncture.jpg'
        alt='acupuncture'
        title='ACUPUNCTURE'
        lineOneLeft='Initial assessment & treatment'
        lineOneRight='$75'
        lineTwoLeft='Subsequent treatments'
        lineTwoRight='$65'
      />
      <RateComponent 
        src={comboImg}
        alt='deluxe combo'
        title='DELUXE COMBO'
        lineOneLeft='A: 50 min Body Massage & 25 min Reflexology'
        lineOneRight='$68'
        lineTwoLeft='B: 50 min Body Massage & 50 min Reflexology'
        lineTwoRight='$84'
        lineThreeLeft='C: 50 min Body Massage & 75 min Reflexology'
        lineThreeRight='$108'
      />
    </div> */}
  </div>
)

export default Rates;