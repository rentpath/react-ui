import './Map.css'
import React, { Component } from 'react'
import { CustomMap } from 'react-ui-core/src'

export default (
  <div>
    <p>Storybook</p>
    <CustomMap
      token="pk.eyJ1IjoibWlrZXdpbGxpYW1zb24iLCJhIjoibzRCYUlGSSJ9.QGvlt6Opm5futGhE5i-1kw"
      center={ [-84.709, 33.679] }
    />
  </div>
)
