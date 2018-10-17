import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.id = Math.random().toString(36).slice(2)
  }
  render(map) {
    if (this.props.map) {
      this.props.map.loadImage(this.props.url, (error, img) => {
        this.props.map.addImage(this.id, img)
        this.props.map.addLayer({
          id: this.id,
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [{
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: this.props.coordinates
                }
              }]
            }
          },
          layout: {
            'icon-image': this.id,
            'icon-size': 0.25
          }
        })
      })
    }
    return null
  }
}

export default Image
