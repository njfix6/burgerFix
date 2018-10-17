import Head from 'next/head'
import Map from './Map'
import Img from './Image'
import NoSSR from 'react-no-ssr'

export default () =>
  <div className="main">
    <Head>
      <title>Burger Fix</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/static/burger-fix-2.png"/>
    </Head>
    <NoSSR onSSR={<div>Loading</div>}>
      <Map
        center={[-122.4394, 37.7638]}
        zoom={11.5}
        style="mapbox://styles/nfix/cj9bxyzut4r3g2spig03mos2h"
      >
      </Map>
    </NoSSR>
    <style jsx>{`
      .main {
        height: 100%;
        width: 100%;
      }
      body {
        height: 100%;
        width: 100%;
        margin: 0px;
      }

      #map { position:absolute; top:0; bottom:0; width:100%; }
    `}</style>
  </div>
