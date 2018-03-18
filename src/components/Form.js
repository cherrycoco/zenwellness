import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: 400,
    height: 530,
    textAlign: 'center',
    marginTop: '20px',
  },
  formHeader: {
    paddingTop: '20px',
    marginBottom: '20px',
  },
  input: {
    width: '80%',
    height: '35px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#ECF2F4',
    border: 0,
    textIndent: '10px',
    fontFamily: 'Indie Flower, cursive',
    fontSize: '16px',
  },
  textarea: {
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    width: '80%',
    backgroundColor: '#ECF2F4',
    border: 0,
  },
  button: {
    width: '80%',
    marginTop: '10px',
    backgroundColor: '#8EB5E2',
    color: 'white',
  }
});

function Form(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={4}>
      <div className={classes.formHeader}>
        <svg width='70' height='70' viewBox='0 0 25 25'>
          <path fill="#484848" d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z" />
        </svg>
        <h2>Leave us a message!</h2>
      </div>
      <form>
        <div><input className={classes.input} type='text' placeholder='Full Name'/></div>
        <div><input className={classes.input} type='email' placeholder='E-mail'/></div>
        <div><input className={classes.input} type='text' placeholder='Subject'/></div>
        <div><textarea className={classes.textarea} rows = "8" cols = "50" name = "description" /></div>
        <Button variant="raised" className={classes.button}>Send</Button>
      </form>
    </Paper>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);