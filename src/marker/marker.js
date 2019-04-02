import { Component } from 'react';

class Marker extends Component {
  createMarker() {
    const {
      map, google, position: { lat, lng }, title, id
    } = this.props;

    // Create a new position object
    const position = new google.maps.LatLng(lat, lng)

    // Create a new marker
    this.marker = new google.maps.Marker({
      map,
      position,
      title
    });

    // Add a listener
    this.marker.addListener('click', () => {
      alert(`Marker ${id}`);
    });
  }

  componentDidMount() {
    if (window.google) {
      this.createMarker();
    }
  }

  componentWillUnmount() {
    if (this.marker) {
      // Set map to null to remove it from the map
      this.marker.setMap(null);
    }
  }

  render() {
    return null;
  }
}

export default Marker;
