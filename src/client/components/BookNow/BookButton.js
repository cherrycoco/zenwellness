import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BookNow.css';

const BookButton = (props) => (
  <div className='book-button'>
    <Link to='/contact'><button>{props.title}</button></Link>
  </div>
)

export default BookButton;