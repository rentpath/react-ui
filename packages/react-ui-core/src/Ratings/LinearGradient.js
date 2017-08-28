import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LinearGradient extends Component {
  static propTypes = {
    id: PropTypes.string,
    fillWidth: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    width: '0',
  }

  render() {
    const {
      id,
      color,
      width,
    } = this.props

    return (
      <defs>
        <linearGradient id={id}>
          <stop offset="0%" stopOpacity="1" stopColor={color}/>
          <stop offset={width} stopOpacity="1" stopColor={color} />
          <stop offset={width} stopOpacity="0" stopColor={color} />
          <stop offset="100%" stopOpacity="0" stopColor={color} />
        </linearGradient>
      </defs>
    )
  }
}
