import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    backgroundColor: 'rgb(34, 34, 34)',
    marginTop: '15px',
  },
  h4: {
    marginTop: 0,
    color: 'white',
    padding: '40px',
    fontSize: '1.1rem',
    fontWeight: 300,
  },
  avatar: {
    width: 60,
    height: 60,
    float: 'left',
  },
  cite: {
    float: 'left',
    padding: '15px 20px',
  },
  name: {
    display: 'block',
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: '18px',
    letterSpacing: '0.1em',
  },
  business: {
    display: 'block',
    color: '#444',
  }
};

const Comment = (props) => (
  <div>
    <div className='comment'>
      <p>{props.comment}</p>
    </div>
    <div className='avatar-wrapper'>
      <Avatar
        alt={props.name}
        src={props.img}
        style={styles.avatar}
      />
      <div style={styles.cite}>
        <span style={styles.name}>{props.name}</span>
        <a target='_blank' style={styles.business} href={props.link}>{props.business}</a>
      </div>
    </div>
  </div>
);

export default Comment;