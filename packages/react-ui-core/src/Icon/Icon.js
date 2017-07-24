import React, { Component } from 'react'
import RPT from 'prop-types'

export default class Icon extends Component {

  static propTypes = {
    color: RPT.string,
    height: RPT.number,
    pathD: RPT.string.isRequired,
    viewBox: RPT.string,
    onClick: RPT.func,
    size: RPT.number,
    style: RPT.oneOfType([
      RPT.array,
      RPT.object,
    ]),
    width: RPT.number,
    wrapperStyle: RPT.oneOfType([
      RPT.array,
      RPT.object,
    ]),
  };

  static defaultProps = {
    color: '#000',
    size: 30,
  }

  render() {
    const { wrapperStyle } = this.props
    if (wrapperStyle) { return <div style={wrapperStyle}>{this.getIcon()}</div> }

    return this.getIcon()
  }
  getIcon() {
    const { color, height, onClick, size, style, width, pathD, viewBox } = this.props
    return (<svg fill={color} height={height || size} width={width || size} onClick={onClick}
                 style={style} viewBox={viewBox}><path d={pathD}/></svg>)
  }
}

