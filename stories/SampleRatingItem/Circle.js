import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { randomId } from 'react-ui-utils/src'
import { LinearGradient } from 'react-ui-core/src'

export default class Circle extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    theme: PropTypes.object,
    color: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
    width: PropTypes.string,
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
    } = this.props

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 600 300"
      >
        <LinearGradient
          id={id}
          width={width}
          color={color}
        />
        <circle
          cx="250"
          cy="150"
          r="145"
          fill={`url(#${id})`}
          stroke="crimson"
          strokeWidth="5"
        />
      </svg>
    )
  }
}
