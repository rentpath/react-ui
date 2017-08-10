import React, { Component } from 'react'
import { MapTheme } from '../theme'
import { Mapbox, LayerInteractions, Source, Layer } from 'react-ui-map/src'

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
            "coordinates": [-84.424, 33.979]
          },
          "properties": {
            "title": "Point 1",
            "marker-symbol": "secondary_marker"
          }
        }, {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-84.534, 33.676]
          },
          "properties": {
            "title": "Point 2",
            "marker-color": "#ff00ff",
            "marker-symbol": "secondary_marker"
          }
        }, {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-84.234, 33.776]
          },
          "properties": {
            "title": "Point 3",
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
      "id": "markers-default",
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
  },
  {
    layer: {
      "id": "markers-active",
      "source": "markers",
      "type": "symbol",
      "layout": {
        "icon-image": "default_marker",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      },
      "filter": ["==", "title", ""]
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

const defaultMarkerId = "markers-default"
const activeMarkerId = "markers-active"
const boundingBox = [[32.958984, -5.353521], [43.50585, 5.615985]]

export default (
  <div>
    <Mapbox
      token={token}
      center={center}
      style={style}
      zoom={zoom}
      theme={MapTheme}
      container={container}
      boundingBox={boundingBox}
    >
      <LayerInteractions
        defaultMarkerId={defaultMarkerId}
        activeMarkerId={activeMarkerId}
      />
      <Source sources={mapSourceData} />
      <Layer layers={mapLayerData} />
    </Mapbox>

    />
  </div>
)
