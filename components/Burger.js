import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';

export default class Burger extends React.Component {

  render() {
    const {size = 20, onClick, reward} = this.props;

    return (
      <div className="content">
      <img onClick={onClick} className="burger" src="/static/burger-fix-5.png"/>
      {
        reward && (
          <img className="icon-image reward-image" src="/static/ribbon.png"/>
      )}

      <style jsx>{`
        .burger {
          width: 35px;
          height: auto;
          position:absolute;
          z-index: 1;
        }
        .content {
          position:relative;
        }
        .icon-image{
          height:30px;
          display: inline-block;
          position:absolute;
          left:25px;
          top:20px;
          z-index: 3;
        }
      `}</style>
      </div>
    );
  }
}
