import React from 'react'
import { Gmap, PdpMap as Pdp, Markers } from 'react-ui-ag/src'
import geojson from '../../dummyData/geojson.json'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

export const DefaultGmap = () => (
  <Gmap apiKey={key} geojson={geojson} />
)

export const PdpMap = () => (
  <Pdp
    apiKey={key}
    listing={{
      location: { latitude: 33.7490, longitude: -84.3880 },
    }}
  />
)

export const MultipleMarkers = () => (
  <Gmap apiKey={key} zoom={13}>
    <Markers geojson={geojson} />
  </Gmap>
)
