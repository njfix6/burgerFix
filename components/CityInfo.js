
import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const info = this.props;

    return (
      <div>
        <div>
          {info.name}
        </div>
        <img width={240} src={info.image} />
      </div>
    );
  }
}
