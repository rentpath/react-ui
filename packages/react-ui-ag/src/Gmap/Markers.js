import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Markers as Gmarkers } from '@rentpath/react-ui-core'
import {
  markerRedDotIcon,
  markerBlackDotIcon,
} from './markerIcons'

const NOOP = () => ({})

export default class Markers extends PureComponent {
  static propTypes = {
    marker: PropTypes.func,
    markerIcon: PropTypes.func,
    markerIconHover: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
  }

  static defaultProps = {
    marker: NOOP,
    markerIcon: markerRedDotIcon,
    markerIconHover: markerBlackDotIcon,
  }

  get marker() {
    const {
      markerIcon,
      markerIconHover,
      onMouseOver,
      onMouseOut,
    } = this.props

    return feature => ({ // eslint-disable-line no-unused-vars
      icon: markerIcon(),
      onMouseOver: (event, props, marker) => {
        if (markerIconHover) marker.setIcon(markerIconHover())
        if (onMouseOver) onMouseOver(marker)
      },
      onMouseOut: (event, props, marker) => {
        marker.setIcon(markerIcon())
        if (onMouseOut) onMouseOut(marker)
      },
      ...this.props.marker(feature),
    })
  }

  render() {
    const { marker, ...rest } = this.props

    return (
      <Gmarkers
        marker={this.marker}
        {...rest}
      />
    )
  }
}
