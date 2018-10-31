import React from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import CityInfo from './city-info';
import CITIES from '../data.json';
import Burger from './Burger';

export default class PopupMarker extends React.Component {
  state = {
    popupInfo: null
  }
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
      <div>
        { CITIES.map(this._renderCityMarker) }
        {this._renderPopup()}
      </div>
    );
  }
}
