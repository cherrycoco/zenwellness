import React from 'react';
import { connect } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import CommentSelectors from './CommentSelectors';
import Comment from './Comment';
import '../../styles/Testimonials.css';

const Testimonials = (props) => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce>
      <div 
        style={{backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.6), 
          rgba(255, 255, 255, 0.6)),
          url(${props.img})`}}
        className='testimonial-wrapper'
      >
        <div className='what-people-say'>
          <h2>
            <b>WHAT</b>PEOPLESAY
          </h2>
          <p>Our aim is to help you achieve your best health! Here is what our clients have to say about us.</p>
        </div>
        <div className='comments-wrapper'>
          <CommentSelectors />
          <div className={props.comment === 'first' ? 'show' : 'hide'}>
            <Comment
              comment={props.comment1}
              name={props.name1}
              business={props.business1}
              img={props.avatar1}
              link={props.link1}
            />
          </div>
          <div className={props.comment === 'second' ? 'show' : 'hide'}>
            <Comment 
              comment={props.comment2}
              name={props.name2}
              business={props.business2}
              img={props.avatar2}
              link={props.link2}
            />
          </div>
          <div className={props.comment === 'third' ? 'show' : 'hide'}>
            <Comment 
              comment={props.comment3}
              name={props.name3}
              business={props.business3}
              img={props.avatar3}
              link={props.link3}
            />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

const mapStateToProps = (state) => ({
  comment: state.commentSelector.comment
});

export default connect (mapStateToProps)(Testimonials);