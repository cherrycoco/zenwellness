import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import MainImg from '../MainBody/MainImg';
import mainImg from '../../assets/reflexology.jpg';
import reflexologyChart from '../../assets/foot-reflexology.jpg';
import BookBox from '../BookNow/BookBox';
import ScrollToTop from '../ScrollToTop/index';
import '../../styles/Treatment.css';

class FootReflexology extends React.Component {
  componentDidMount () {
    document.addEventListener('scroll', this.floatBookBox);
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.floatBookBox);
  }

  floatBookBox = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    let y = 200 - (innerHeight - scrollTop);
    let x = y / 2;

    if (innerWidth > 859 && x > 0 && x < 80) {
      const bookBoxes = Array.from(document.getElementsByClassName('treatment-book-box'));
      bookBoxes.forEach(bookBox => {
        bookBox.style.transform = `translateY(-${x}px)`;
      });
    }
  }

  render = () => (
    <div className='treatment'>
      <ScrollToTop />
      <MainImg img={mainImg} title='Foot Reflexology' />
      <ScrollAnimation 
        animateIn="slideInUp"
        animateOnce
      >
        <div className='treatment-description'>
          <h2>FOOT REFLEXOLOGY</h2>
          <p>
            It is an ancient Chinese pressure point massage of the feet to target reflex zones that correspond to organs within the body. Reflexology stimulates energy meridians, which relax and promote a sense of balanced and reawakened energy.
          </p>
        </div>
      </ScrollAnimation>
      <div className='treatment-book-box'>
        <BookBox />
      </div>
      <div className='clearFloat'/>
      <div id='treatment-acupuncture'>
        <ScrollAnimation
          animateIn="slideInUp"
          animateOnce
        >
        <div className='treatment-acupuncture-paragraph'>
          <h3>What is Reflexology?</h3>
          <p>Reflexology is the study of reflexes. Reflexology therapies are natural therapeutic methods derived from this study based on the principle that there are reflexes in the body that map to other parts, glands, and organs of the body. Through the application of pressure on these reflexes using specific hand and finger techniques, reflexology therapy can relieve tension, Support the body’s efforts to function optimally and improve circulation.</p>
          <p><b>How does it work?</b></p>
          <p>Foot reflexology is a natural therapy that restores balance in the body by using pressure techniques to stimulate the foot's reflex points. Similar to a deep tissue massage for your feet. Used to maintain good health, it is known to:</p>
          <ul>
            <li>relieve stress</li>
            <li>increase circulation</li>
            <li>detoxify</li>
            <li>relieve aching muscles</li>
            <li>increase sense of well-being</li>
          </ul>
          <p><b>Rates</b></p>
          <h4>50 Minutes</h4>
          <h5>$39</h5>
          <div className='clearFloat'/>
          <h4>75 Minutes</h4>
          <h5>$58</h5>
          <div className='clearFloat' />
          <h4>90 Minutes</h4>
          <h5>$70</h5>
          <div className='clearFloat' />
        </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInUp"
          animateOnce
          >
        <div className='treatment-acupuncture-paragraph'>
          <h3>Checkout the Reflexology Chart Before Your Visit!</h3>
          <img id='reflexology-chart' src={reflexologyChart} />
        </div>
      </ScrollAnimation>
    </div>
  </div>
  )
}

export default FootReflexology;