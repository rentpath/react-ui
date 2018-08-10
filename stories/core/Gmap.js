import React from 'react'
import { action } from '@storybook/addon-actions'
import { Gmap, GmapSpinner, Marker, Markers } from 'react-ui-core/src'
import InfoWindow from './InfoWindow'
import OverlayView from './OverlayView'
import geojson from '../dummyData/geojson.json'
import { FreeDrawExample } from './ExampleComponents'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'
const dataStyle = {
  polylineFill: {
    strokeColor: '#d32526',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#9b9b9b',
    fillOpacity: 0.30,
  },
  polyline: {
    strokeColor: '#d32526',
    strokeOpacity: 1,
    strokeWeight: 2,
  },
  polygon: {
    strokeColor: '#d32526',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#9b9b9b',
    fillOpacity: 0.30,
  },
}
const mapControls = {
  draggable: true,
  zoomControl: true,
  scrollwheel: true,
  disableDoubleClickZoom: true,
}

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

export const FreeDrawDefault = (
  <Gmap
    apiKey={key}
  >
    <FreeDrawExample
      key={key}
      onDrawBegin={action('Drawing shape')}
      dataStyle={dataStyle}
      mapControls={mapControls}
    />
  </Gmap>
)

export const WithExistingShape = (
  <Gmap
    apiKey={key}
  >
    <FreeDrawExample
      key={key}
      onDrawBegin={action('Drawing shape')}
      onDrawEnd={coords => action('On draw end')(coords)}
      shapes={{ 0: [[-84.40399, 33.89503], [-84.70, 33.83], [-84.77, 33.15]] }}
      dataStyle={dataStyle}
      mapControls={mapControls}
    />
  </Gmap>
)

export const WithMultipleShapes = (
  <Gmap
    apiKey={key}
  >
    <FreeDrawExample
      key={key}
      onDrawBegin={action('Drawing shape')}
      onDrawEnd={coords => action('On draw end')(coords)}
      dataStyle={dataStyle}
      mapControls={mapControls}
      allowMultipleShapes
    />
  </Gmap>
)
