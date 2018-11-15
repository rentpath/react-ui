import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import keys from 'lodash/keys'
import { Markers as Gmarkers } from '@rentpath/react-ui-core'
import MarkerIcons from './markerIcons'

const NOOP = () => ({})

export default class Markers extends PureComponent {
  static propTypes = {
    marker: PropTypes.func,
    markerIcon: PropTypes.oneOf(keys(MarkerIcons)),
    markerInactiveIcon: PropTypes.oneOf(keys(MarkerIcons)),
    markerIconHover: PropTypes.oneOf(keys(MarkerIcons)),
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
  }

  static defaultProps = {
    marker: NOOP,
    markerIcon: 'redDotIcon',
    markerInactiveIcon: 'greyDotIcon',
    markerIconHover: 'blackDotIcon',
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
      const source = get(feature, 'properties.source', '')
      const zIndex = typeof source === 'string' && source.toLowerCase() === 'aptguide' ? 2 : 1
      const icon = !isBasic ? markerIcon : markerInactiveIcon

      return {
        icon: MarkerIcons[icon](scale),
        onMouseOver: (event, props, marker) => {
          if (markerIconHover) marker.setIcon(MarkerIcons[markerIconHover](scale))
          if (onMouseOver) onMouseOver(marker)
        },
        onMouseOut: (event, props, marker) => {
          marker.setIcon(MarkerIcons[icon](scale))
          if (onMouseOut) onMouseOut(marker)
        },
        ...this.props.marker(feature),
        zIndex,
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
