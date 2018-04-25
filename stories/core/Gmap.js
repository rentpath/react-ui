import React from 'react'
import { action } from '@storybook/addon-actions'
import { Gmap, GmapSpinner, Marker, Markers } from 'react-ui-core/src'
import InfoWindow from './InfoWindow'
import OverlayView from './OverlayView'
import geojson from '../dummyData/geojson.json'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'

export const DefaultGmap = (
  <Gmap
    apiKey={key}
    onBoundsChanged={(action('bounds changed'))}
  />
)

export const GmapWithSpinner = (
  <Gmap
    apiKey={key}
    spinner={<GmapSpinner color="#ff0000" loading closeDelay={1000} />}
  />
)

export const GmapWithSingleMarker = (
  <Gmap apiKey={key}>
    <Marker
      position={{
        lat: 33.7490,
        lng: -84.3880,
      }}
    />
  </Gmap>
)

export const GmapWithMultipleMarkers = (
  <Gmap apiKey={key}>
    <Markers geojson={geojson} />
  </Gmap>
)

export const GmapWithInfoWindow = (
  <InfoWindow apiKey={key} />
)

export const GmapWithOverlayView = (
  <OverlayView apiKey={key} />
)
