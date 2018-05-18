import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Marker from './Marker'
import Gmap from './Gmap'
import { blackDotIconWithBalloon } from './markerIcons'

export default class PdpMap extends PureComponent {
  static propTypes = {
    listing: PropTypes.object.isRequired,
  }

  get position() {
    const { location = {} } = this.props.listing
    return {
      lat: location.latitude,
      lng: location.longitude,
    }
  }

  get marker() {
    const {
      listing,
      ...rest
    } = this.props

    return () => ({
      icon: blackDotIconWithBalloon(),
      ...rest,
      position: this.position,
    })
  }

  render() {
    const {
      listing,
      ...rest
    } = this.props

    return (
      <Gmap
        center={this.position}
        zoom={13}
        {...rest}
      >
        <Marker marker={this.marker} />
      </Gmap>
    )
  }
}
