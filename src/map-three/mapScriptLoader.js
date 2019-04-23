import React, { Fragment } from 'react';

import useScript from './useScript';

import Map from './map';

const MapScriptLoader = ({ options }) => {
  const [loaded, error] = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  );

  return (
    <Fragment>
      {loaded ? (
        <Map options={options} />
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Someting went wrong</p>}
    </Fragment>
  );
}

export default MapScriptLoader;
