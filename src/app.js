import React, { Component } from 'react';
import './app.css';

import MapOne from './map-one/map';
import MapTwo from './map-two/map';

const App = () => (
  <div className="app">
    {/* Only render one at a time to avoid Google map warnings 🕊 */}
    {/* <MapOne
          options={{
            center: { lat: 51.45523, lng: -2.59665 },
            zoom: 12
          }}
        /> */}
    <MapTwo
      options={{
        center: { lat: 51.45523, lng: -2.59665 },
        zoom: 12
      }}
    />
  </div>
);


export default App;
