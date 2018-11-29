import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import MainImg from '../MainBody/MainImg';
import mainImg from '../../assets/acupuncture1.jpg';
import BookBox from '../BookNow/BookBox';
import ScrollToTop from '../ScrollToTop/index';
import '../../styles/Treatment.css';

class Acupuncture extends React.Component {
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
      <MainImg img={mainImg} title='Acupunture' />
      <ScrollAnimation 
        animateIn="slideInUp"
        animateOnce
      >
        <div className='treatment-description'>
          <h2>ACUPUNCTURE</h2>
          <p>
            Acupuncture stimulates the release of endorphins – the body’s natural pain-relieving neurohormones – through the insertion of needles into specific anatomical points (acupuncture points) to encourage natural healing. At Zen, our acupuncture treatments are a combination treatment between the use of needles, acupressure massage, and topical 100% natural Chinese herbs to treat both your symptoms and the root cause of your problem.
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
          <h3>What is Acupuncture?</h3>
          <p>Acupuncture stimulates the balance and flow of Qi energy that in Traditional Chinese Medicine is considered essential to health. When the body is healthy, Qi (pronounced chee), flows smoothly through the meridians that make up a conceptual network of pathways throughout the entire body. When the balance or flow of Qi is deficient or obstructed it may be diseased or susceptible to illness. Acupuncture treats both the symptoms and the root causes of the patient’s illness.</p>
          <p>In North America acupuncture is often used when western medicine has failed. In western medicine, the yin/yang balance it achieves is known as homeostasis.</p>
          <p><b>How does it work?</b></p>
          <p>Acupuncture is an ancient, safe and effective alternative to medication and, in some cases, surgery.  Acupuncture stimulates the release of endorphins – the body’s natural pain-relieving neurohormones – through the insertion of needles into specific anatomical points (acupuncture points) to encourage natural healing. Therapeutic effects include:</p>
          <ul>
            <li>Pain relief</li>
            <li>Increased energy</li>
            <li>Improved mood</li>
            <li>Improved body function</li>
          </ul>
          <p>Atraumatic acupuncture needles are rounded at the tip so that they slide smoothly through tissue and are unlikely to cause bleeding. Needles are left in place for 15 to 30 minutes during which time the practitioner may manipulate the needles in order to strengthen or reduce the flow of Qi.</p>
          <p><b>Rates</b></p>
          <h4>Initial Assessment & Treatment</h4>
          <h5>$105</h5>
          <div className='clearFloat'/>
          <h4>Subsequent Treatments</h4>
          <h5>$88</h5>
          <div className='clearFloat' />
        </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInUp"
          animateOnce
        >
        <div className='treatment-acupuncture-paragraph'>
          <h3>Is Acupuncture for you?</h3>
          <p><b>Does acupuncture hurt?</b></p>
          <p>Acupuncture is a gentle treatment. Most patients find that the treatments are relaxing and cause minimal discomfort. It is usually a comfortable treatment. Acupuncture needles are very fine, metallic, and as thin as a hair, making them quite painless upon insertion. Everyone experiences acupuncture differently, but most feel no pain or very minimal pain as the needles are inserted. You may experience a mild aching sensation or warmth around the needle site.</p>
          <p><b>Does acupuncture work?</b></p>
          <p>Acupuncture can be used to treat people of all ages from children to seniors. Acupuncture is an effective treatment for pain. It is the stimulation, by insertion of needles, of specific points on the body which have the ability to alter various biochemical and physiological conditions. Acupuncture stimulates the release of endorphins, which are the body’s natural pain-relieving neurohormones. Acupuncture affects the functioning of the hormonal system, promotes a decrease in inflammation, increased circulation and relief from pain.</p>
          <p><b>Are the needles clean? Are they re-used?</b></p>
          <p>At Zen, we use single-use, sterile disposable needles.</p>
        </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInUp"
          animateOnce
        >
        <div className='treatment-acupuncture-paragraph'>
          <h3>Is Acupuncture Covered?</h3>
          <p>Acupuncture insurance coverage is a common question. Many insurance plans offer coverage for acupuncture treatment. Contact your insurance company directly to find out if your plan covers acupuncture and any limits to the number of treatments its covers. Acupuncture may also be covered if you sustained a workplace injury or were injured in a motor vehicle accident.</p>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Acupuncture;