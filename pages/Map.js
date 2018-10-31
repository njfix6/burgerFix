import React from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import WindowSize from "@reach/window-size";
import CITIES from '../data.json';
import Burger from './Burger';
import CityInfo from './city-info';
import PopupMarker from './Marker';

class Map extends React.Component {
  state = {
    viewport: {
      latitude: 37.7638,
      longitude: -122.4394,
      zoom: 11.5
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }
  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  render() {
    return (
      <WindowSize>
        {(size) => (
          <ReactMapGL
            {...this.state.viewport}
            {...size}
            mapboxApiAccessToken="pk.eyJ1IjoibmZpeCIsImEiOiJjaXJmY2E3cXUwMDkyZzNuZXBnZXB5bDVxIn0.rV60wwpgP9WBhaIrTSxOHw"
            mapStyle="mapbox://styles/nfix/cj9bxyzut4r3g2spig03mos2h"
            minZoom={12}
            maxZoom={14}
            onViewportChange={(viewport) => this.setState({viewport})}
          >
            <div>
              {CITIES.map(loc => <PopupMarker key={loc.city} {...loc} />)}
            </div>
          </ReactMapGL>
        )}
      </WindowSize>
    );
  }
}

export default Map
