import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearGradient } from 'react-ui-core/src'

export default class Star extends Component {
  static propTypes = {
    uniqueId: PropTypes.string.isRequired,
    fillColor: PropTypes.string,
    backgroundFillColor: PropTypes.string,
    width: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    width: '0',
  }

  render() {
    const {
      uniqueId,
      fillColor,
      backgroundFillColor,
      width,
      className,
      ...props
    } = this.props

    return (
      <div className={className} {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <LinearGradient
            id={uniqueId}
            width={width}
            fillColor={fillColor}
            backgroundFillColor={backgroundFillColor}
          />
          <path
            fill={`url(#${uniqueId})`}
            stroke="transparent"
            fillRule="evenodd"
            d="M3.488 4.292L4.578.86l1.069 3.43h3.487l-2.823 2.06 1.19 3.431-2.934-2.059-2.795 2.06 1.051-3.437L0 4.292z"
          />
        </svg>
      </div>
    )
  }
}
