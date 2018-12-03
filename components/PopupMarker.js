import React from 'react'
import {Marker, Popup} from 'react-map-gl';
import Burger from './Burger';
import BurgerInfo from './BurgerInfo'

export default class PopupMarker extends React.Component {
  render() {
    const info = this.props
    return (
      <React.Fragment>
        <Marker offsetLeft={-20} offsetTop={-20}
          longitude={info.longitude}
          latitude={info.latitude} >
          <Burger size={20} onClick={this.props.onOpen} reward={this.props.reward} />
        </Marker>
        {this.props.open && (
          <Popup
            className="popup"
            tipSize={5}
            anchor="top"
            longitude={info.longitude}
            latitude={info.latitude}
            onClose={this.props.onClose}
          >
            <BurgerInfo {...info} />
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
