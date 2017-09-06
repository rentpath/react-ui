import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class Mapbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
    token: PropTypes.string,
    center: PropTypes.array,
    style: PropTypes.string,
    zoom: PropTypes.number,
    children: PropTypes.array,
  }

  static childContextTypes = {
    map: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  constructor(props, context) {
    super(props, context)
    mapboxgl.accessToken = props.token

    this.state = {
      map: null,
    }
  }

  getChildContext() {
    return {
      map: this.state.map,
    }
  }

  componentDidMount() {
    if (this.props.center) {
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
  }

  componentWillReceiveProps(nextProps) {
    const { map } = this.state

    if (map && nextProps.center) {
      map.flyTo(nextProps.center)
    }
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
