import React from 'react'

const getId = () => Math.random().toString(36).slice(2)

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.id = getId()
    this.state = {}
  }

  componentDidMount () {
    const mapboxgl = require('mapbox-gl')
    mapboxgl.accessToken = 'pk.eyJ1IjoibmZpeCIsImEiOiJjaXJmY2E3cXUwMDkyZzNuZXBnZXB5bDVxIn0.rV60wwpgP9WBhaIrTSxOHw'
    this.map = new mapboxgl.Map({
      container: this.id,
      style: 'mapbox://styles/mapbox/streets-v9',
      minZoom: 9,
      maxZoom: 18,
      zoom: 11,
      ...this.props,
    })

    this.map.on('load', () => {
      this.setState({
        children: this.props.children
      })
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render () {
    return (
      <div className="map">
        <section style={{ width: '100%', height: '100%', margin:0, padding:0 }} id={this.id}>
          {
            React.Children.map(this.state.children,
              child => React.cloneElement(child, { map: this.map })
            )
          }
        </section>
      <style jsx>{`
        .map {
          position: absolute;
          left:0;
          top:0;
          bottom:0;
          width:100%;
          height:100%
        }
      `}</style>
      </div>
    )
  }
}

export default Map
