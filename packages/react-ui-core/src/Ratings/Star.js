import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearGradient from './LinearGradient'

export default class Star extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    width: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    width: '0',
  }

  render() {
    const {
      id,
      color,
      width,
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
          className={className}
        >
          <LinearGradient
            id={id}
            width={width}
            color={color}
          />
          <path
            fill={`url(#${id})`}
            stroke="#000"
            strokeWidth="3"
            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          />
        </svg>
      </div>
    )
  }
}
