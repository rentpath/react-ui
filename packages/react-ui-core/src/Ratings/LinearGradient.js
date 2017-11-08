import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LinearGradient extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    backgroundFillColor: PropTypes.string,
    width: PropTypes.string.isRequired,
  }

  static defaultProps = {
    width: '0',
  }

  render() {
    const {
      id,
      fillColor,
      backgroundFillColor,
      width,
    } = this.props

    let backgroundStopOpacity = 1
    let effectiveBackgroundFillColor = backgroundFillColor

    if (!effectiveBackgroundFillColor) {
      effectiveBackgroundFillColor = fillColor
      backgroundStopOpacity = 0
    }

    return (
      <defs>
        <linearGradient id={id}>
          <stop offset="0%" stopOpacity="1" stopColor={fillColor} />
          <stop offset={width} stopOpacity="1" stopColor={fillColor} />
          <stop
            offset={width}
            stopOpacity={backgroundStopOpacity}
            stopColor={effectiveBackgroundFillColor}
          />
          <stop
            offset="100%"
            stopOpacity={backgroundStopOpacity}
            stopColor={effectiveBackgroundFillColor}
          />
        </linearGradient>
      </defs>
    )
  }
}
