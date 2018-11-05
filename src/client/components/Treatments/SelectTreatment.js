import React from 'react';
import { connect } from 'react-redux';
import changeTreatment from '../../../actions/changeTreatment';

const SelectTreatment = ({treatment, changeTreatment}) => {
  return (
    <div id='select-treatment'>
      <a onClick={()=>{changeTreatment('massage')}} className={treatment === 'massage' ? 'active':'border-underline-from-left'}>MASSAGE</a>
      <a onClick={()=>{changeTreatment('footReflexology')}} className={treatment === 'footReflexology' ? 'active':'border-underline-from-left'}>FOOT REFLEXOLOGY</a>
      <a onClick={()=>{changeTreatment('acupuncture')}} className={treatment === 'acupuncture' ? 'active':'border-underline-from-left'}>ACUPUNCTURE</a>
    </div>
  )
}

const mapStateToProps = (state) => ({
  treatment: state.treatmentSelector.treatment
});

const mapDispatchToProps = dispatch => ({
  changeTreatment: (treatment) => (
    dispatch(changeTreatment(treatment))
  )
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(SelectTreatment);