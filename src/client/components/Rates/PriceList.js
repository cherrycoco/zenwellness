import React from 'react';
import '../../styles/PriceList.css';

const PriceList = () => (
  <div id='price-list'>
    <div id='price'>
      <div className='categories'>
        <h2>Acupuncture</h2>
        <div className='items'>
          <div className='item'>Initial Assessment & Treatment</div>
          <div className='price'>$95</div>
        </div>
        <div className='items'>
          <div className='item'>Subsequent Treatments</div>
          <div className='price'>$85</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Massage</h2>
        <div className='items'>
          <div className='item'>Chair Massage</div>
          <div className='price'>$1 / min</div>
        </div>
        <div className='items'>
          <div className='item'>Swedish / Deep Tissue Massage:</div>
        </div>
        <div className='items'>
          <div className='item'>50 min</div>
          <div className='price'>$49</div>
        </div>
        <div className='items'>
          <div className='item'>60 min</div>
          <div className='price'>$59</div>
        </div>
        <div className='items'>
          <div className='item'>75 min</div>
          <div className='price'>$74</div>
        </div>
        <div className='items'>
          <div className='item'>90 min</div>
          <div className='price'>$89</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Foot Reflexology</h2>
        <div className='items'>
          <div className='item'>50 min</div>
          <div className='price'>$39</div>
        </div>
        <div className='items'>
          <div className='item'>75 min</div>
          <div className='price'>$59</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo A - 75 min</h2>
        <div className='items'>
          <div className='item'>50 min Deep Tissue Massage or Swedish Massage <b>&</b> 25 min Foot Reflexology</div>
          <div className='price'>$68</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo B - 100 min</h2>
        <div className='items'>
          <div className='item'>50 min Deep Tissue Massage or Swedish Massage <b>&</b> 50 min Foot Reflexology</div>
          <div className='price'>$84</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo C - 125 min</h2>
        <div className='items'>
          <div className='item'>75 min Deep Tissue Massage or Swedish Massage <b>&</b> 50 min Foot Reflexology</div>
          <div className='price'>$108</div>
        </div>
      </div>

      <div className='categories'>
        <h2>Deluxe Combo D - 125 min</h2>
        <div className='items'>
          <div className='item'>90 min Deep Tissue Massage or Swedish Massage <b>&</b> 50 min Foot Reflexology</div>
          <div className='price'>$128</div>
        </div>
      </div>
    </div>
  </div>
)

export default PriceList;