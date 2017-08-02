import React, { Component } from 'react'
import { MapTheme } from '../theme'
import { Mapbox } from 'react-ui-map/src'

export default (
  <Mapbox
    token="pk.eyJ1IjoibWlrZXdpbGxpYW1zb24iLCJhIjoibzRCYUlGSSJ9.QGvlt6Opm5futGhE5i-1kw"
    center={[-84.359, 33.679]}
    style="mapbox://styles/mapbox/streets-v9"
    zoom={9}
    theme={MapTheme}
    container="map"
  />
)
