import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class Mapbox extends PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      map: null,
    }
  }

  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
    token: PropTypes.string,
    center: PropTypes.array,
    style: PropTypes.string,
    zoom: PropTypes.number,
    container: PropTypes.string,
    children: PropTypes.array,
    sources: PropTypes.array,
    layers: PropTypes.array,
  }

  static childContextTypes = {
    map: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  getChildContext() {
    return { map: this.state.map }
  }

  componentDidMount() {
    const { sources, layers } = this.props

    mapboxgl.accessToken = this.props.token
    const map = new mapboxgl.Map({
      container: this.props.container,
      style: this.props.style,
      center: this.props.center,
      zoom: this.props.zoom,
      theme: this.props.theme,
    })

    map.on('load', () => {
      if (this.state.map !== map) {
        this.setState(map)
      }

      sources.forEach((v, i) => {
        map.addSource(sources[i].id, sources[i].source)
        map.addLayer(layers[i].layer)
      })
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.children !== this.props.children ||
      nextState.map !== this.state.map)
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      children,
      ...props
    } = this.props

    const { map } = this.state

    return (
      <div
        style={{}}
        id="map"
        className={classNames(
          className,
          theme[`Map-${color}`],
          theme[`Map-${size}`],
          theme.Map,
        )}
      >
        {map && children}
      </div>
    )
  }
}
