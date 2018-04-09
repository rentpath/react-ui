import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Gmap as GoogleMap, GmapSpinner } from '@rentpath/react-ui-core'

export default class Gmap extends PureComponent {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
  }

  render() {
    const {
      apiKey,
      ...rest
    } = this.props

    return (
      <GoogleMap
        apiKey={apiKey}
        spinner={<GmapSpinner color="#ff0000" loading closeDelay={1000} />}
        {...rest}
      />
    )
  }
}
