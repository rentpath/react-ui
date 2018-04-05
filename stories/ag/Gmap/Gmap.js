import React from 'react'
import { Gmap, Marker, Markers } from 'react-ui-ag/src'
import geojson from '../../dummyData/geojson.json'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

export const DefaultGmap = () => (
  <Gmap apiKey={key} geojson={geojson} />
)

export const OneMarker = () => (
  <Gmap apiKey={key}>
    <Marker
      position={{
        lat: 33.7490,
        lng: -84.3880,
      }}
    />
  </Gmap>
)

export const MultipleMarkers = () => (
  <Gmap apiKey={key}>
    <Markers geojson={geojson} />
  </Gmap>
)
