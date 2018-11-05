import React from 'react';
import { connect } from 'react-redux';
import Service from './Service';
import SelectTreatment from './SelectTreatment';

const Treatments = ({treatment}) => (
  <div>
    <div className={treatment === 'massage' ? 'show':'hide'}>
      <Service 
        imgLeft='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img9.jpg'
        imgCenter='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img11.jpg'
        imgRight='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img10.jpg'
        title='MASSAGE THERAPY'
        body='Massage therapy is the manipulation of soft tissues of the body including, muscles, connective tissues, tendons, ligaments and joints.'
      />
    </div>
    <div className={treatment === 'footReflexology' ? 'show':'hide'}>
      <Service 
        imgLeft='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img12-242x300.jpg'
        imgCenter='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img8-150x150.jpg'
        imgRight='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img13-242x300.jpg'
        title='FOOT REFLEXOLOGY'
        body='Beyond the feel-good effects of the treatment, the practice and purpose go deeper than the skin and muscles by taking specific reflex points on the foot to induce a healing response in corresponding organs and areas of the body.'
      />
    </div>

    <div className={treatment === 'acupuncture' ? 'show':'hide'}>
      <Service 
        imgLeft='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img18-242x300.jpg'
        imgCenter='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img20-150x150.jpg'
        imgRight='http://wpdemos.themezaa.com/brando/spa/wp-content/uploads/2016/04/spa-img19-242x300.jpg'
        title='ACUPUNCTURE'
        body='Acupuncture stimulates the release of endorphins – the body’s natural pain-relieving neurohormones – through the insertion of needles into specific anatomical points (acupuncture points) to encourage natural healing.'
      />
    </div>
    <SelectTreatment />
  </div>
)

const mapStateToProps = (state) => ({
  treatment: state.treatmentSelector.treatment
});

export default connect (mapStateToProps)(Treatments);