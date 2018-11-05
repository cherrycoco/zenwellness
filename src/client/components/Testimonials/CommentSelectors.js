import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import changeComment from '../../../actions/changeComment';

const styles = {
  size: {
    width: 5,
    height: 5,
    float: 'right',
  },
  sizeIcon: {
    fontSize: 15,
  },
};

const RadioButtons = ({comment, changeComment}) => {
  return (
    <div className='comment-selector'>
      <Radio
        checked={comment === 'third'}
        onChange={()=>{changeComment('third')}}
        value="third"
        color="default"
        name="comment-selector"
        aria-label="Third Comment"
        style={styles.size}
        icon={<RadioButtonUncheckedIcon style={styles.sizeIcon}/>}
        checkedIcon={<RadioButtonCheckedIcon style={styles.sizeIcon}/>}
      />
      <Radio
        checked={comment === 'second'}
        onChange={()=>{changeComment('second')}}
        value="second"
        color="default"
        name="comment-selector"
        aria-label="Second Comment"
        style={styles.size}
        icon={<RadioButtonUncheckedIcon style={styles.sizeIcon}/>}
        checkedIcon={<RadioButtonCheckedIcon style={styles.sizeIcon}/>}
      />
      <Radio
        checked={comment === 'first'}
        onChange={()=>{changeComment('first')}}
        value="first"
        color="default"
        name="comment-selector"
        aria-label="First Comment"
        style={styles.size}
        icon={<RadioButtonUncheckedIcon style={styles.sizeIcon}/>}
        checkedIcon={<RadioButtonCheckedIcon style={styles.sizeIcon}/>}
      />
      <div style={{clear: 'both'}} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  comment: state.commentSelector.comment
});

const mapDispatchToProps = dispatch => ({
  changeComment: (comment) => (
    dispatch(changeComment(comment))
  )
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(RadioButtons);