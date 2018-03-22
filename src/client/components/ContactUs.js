import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Form from './Form';
import BusinessHours from './BusinessHours';

const styles = theme => ({
  root: {
    backgroundColor: '#140d09',
    minHeight: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumn: '2fr 2fr'
  },

  left: {
    gridColumnStart: 1,
    gridColumnEnd: 2,
  },

  right: {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    justifySelf: 'center',
    alignSelf: 'center',
  }
})

const ContactUs = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* <div className={classes.left}>
        <BusinessHours />
      </div> */}
      <div className={classes.right}>
        <Form />
      </div>
    </div>
  )
}

ContactUs.PropTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContactUs);