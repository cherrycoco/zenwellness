import React from 'react';

const Follow = () => (
  <div className='footer-block'>
    <h2>FOLLOW</h2>
    <div id='follow-icons'>
      <a href="https://www.facebook.com/zenwellnessvancouver/" target="_blank" rel="noopener noreferrer">
        <svg fill="#4360B4" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      </a>
      <a href="https://www.yelp.ca/biz/zen-wellness-center-vancouver" target="_blank" rel="noopener noreferrer">
        <img id='yelp-icon' src="https://dyn.yelpcdn.com/extimg/en_CA/rrc/7Ct2EOk4IOvinYfwmN_Kyw.png" alt="yelp review" />
      </a>
    </div>
  </div>
)

export default Follow;