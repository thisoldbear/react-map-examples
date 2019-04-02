import React from 'react';

import Marker from '../marker/marker';

const renderMarkers = (markers, map) => {
  return markers.map(event => {
    const {
      title, location, id
    } = event;

    return React.cloneElement(
      <Marker />, {
        id,
        title,
        key: id,
        map,
        google: window.google,
        position: {
          lat: location.lat,
          lng: location.lng
        },
      });
  });
};

export default renderMarkers;
