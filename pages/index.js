import Head from 'next/head'
import {Marker, Popup} from 'react-map-gl';
import NoSSR from 'react-no-ssr'
import Map from '../components/Map'

export default () =>
  <div className="main">
    <Head>
      <title>Burger Fix</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/static/burger-fix-2.png"/>
      <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
      <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
    </Head>
    <img className="main-title" src="/static/burger-fix-1.png"/>
    <NoSSR onSSR={<img className="loadingBurger" src="/static/burger-fix-2.png"/>}>
      <Map>
        <Marker latitude={37.784388} longitude={-122.418578} offsetLeft={-20} offsetTop={-20}>
          <div><img className="burger" src="/static/burger-fix-5.png"/></div>
        </Marker>
        <Marker latitude={37.784388} longitude={-122.428578} offsetLeft={-20} offsetTop={-20}>
          <div><img className="burger" src="/static/burger-fix-5.png"/></div>
        </Marker>
      </Map>
    </NoSSR>
    <style jsx>{`
      .burger {
        width: 35px;
        height: auto;
      }
      .main-title {
        position: absolute;
        left: 0px;
        top 0px;
        z-index:10;
        width: 100px;
        height: auto;

      }
    `}</style>
    <style global jsx>{`

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

      .mapboxgl-popup {
        z-index:50;
      }
      
    `}</style>
  </div>
