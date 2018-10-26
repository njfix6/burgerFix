import React from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import WindowSize from "@reach/window-size";
import CITIES from '../data.json';
import Burger from './Burger';
import CityInfo from './city-info';


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



  _renderPopup() {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({popupInfo: null})} >
        <CityInfo info={popupInfo} />
      </Popup>
    );
  }
  _renderCityMarker = (city, index) => {
    return (
      <Marker offsetLeft={-20} offsetTop={-20} key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude} >
        <Burger size={20} onClick={() => this.setState({popupInfo: city})} />
      </Marker>
    );
  }
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
            { CITIES.map(this._renderCityMarker) }
            {this._renderPopup()}
            {this.props.children}
          </ReactMapGL>
        )}
      </WindowSize>
    );
  }
}

export default Map
