import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import googleScriptTag from '../utils/googleScriptTag';
import newGoogleMap from '../utils/newGoogleMap';
import renderMarkers from '../utils/renderMarkers';

class Map extends Component {
  init() {
    this.map = newGoogleMap(ReactDOM.findDOMNode(this.refs.map), this.props.options);
  }

  // Initial state
  state = {
    scriptLoaded: false,

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

  componentDidMount() {
    // Crude check for Google
    if (!window.google) {
      // Add a new Google script tag and wait for it to load
      googleScriptTag()
        .addEventListener('load', e => {
          this.init();

          // Update state to allow marker rendering
          this.setState({
            scriptLoaded: true
          });
        });
    }

    // Mock state change over time
    setTimeout(() => {
      this.setState({
        markers: [
          ...this.state.markers,
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
      markers,
      scriptLoaded,
    } = this.state;

    return (
      <div className="map" ref="map">
        {scriptLoaded && renderMarkers(markers, this.map)}
      </div>
    );
  }
}

export default Map;
