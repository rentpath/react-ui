import React, { Component } from 'react'
import { MapTheme } from '../theme'
import { Mapbox } from 'react-ui-map/src'

const mapSourceData = [
  {
    "id": "museums",
    source: {
      "type": 'vector',
      "url": 'mapbox://mapbox.2opop9hr'
    }
  },
  {
    "id": "contours",
    source: {
      "type": 'vector',
      "url": 'mapbox://mapbox.mapbox-terrain-v2'
    }
  }
]

const mapLayerData = [
  {
    layer: {
      'id': 'museums',
      'type': 'circle',
      'source': 'museums',
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'circle-radius': 8,
        'circle-color': 'rgba(55,148,179,1)'
      },
      'source-layer': 'museum-cusco'
    }
  },
  {
    layer: {
      'id': 'contours',
      'type': 'line',
      'source': 'contours',
      'source-layer': 'contour',
      'layout': {
        'visibility': 'visible',
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#877b59',
        'line-width': 1
      }
    }
  }
]

const token = "pk.eyJ1IjoibWlrZXdpbGxpYW1zb24iLCJhIjoibzRCYUlGSSJ9.QGvlt6Opm5futGhE5i-1kw"
const center = [-84.359, 33.679]
const style = "mapbox://styles/mapbox/streets-v9"
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
