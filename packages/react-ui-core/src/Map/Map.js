import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class Mapbox extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
    token: PropTypes.string,
    center: PropTypes.array,
    style: PropTypes.string,
    zoom: PropTypes.number,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  componentDidMount() {
    mapboxgl.accessToken = this.props.token
    const map = new mapboxgl.Map({
      container: 'map',
      style: this.props.style,
      center: this.props.center,
      zoom: this.props.zoom,
      theme: this.props.theme
    })
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      ...props
    } = this.props

    return (
      <div
        {...props}
        style={{}}
        id="map"
        className={classNames(
          className,
          theme.Map,
          theme[`Map-${color}`],
          theme[`Map-${size}`],
          theme.map
        )}
      >
      </div>
    )
  }
}
