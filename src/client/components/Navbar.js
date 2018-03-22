import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme =>({
  root: {
    backgroundColor: 'white',
    height: '50px',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
  },
  left: {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    marginLeft: '20px',
    alignSelf: 'center',
  },
  right: {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    color: 'white',
    alignSelf: 'center',
    justifySelf: 'end',
    marginRight: '20px',
  },
});

const Navbar = (props) => {
  const { classes } = props;

  return (
    <div id='navbar' className={classes.root}>
      <div className={classes.left}>
        <h2>Zen Wellness Center</h2>
      </div>
      <div className={classes.right}>
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#price-list">Price List</a>
        <a href="#map">Contact Us</a>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);