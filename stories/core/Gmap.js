import React from 'react'
import { action } from '@storybook/addon-actions'
import { Gmap, GmapSpinner } from 'react-ui-core/src'
import Marker from './Marker'

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

export const GmapWithMarker = (
  <Gmap apiKey={key}>
    <Marker
      position={{
        lat: 33.7490,
        lng: -84.3880,
      }}
    />
  </Gmap>
)
