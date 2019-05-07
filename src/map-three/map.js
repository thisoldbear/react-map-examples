import React, { useRef, useState, useEffect } from 'react';
import newGoogleMap from '../utils/newGoogleMap';
import renderMarkers from '../utils/renderMarkers';

const Map = ({ options }) => {
  const mapEl = useRef(null);
  const mapObj = useRef(null);

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    mapObj.current = newGoogleMap(mapEl.current, options);

    setMarkers([
      {
        title: 'Daniel',
        id: '1',
        location: {
          lat: '51.45000',
          lng: '-2.55000'
        }
      }
    ]);

    // Mock state change over time
    setTimeout(() => {
      setMarkers([
        {
          title: 'David',
          id: '2',
          location: {
            lat: '51.46000',
            lng: '-2.56000'
          }
        }
      ]);
    }, 4000);
  }, [options]);

  return (
    <div className="map" ref={mapEl}>
      {renderMarkers(markers, mapObj.current)}
    </div>
  );
}

export default Map;
