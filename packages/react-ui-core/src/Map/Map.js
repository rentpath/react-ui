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
  }

  static defaultProps = {
    theme: {},
  }

  componentDidMount() {
    mapboxgl.accessToken = this.props.token
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
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
