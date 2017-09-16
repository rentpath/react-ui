import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MapboxGL from 'mapbox-gl/dist/mapbox-gl'

export default class Mapbox extends PureComponent {
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
    flyOnCenterChange: PropTypes.bool,
    style: PropTypes.string,
    zoom: PropTypes.number,
    children: PropTypes.array,
  }

  static childContextTypes = {
    map: PropTypes.object,
    MapboxGL: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
    flyOnCenterChange: false,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      map: null,
    }
  }

  getChildContext() {
    return {
      map: this.state.map,
      MapboxGL,
    }
  }

  componentDidMount() {
    const map = this.setupMapbox()
    map.on('load', () => {
      this.setState({ map })
    })
  }

  componentWillReceiveProps(nextProps) {
    const { map } = this.state
    const { center } = this.props

    if (map && nextProps.center && this.isCenterChange(center, nextProps.center)) {
      if (nextProps.flyOnCenterChange) {
        map.flyTo(nextProps.center)
      } else {
        map.setCenter(nextProps.center)
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.children !== this.props.children ||
      nextState.map !== this.state.map)
  }

  setupMapbox() {
    MapboxGL.accessToken = this.props.token
    const { center, style, zoom, theme } = this.props
    return new MapboxGL.Map({
      container: this.container,
      style,
      zoom,
      theme,
      ...(center ? { center } : {}),
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

    const { map } = this.state

    return (
      <div>
        <div
          ref={x => { this.container = x }}
          className={classNames(
            className,
            theme[`Map-${color}`],
            theme[`Map-${size}`],
            theme.Map,
          )}
        />
        {map && children}
      </div>
    )
  }
}
