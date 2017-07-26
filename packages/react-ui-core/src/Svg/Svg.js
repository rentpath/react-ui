import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Svg extends Component {

  static propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    pathD: PropTypes.string.isRequired,
    viewBox: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    width: PropTypes.number,
    className: PropTypes.string,
  }

  render() {
    const { pathD } = this.props
    return (
      <svg {...this.props} >
        <path d={pathD} />
      </svg>
    )
  }
}
