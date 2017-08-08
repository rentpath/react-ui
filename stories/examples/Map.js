import React, { Component } from 'react'
import { MapTheme } from '../theme'
import { Mapbox } from 'react-ui-map/src'

const mapSourceData = [
  {
    "id": "markers",
    source: {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-84.424, 33.779]
          },
          "properties": {
            "title": "Point 1",
            "marker-symbol": "secondary_marker"
          }
        }, {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-84.434, 33.676]
          },
          "properties": {
            "title": "Point 2",
            "marker-color": "#ff00ff",
            "marker-symbol": "secondary_marker"
          }
        }]
      }
    }
  }
]

const mapLayerData = [
  {
    layer: {
      "id": "markers",
      "source": "markers",
      "type": "symbol",
      "layout": {
        "icon-image": "{marker-symbol}",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      }
    }
  }
]

// const token = "pk.eyJ1IjoibWlrZXdpbGxpYW1zb24iLCJhIjoibzRCYUlGSSJ9.QGvlt6Opm5futGhE5i-1kw"
const token = "pk.eyJ1Ijoic21pY2tpZSIsImEiOiJjaWtiM2JkdW0wMDJudnRseTY0NWdrbjFnIn0.WxGYL18BJjWUiNIu-r3MSA"
const center = [-84.359, 33.679]
// const style = "mapbox://styles/mapbox/streets-v9"
const style = "mapbox://styles/smickie/cikb3fhvi0063cekqns0pk1f1"
const zoom = 9
const container = "map"

export default (
  <div>
    <Mapbox
      token={token}
      center={center}
      style={style}
      zoom={zoom}
      theme={MapTheme}
      container={container}
      sources={mapSourceData}
      layers={mapLayerData}
    />
  </div>
)
