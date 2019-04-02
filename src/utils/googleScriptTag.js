const googleScriptTag = (callback) => {
  const newScriptTag = document.createElement('script');
  newScriptTag.type = 'text/javascript';
  newScriptTag.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(newScriptTag, firstScriptTag);

  return newScriptTag;
}

export default googleScriptTag;
