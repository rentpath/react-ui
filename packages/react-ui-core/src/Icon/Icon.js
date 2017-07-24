import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Icon extends Component {

  static propTypes = {
    color: PropTypes.string,
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
    wrapperStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  };

  static defaultProps = {
    color: '#000',
    size: 30,
  }
  getIcon() {
    const { color, height, onClick, size, style, width, pathD, viewBox } = this.props
    return (
        <svg
            fill={color}
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox={viewBox}>
            <path
                d={pathD}
            />
        </svg>
    )
  }
  render() {
    const { wrapperStyle } = this.props
    if (wrapperStyle) {
      return <div style={wrapperStyle}>{this.getIcon()}</div>
    }
    return this.getIcon()
  }
}
