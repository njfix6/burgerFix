import React from 'react'
import {Marker, Popup} from 'react-map-gl';
import Burger from './Burger';
import CityInfo from './CityInfo'

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
            <CityInfo {...info} />
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
