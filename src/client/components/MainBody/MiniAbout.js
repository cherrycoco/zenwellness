import React from 'react';
import { Link } from 'react-router-dom';

const MiniAbout = () => (
  <div id='miniAbout'>
    <h2 className='mainBody-heading'>OUR STORY</h2>
    <div id='miniAbout-body'>
      <p><b>Zen started with a dream to help you achieve your best health through holistic practices so that you can live a life full of happiness.</b></p>
      <p>Cindy and Stanley have been on a continuous journey for more than 10 years perfecting their respective treatment techniques. </p>
      <p>Cindy started her career as a nurse at the age of 23. Realizing she wanted a more hands-on approach to helping her patients ... </p>
      <Link to='/about'><button className='box'>READ MORE</button></Link>
    </div>
  </div>
)

export default MiniAbout;