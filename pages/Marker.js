import React from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import CityInfo from './city-info';
import CITIES from '../data.json';
import Burger from './Burger';

export default class PopupMarker extends React.Component {
  state = {
    open: false
  }

  render() {
    const info = this.props
    return (
      <React.Fragment>
        <Marker offsetLeft={-20} offsetTop={-20}
          longitude={info.longitude}
          latitude={info.latitude} >
          <Burger size={20} onClick={() => this.setState({open: true})} />
        </Marker>
        {this.state.open && (
          <Popup className="popup" tipSize={5}
            anchor="top"
            longitude={info.longitude}
            latitude={info.latitude}
            onClose={() => this.setState({open: false})} >
            <CityInfo info={info} />
          </Popup>
        )}
        <style jsx>{`
          .popup {
            z-index:50;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
