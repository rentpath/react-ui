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
      const isBasic = get(feature, 'properties.isBasic', false)
      const scale = get(feature, 'properties.iconScale', 1)
      const icon = !isBasic ? markerIcon : markerInactiveIcon

      return {
        icon: icon(scale),
        onMouseOver: (event, props, marker) => {
          if (markerIconHover) marker.setIcon(markerIconHover(scale))
          if (onMouseOver) onMouseOver(marker)
        },
        onMouseOut: (event, props, marker) => {
          marker.setIcon(icon(scale))
          if (onMouseOut) onMouseOut(marker)
        },
        ...this.props.marker(feature),
        zIndex: !isBasic ? 2 : 1,
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
