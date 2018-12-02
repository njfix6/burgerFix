
import React, {PureComponent} from 'react';

export default class BurgerInfo extends PureComponent {

  render() {
    const info = this.props;

    return (
      <React.Fragment>
        <div className="background">
          <div className="header">
            {info.name}<div className="grade"> {info.grade}</div>
          </div>
          <div className="name">
            <div className="whattoordertitle">What to order:</div>
          </div>
          <div className="whattoorder">
            <table>
              <tr>
                <td><img className="icon-image burger-image" src="/static/burger-fix-5.png"/></td>
                <td><div className="order-info burger-info">{info.whattoorder.burger}</div></td>
              </tr>
              <tr>
                <td><img className="icon-image fries-image" src="/static/fries.png"/></td>
                <td><div className="order-info fries-info">{info.whattoorder.fries}</div></td>
              </tr>
              <tr>
                <td><img className="icon-image sauces-image" src="/static/sauces.png"/></td>
                <td><div className="order-info fries-info">{info.whattoorder.sauces}</div></td>
              </tr>
            </table>
          </div>
        </div>
        <style jsx>{`
          .header {
            font-weight: bold;
            font-size: 25px;
            line-height: 50px;
            display: inline-block;
            vertical-align:middle;
          }
          .grade {
            display: inline-block;
            color: red;
            font-size: 15px;
            line-height: 50px;
            vertical-align:middle;
            margin-left: 5px;
          }
          .whattoordertitle {
            font-weight: bold;
          }
          div{
            font-family: Arial, Helvetica, sans-serif;
          }
          .icon-image{
            height:20px;
            display: inline-block;
          }
          .sauces-image {
            height:15px;
          }
          .fries-image {
            margin-left: 2px;
          }
          .order-info{
            display: inline-block;
            font-size: 20px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
