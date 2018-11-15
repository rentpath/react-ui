import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Marker from './Marker'
import Gmap from './Gmap'
import MarkerIcons from './markerIcons'

export default class PdpMap extends PureComponent {
  static propTypes = {
    listing: PropTypes.object.isRequired,
    mapMarkerStyle: PropTypes.string,
  }

  static defaultProps = {
    mapMarkerStyle: 'blackDotIconWithBalloon',
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
      mapMarkerStyle,
      ...rest
    } = this.props

    return () => ({
      icon: MarkerIcons[mapMarkerStyle](),
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
