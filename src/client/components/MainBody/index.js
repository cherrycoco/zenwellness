import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import MainImg from './MainImg';
// import NumLink from './NumLink';
import ScrollToTop from '../ScrollToTop';
import ServiceComponent from './ServiceComponent';
import MiniAbout from './MiniAbout';
// import Treatments from '../Treatments/Treatments';
// import BookNow from '../BookNow';
import mainImg from '../../assets/lavender-salt.jpg';
import massageImg from '../../assets/massage1.jpg';
import frImg from '../../assets/reflexology.jpg';
import spa1Img from '../../assets/acupuncture2.jpg';
import spa4Img from '../../assets/spa-background12.jpg';
import '../../styles/MainBody.css';
import BookButton from '../BookNow/BookButton';
import Testimonials from '../Testimonials';
import review1 from '../../assets/review1.jpg';
import review2 from '../../assets/review2.jpg';
import review3 from '../../assets/review3.jpg';



const MainBody = () => (
  <div>
    <ScrollToTop />
    <MainImg 
      img= {mainImg}
      title='Relax, Restore & Rejuvinate'
    />

    <div id='what-do-you-need'>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
      >
        <h3>ACUPUNCTURE / MASSAGE / FOOT REFLEXOLOGY</h3>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
      >
        <h2>WHAT DO YOU NEED?</h2>
      </ScrollAnimation>
      
    </div>

    <div id='serviceComponent-wrapper'>
      <ScrollAnimation
        animateIn="slideInLeft"
        delay={300}
        animateOnce
      >
        <ServiceComponent 
          title='MASSAGE'
          img={massageImg}
          link='/massage'
        />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="slideInUp"
        animateOnce
        delay={600}
      >
        <ServiceComponent 
          title='ACUPUNCTURE'
          img={spa1Img}
          link='/acupuncture'
        />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="slideInRight"
        animateOnce
        delay={900}
      >
        <ServiceComponent 
          title='FOOT REFLEXOLOGY'
          img={frImg}
          link='/foot-reflexology'
        />
      </ScrollAnimation>
    </div>

    <ScrollAnimation
      animateIn="slideInUp"
      animateOnce
      offset={200}
    >
      <BookButton title="BOOK AN APPOINTMENT"/>
    </ScrollAnimation>

    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce
    >
      <MiniAbout />
    </ScrollAnimation>
    {/* <div>
      <h2 className='mainBody-heading'>TREATMENTS</h2>
      <Treatments />
    </div> */}
    <Testimonials 
      img={spa4Img}
      name3='Lily Y'
      business3='Review from Yelp'
      avatar3={review1}
      comment3={`"I came here for a massage but found a great doctor named Stanley and his exclusive herbs. I've been coming here for more than two years. My sciatic pain and frozen shoulders were cured after about 5 times! Later all kinds of pains were gone. Many friends I recommended were cured too. I come once a week now just to maintain overall wellness."`}
      link3='https://www.yelp.ca/biz/zen-wellness-center-vancouver?start=20'
      name1='Artemisa Bega'
      business1='Review from Google'
      avatar1={review2}
      comment1={`"A part from the fact that these people are the nicest I've met in the universe, the massage was amazing. Intense but slow enough to let me cope with the pain . Wonderful. Low prices too. They got themselves a new loyal costumer ❤"`}
      link1='https://www.google.ca/search?q=zen+wellness+center&oq=zen+wellnes&aqs=chrome.0.69i59j69i61j69i60j69i59j69i57j0.4868j0j1&sourceid=chrome&ie=UTF-8#lrd=0x548673e97ce952eb:0xb256c6c2698e64a2,1,,,'
      name2='Jordan M'
      business2='Review from Yelp'
      avatar2={review3}
      comment2={`"One of the best massages (foot reflex and deep tissue back) that my fiancée and I have EVER gotten. Prices are reasonable too. HIGHLY recommend"`}
      link2='https://www.yelp.ca/biz/zen-wellness-center-vancouver'
    />
    {/* <BookNow img={spa4Img}/> */}
  </div>
);

export default MainBody;