import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';

export default class Burger extends React.Component {

  render() {
    const {size = 20, onClick} = this.props;

    return (
      <div>
      <img onClick={onClick} className="burger" src="/static/burger-fix-5.png"/>


      <style jsx>{`
        .burger {
          width: 35px;
          height: auto;
        }
        .main-title {
          position: absolute;
          left: 0px;
          top 0px;
          z-index:10;
          width: 100px;
          height: auto;

        }
      `}</style>
      </div>
    );
  }
}
