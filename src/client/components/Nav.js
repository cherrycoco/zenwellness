import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import logo from '../assets/zen-logo.png';

const styles = {
  root: {
    position: 'sticky',
    top: 0,
  },
  list: {
    width: 150,
  },
  logo: {
    width: 130,
    margin: '20px 10px',
  },
  navItem: {
    width: 150,
  }
};

class Nav extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      'right': open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      <img className={classes.logo} src={logo} alt='zen wellness center logo' />
        <Button className={classes.navItem}>Home</Button>
        <Button className={classes.navItem}>About Us</Button>
        <Button className={classes.navItem}>Price List</Button>
        <Button className={classes.navItem}>Contact Us</Button>
      </div>
    );

    return (
      <div className={classes.root}>
        <Button style={{float: 'right'}}onClick={this.toggleDrawer(true)}><Icon>menu</Icon></Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);