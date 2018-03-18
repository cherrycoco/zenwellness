import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: 400,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    fontSize: 25,
  },
  text: {
    fontSize: '25px',
    textAlign: 'center',
    marginTop: '30px',
  },
  table: {
    width: 200,
    marginTop: '5%'
  },
});

let id = 0;
function createData(day, open, close) {
  id += 1;
  return { id, day, open, close };
}

const data = [
  createData('Monday', '10:00am', '9:00pm'),
  createData('Tuesday', '10:00am', '9:00pm'),
  createData('Wednesday', '10:00am', '9:00pm'),
  createData('Thursday', '10:00am', '9:00pm'),
  createData('Friday', '10:00am', '9:00pm'),
  createData('Saturday', '10:00am', '9:00pm'),
  createData('Sunday', '10:00am', '9:00pm'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <h2 className={classes.text}>Business Hours</h2>
      <Table className={classes.table}>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.day}</TableCell>
                <TableCell numeric>{n.open}</TableCell>
                <TableCell numeric>{n.close}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);