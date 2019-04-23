import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import newGoogleMap from '../utils/newGoogleMap';
import renderMarkers from '../utils/renderMarkers';

class Map extends Component {
  // Initial state
  state = {
    mapReady: false,

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
    this.map = newGoogleMap(ReactDOM.findDOMNode(this.refs.map), this.props.options);

    this.setState({
      mapReady: true,
    });

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
      mapReady,
      markers,
    } = this.state;

    return (
      <div className="map" ref="map">
        {mapReady && renderMarkers(markers, this.map)}
      </div>
    );
  }
}

export default Map;
