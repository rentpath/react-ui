import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearGradient } from 'react-ui-core/src'

export default class Square extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
    width: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
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
          viewBox="0 0 1000 1000"
          width="50"
          height="50"
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
            d="M10,990h980V10H10V990z M71.3,71.3h857.5v857.5H71.3V71.3z"
          />
        </svg>
      </div>
    )
  }
}
