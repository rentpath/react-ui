import React, { Component } from 'react'
import { MapTheme } from '../theme'
import { Mapbox, MapSource, MapLayer } from 'react-ui-map/src'

export default (
  <div>
    <Mapbox
      token="pk.eyJ1IjoibWlrZXdpbGxpYW1zb24iLCJhIjoibzRCYUlGSSJ9.QGvlt6Opm5futGhE5i-1kw"
      center={[-84.359, 33.679]}
      style="mapbox://styles/mapbox/streets-v9"
      zoom={9}
      theme={MapTheme}
      container="map"
    >
      <MapSource
        id="sourceID"
        url="mapbox://aliceatd2d.1skjaazb"
        layer="railwayLines-2es0gk"
      >
        <MapLayer
          id="line-layer"
          type="line"
          paint={{
          "line-color": "teal"
          }}
          layerOpacity={0.5}
          layerVisibility={true}
        />
        <MapLayer
          id="fill-layer"
          type="fill"
          paint={{
          "fill-color": "purple"
          }}
          layerOpacity={0.5}
          layerVisibility={true}
        />
      </MapSource>
    </Mapbox>
  </div>
)
