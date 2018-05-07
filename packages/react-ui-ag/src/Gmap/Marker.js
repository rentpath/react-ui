import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Marker as Gmarker } from '@rentpath/react-ui-core'
import { markerRedDotIcon } from './markerIcons'

const NOOP = () => ({})

export default class Marker extends PureComponent {
  static propTypes = {
    marker: PropTypes.func,
  }

  static defaultProps = {
    marker: NOOP,
  }

  get marker() {
    return props => ({
      icon: markerRedDotIcon(),
      ...this.props.marker(props),
    })
  }

  render() {
    const { marker, ...rest } = this.props
    return (
      <Gmarker {...rest} marker={this.marker} />
    )
  }
}
