
import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const info = this.props;

    return (
      <React.Fragment>
        <div className="background">
          <div className="name">
            {info.name}
          </div>
          <div className="name">
            <u>What to order:</u>
          </div>
          <div className="whattoorder">
            {info.whattoorder.map(item => (
              <div>{item}</div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .div {
            font-family: Arial, Helvetica, sans-serif;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
