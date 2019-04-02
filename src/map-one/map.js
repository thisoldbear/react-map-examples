import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import newGoogleMap from '../utils/newGoogleMap';
import renderMarkers from '../utils/renderMarkers';

class Map extends Component {
  init() {
    this.map = newGoogleMap(ReactDOM.findDOMNode(this.refs.map), this.props.options);
  }

  // Initial state
  state = {

    // Map markers
    markers: [{
      title: 'Daniel',
      id: '1',
      location: {
        lat: '51.45000',
        lng: '-2.55000'
      }
    },
    {
      title: 'David',
      id: '2',
      location: {
        lat: '51.46000',
        lng: '-2.56000'
      }
    }]
  }

  // Refactor as componentWillReceiveProps is not recommended
  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    // Props from scriptLoader wrapper
    if ((isScriptLoaded && !this.props.isScriptLoaded) && isScriptLoadSucceed) {
      this.init();
    }
  }

  componentDidMount() {
    const {
      markers,
    } = this.state;

    // Mock new state over time
    setTimeout(() => {
      this.setState({
        markers: [
          ...markers,
          {
            title: 'Colin',
            id: '3',
            location: {
              lat: '51.43000',
              lng: '-2.53000'
            }
          }
        ]
      })
    }, 4000);

    setTimeout(() => {
      this.setState({
        markers: [
          {
            title: 'Nigel',
            id: '4',
            location: {
              lat: '51.42000',
              lng: '-2.57000'
            }
          }
        ]
      })
    }, 6000);
  }

  render() {
    const {
      isScriptLoadSucceed,
    } = this.props;

    const {
      markers,
    } = this.state;

    return (
      <div className="map" ref="map">
        {isScriptLoadSucceed &&
          renderMarkers(markers, this.map)
        }
      </div>
    );
  }
}

export default scriptLoader(
  [
    `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  ],
)(Map);
