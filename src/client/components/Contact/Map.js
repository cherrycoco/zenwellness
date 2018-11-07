import React from 'react';

const Map = () => {
  const url = `//www.google.com/maps/embed/v1/place?q=Zen%20Wellness%20Center,Vancouver%20BC,%20Canada
    &zoom=15
    &key=${process.env.REACT_APP_GOOGLE_KEY}`

  return (
    <div id='map'>
      <iframe src="https://snazzymaps.com/embed/111616" width="100%" height="450px" style={{border:'none'}}></iframe>
    </div>
  )
}

export default Map;