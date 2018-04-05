import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Markers as Gmarkers } from '@rentpath/react-ui-core'
import { markerIcon, markerIconHover } from './markerIcons'

const NOOP = () => ({})

export default class Markers extends PureComponent {
  static propTypes = {
    marker: PropTypes.func,
  }

  static defaultProps = {
    marker: NOOP,
  }

  get marker() {
    const originalIcon = markerIcon()

    return feature => ({ // eslint-disable-line no-unused-vars
      icon: originalIcon,
      onMouseOver: (event, props, marker) => {
        marker.setIcon(markerIconHover())
      },
      onMouseOut: (event, props, marker) => {
        marker.setIcon(originalIcon)
      },
      ...this.props.marker(),
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
