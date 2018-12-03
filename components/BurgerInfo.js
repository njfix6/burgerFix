
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
          {
            info.reward && (
              <div className="reward-section">
                <img className="icon-image reward-image" src="/static/ribbon.png"/>
                <div className="order-info reward-info">{info.reward}</div>
              </div>
          )}
          <div className="name">
            <div className="whattoordertitle">What to order:</div>
          </div>
          <div className="whattoorder">
            <table>
              <tbody>
                {
                  info.whattoorder.burger && (
                <tr>
                  <td><img className="icon-image burger-image" src="/static/burger-fix-5.png"/></td>
                  <td><div className="order-info burger-info">{info.whattoorder.burger}</div></td>
                </tr>
                )}
                {
                  info.whattoorder.fries && (
                  <tr>
                    <td><img className="icon-image fries-image" src="/static/fries.png"/></td>
                    <td><div className="order-info fries-info">{info.whattoorder.fries}</div></td>
                  </tr>
                )}
                {
                  info.whattoorder.sauces && (
                  <tr>
                    <td><img className="icon-image sauces-image" src="/static/sauces.png"/></td>
                    <td><div className="order-info fries-info">{info.whattoorder.sauces}</div></td>
                  </tr>
                )}
              </tbody>
            </table>
            {
              info.comeswith && (
                <React.Fragment>
                  <div className="name">
                    <div className="whattoordertitle">Comes with:</div>
                  </div>
                  <table>
                    <tbody>
                    {
                      info.comeswith.sauces && (
                      <tr>
                        <td><img className="icon-image sauces-image" src="/static/sauces.png"/></td>
                        <td><div className="order-info fries-info">{info.comeswith.sauces}</div></td>
                      </tr>
                    )}
                    </tbody>
                  </table>
                </React.Fragment>
            )}

          </div>
        </div>
        <style jsx>{`
          div{
            font-family: Arial, Helvetica, sans-serif;
          }
          .header {
            font-weight: bold;
            font-size: 25px;
            line-height: 70px;
            margin-top:5px;
          }
          .grade {
            display: inline-block;
            color: red;
            font-size: 15px;
            vertical-align:middle;
            margin-left: 5px;
          }
          .whattoordertitle {
            font-weight: bold;
            line-height: 30px;
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
          .reward-section{

            line-height: 40px;
          }
          .reward-info{
            margin-left: 6px;
            vertical-align:top;
          }
          .reward-image{
            vertical-align:bottom;
            margin-bottom: 10px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
