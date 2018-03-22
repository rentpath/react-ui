import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

const DEFAULT_ZOOM = 8
const DEFAULT_CENTER = { // Atlanta, GA
  lat: 33.7490,
  lng: -84.3880,
}

export class BaseGoogleMap extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const {
      children,
    } = this.props

    return (
      <GoogleMap
        defaultZoom={DEFAULT_ZOOM}
        defaultCenter={DEFAULT_CENTER}
      >
        {children}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(BaseGoogleMap))
