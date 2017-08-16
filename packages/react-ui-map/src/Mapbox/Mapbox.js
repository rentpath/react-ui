import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import fly from './fly'

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
    children: PropTypes.array,
    boundingBox: PropTypes.array,
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
    mapboxgl.accessToken = this.props.token
    const map = new mapboxgl.Map({
      container: this.container,
      style: this.props.style,
      center: this.props.center,
      zoom: this.props.zoom,
      theme: this.props.theme,
    })

    map.on('load', () => {
      this.setState({ map })
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.children !== this.props.children ||
      nextState.map !== this.state.map)
  }

  componentWillReceiveProps(nextProps) {
    const { map } = this.state
    fly(map, nextProps.boundingBox)
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
        >
          {map && children}
        </div>
      </div>
    )
  }
}
