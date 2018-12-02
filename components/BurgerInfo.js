
import React, {PureComponent} from 'react';

export default class BurgerInfo extends PureComponent {

  render() {
    const info = this.props;

    return (
      <React.Fragment>
        <div className="background">
          <div className="header">
            {info.name} <div className="grade"> {info.grade}</div>
          </div>
          <div className="name">
            <div className="whattoordertitle">What to order:</div>
          </div>
          <div className="whattoorder">
            <img className="icon-image burger-image" src="/static/burger-fix-5.png"/> <div className="order-info burger-info">{info.whattoorder.burger}</div><br/>
            <img className="icon-image fries-image" src="/static/fries.png"/> <div className="order-info fries-info">{info.whattoorder.fries}</div>
          </div>
        </div>
        <style jsx>{`
          .header {
            font-weight: bold;
            font-size: 25px;
            line-height: 50px;
            display: inline-block;
          }
          .grade {
            display: inline-block;
            color: red;
          }
          .whattoordertitle {
            font-weight: bold;
          }
          div{
            font-family: Arial, Helvetica, sans-serif;
          }
          .icon-image{
            height:13px;
            display: inline-block;
          }
          .order-info{
            display: inline-block;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
