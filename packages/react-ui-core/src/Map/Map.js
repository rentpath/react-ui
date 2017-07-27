import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class CustomMap extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZXdpbGxpYW1zb24iLCJhIjoibzRCYUlGSSJ9.QGvlt6Opm5futGhE5i-1kw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-74.50, 40],
      zoom: 9,
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
        style={{
          width: '700px',
          height: '700px',
          position: 'absolute',
          top: 0
        }}
        id="map"
        className={classNames(
          className,
          theme.Map,
          theme[`Map-${color}`],
          theme[`Map-${size}`],
        )}
      >
      </div>
    )
  }
}
