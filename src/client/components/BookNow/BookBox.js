import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const BookBox = () => (
  <div className='book-box-wrapper'>
    <ScrollAnimation
      animateIn="slideInUp"
      animateOnce
    >
      <div className='book-box'>
        <h3>TO BOOK, OR FOR MORE INFORMATION, PLEASE CONTACT</h3>
        <div className='book-box-contact'>
          <i className="material-icons md-18 md-gray">call</i>
          <a href="tel:604-428-0896">(604) 428-0896</a>
        </div>
        <div className='book-box-contact'>
          <i className="material-icons md-18 md-gray">email</i> 
          <a href='mailto:zenwellness@outlook.com'>zenwellness@outlook.com</a>
        </div>
      </div>
    </ScrollAnimation>
  </div>
)

export default BookBox;