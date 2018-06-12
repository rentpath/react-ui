import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { Markers as Gmarkers } from '@rentpath/react-ui-core'
import {
  redDotIcon,
  greyDotIcon,
  blackDotIcon,
} from './markerIcons'

const NOOP = () => ({})

export default class Markers extends PureComponent {
  static propTypes = {
    marker: PropTypes.func,
    markerIcon: PropTypes.func,
    markerInactiveIcon: PropTypes.func,
    markerIconHover: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
  }

  static defaultProps = {
    marker: NOOP,
    markerIcon: redDotIcon,
    markerInactiveIcon: greyDotIcon,
    markerIconHover: blackDotIcon,
  }

  get marker() {
    const {
      markerIconHover,
      onMouseOver,
      onMouseOut,
      markerIcon,
      markerInactiveIcon,
    } = this.props

    return feature => {
      const isActive = get(feature, 'properties.isActive', true)
      const icon = isActive ? markerIcon : markerInactiveIcon

      return {
        icon: icon(),
        onMouseOver: (event, props, marker) => {
          if (markerIconHover) marker.setIcon(markerIconHover())
          if (onMouseOver) onMouseOver(marker)
        },
        onMouseOut: (event, props, marker) => {
          marker.setIcon(icon())
          if (onMouseOut) onMouseOut(marker)
        },
        ...this.props.marker(feature),
        zIndex: isActive ? 2 : 1,
      }
    }
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
