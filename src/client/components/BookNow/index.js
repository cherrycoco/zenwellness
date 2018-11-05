import React from 'react';
import '../../styles/BookNow.css';

const BookNow = (props) => (
  <div className='bookNow' style={{
    backgroundImage: 
    `linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)),
    url(${props.img})`
  }}>
    <div>
      <button>BOOK Your Appointment Today!</button>
    </div>
  </div>
)

export default BookNow;