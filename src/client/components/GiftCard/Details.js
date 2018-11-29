import React from 'react';
import Divider from '@material-ui/core/Divider';

const styles = {
  divider: {
    width: '90%',
    margin: '0 auto',
  }
}
const Details = (props) => (
  <div className='details-wrapper'>
    <div className='details'>
      <h2>50 Minutes of Full Body Massage</h2>
      <Divider style={styles.divider}/>
      <p>A restorative full body massage that aids in releasing deeply held patterns of tension, removing
        toxins, relaxing, soothing and thereby encouraging muscles to operate at full capacity. The
        techniques used in this massage create a prolonged state of reduced muscular tension by
        applying deep muscle compression and cross fibre friction to increase blood and lymphatic
        flow.
      </p>
      <Divider style={styles.divider}/>
      <h4>Give the gift of relaxation with a 50 minute full body massage</h4>
      <form>
        <span className='gc-name'>Recipient's name:</span>
        <input name='name' type="text" />
        <br />
        <span className='gc-quantity'>Qty:</span>
        <input name='quantity' type="number" />
        <span className='gc-price'>$49</span>
        <div className='gc-buy-buttons'>
          <input type="submit" value="Add To Cart"/>
          <input type="submit" value="Buy it Now"/>
        </div>
      </form>
    </div>
  </div>
)

export default Details;