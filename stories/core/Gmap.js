import React from 'react'
import { Gmap, GmapSpinner } from 'react-ui-core/src'

export const DefaultGmap = (
  <Gmap
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A&v=3.exp&libraries=geometry,drawing,places"
  />
)

export const GmapWithSpinner = (
  <Gmap
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfjkBwG1XzdrC-ceFZqozEGBSQidllL8A&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<GmapSpinner loading color="#D73636" />}
  />
)
