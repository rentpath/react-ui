import React from 'react'
import { Gmap, GmapSpinner } from 'react-ui-core/src'

const key = 'AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A'
const containerStyle = { position: 'fixed' }

export const DefaultGmap = (
  <Gmap
    containerStyle={containerStyle}
    apiKey={key}
  />
)

export const GmapWithSpinner = (
  <Gmap
    containerStyle={containerStyle}
    apiKey={key}
    spinner={<GmapSpinner color="#ff0000" loading />}
  />
)
