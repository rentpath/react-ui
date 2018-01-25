import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'

@themed(/^Mapbox/, {
  pure: true,
})

export default class Mapbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
    token: PropTypes.string,
    center: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    flyToCenter: PropTypes.bool,
    style: PropTypes.string,
    zoom: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.array,
    ]),
    dragRotate: PropTypes.bool,
    touchRotate: PropTypes.bool,
  }

  static childContextTypes = {
    map: PropTypes.object,
    MapboxGL: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    children: [],
    flyToCenter: false,
    dragRotate: true,
    touchRotate: true,
  }

  constructor(props, context) {
    super(props, context)
    this.map = null
    this.state = { loaded: false }
  }

  getChildContext() {
    return {
      map: this.map,
      MapboxGL: this.MapboxGL,
    }
  }

  componentDidMount() {
    this.init()
  }

  componentWillReceiveProps(nextProps) {
    const { map } = this
    const { center } = this.props

    if (map && nextProps.center && this.isCenterChange(center, nextProps.center)) {
      if (nextProps.flyToCenter) {
        map.flyTo(nextProps.center)
      } else {
        map.setCenter(nextProps.center)
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.children !== this.props.children || this.state.loaded !== nextState.loaded
  }

  componentWillUnmount() {
    this.map.remove()
  }

  setupMapbox() {
    this.MapboxGL.accessToken = this.props.token
    const { center, style, zoom, theme, dragRotate } = this.props

    return new this.MapboxGL.Map({
      container: this.container,
      style,
      zoom,
      theme,
      dragRotate,
      ...(center ? { center } : {}),
    })
  }

  async init() {
    await import(/* webpackChunkName: "mapbox" */ 'mapbox-gl/dist/mapbox-gl').then(mapbox => {
      this.MapboxGL = mapbox
      this.map = this.setupMapbox()

      if (!this.props.touchRotate) {
        // disable map rotation using touch rotation gesture
        this.map.touchZoomRotate.disableRotation()
      }

      this.map.on('style.load', () => {
        this.setState({
          loaded: true,
        })
      })
    })
  }

  isCenterChange(center, nextCenter) {
    const { lat, lng } = center || {}
    const next = nextCenter || {}

    return lat !== next.lat || lng !== next.lng
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      children,
    } = this.props

    return (
      <div
        ref={x => { this.container = x }}
        className={
          classnames(
            className,
            theme.Mapbox,
            color && theme[`Mapbox-${color}`],
            size && theme[`Mapbox-${size}`],
          )
        }
      >
        {(this.state.loaded && this.map) && children}
      </div>
    )
  }
}

// Mapbox.js                         |    58.62 |    34.62 |    69.23 |    58.62 |... 117,119,133 |
