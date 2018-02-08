import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearGradient from './LinearGradient'

export default class Star extends Component {
  static propTypes = {
    uniqueId: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    backgroundFillColor: PropTypes.string,
    width: PropTypes.string,
    strokeWidth: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    width: '0',
    strokeWidth: '3',
  }

  render() {
    const {
      uniqueId,
      fillColor,
      backgroundFillColor,
      width,
      strokeWidth,
      className,
      ...props
    } = this.props

    return (
      <div className={className} {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 51 48"
        >
          <LinearGradient
            id={uniqueId}
            width={width}
            fillColor={fillColor}
            backgroundFillColor={backgroundFillColor}
          />
          <path
            fill={`url(#${uniqueId})`}
            stroke="#000"
            strokeWidth={strokeWidth}
            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          />
        </svg>
      </div>
    )
  }
}
