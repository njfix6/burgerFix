import Head from 'next/head'
import Map from './Map'
import Image from './Image'
import NoSSR from 'react-no-ssr'

const coordinates = [-122.418578, 37.784388]
const burger = <Image url="/static/burger-fix-2.png" coordinates={coordinates}/>

export default () =>
  <div className="main">
    <Head>
      <title>Burger Fix</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/static/burger-fix-2.png"/>
    </Head>
    <NoSSR onSSR={<img className="loadingBurger" src="/static/burger-fix-2.png"/>}>
      <Map
        center={[-122.4394, 37.7638]}
        zoom={11.5}
        style="mapbox://styles/nfix/cj9bxyzut4r3g2spig03mos2h"
      >
      {burger}
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
      .loadingBurger {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120px;
        height: 120px;
        margin:-60px 0 0 -60px;
        -webkit-animation:spin 0.75s linear infinite;
        -moz-animation:spin 0.75s linear infinite;
        animation:spin 0.75s linear infinite;
        }
      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

      #map { position:absolute; top:0; bottom:0; width:100%; }
    `}</style>
  </div>
