import React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl';
import WindowSize from "@reach/window-size";

class Map extends React.Component {
  state = {
    viewport: {
      latitude: 37.7638,
      longitude: -122.4394,
      zoom: 11.5
    }
  };

  render() {
    return (
      <WindowSize>
        {(size) => (
          <ReactMapGL
            {...this.state.viewport}
            {...size}
            mapboxApiAccessToken="pk.eyJ1IjoibmZpeCIsImEiOiJjaXJmY2E3cXUwMDkyZzNuZXBnZXB5bDVxIn0.rV60wwpgP9WBhaIrTSxOHw"
            mapStyle="mapbox://styles/nfix/cj9bxyzut4r3g2spig03mos2h"
            minZoom={12}
            maxZoom={14}
            onViewportChange={(viewport) => this.setState({viewport})}
          >
            {this.props.children}
          </ReactMapGL>
        )}
      </WindowSize>
    );
  }
}

export default Map
