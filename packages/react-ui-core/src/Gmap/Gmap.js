import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import startsWith from 'lodash/startsWith'
import pickBy from 'lodash/pickBy'
import { GmapInteraction } from './GmapInteraction'
import withGoogleScript from './withGoogleScript'
import { setupEvents } from './utils/mapEventHelpers'

const DEFAULT_ZOOM = 8
const DEFAULT_MIN_ZOOM = 5
const DEFAULT_CENTER = { // Atlanta, GA
  lat: 33.7490,
  lng: -84.3880,
}

const EVENTS = {
  onBoundsChanged: 'bounds_changed',
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onHeadingChanged: 'heading_changed',
  onIdle: 'idle',
  onMaptypeIdChanged: 'maptypeid_changed',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onProjectionChanged: 'projection_changed',
  onResize: 'resize',
  onRightClick: 'rightclick',
  onTilesLoaded: 'tilesloaded',
  onTiltChanged: 'tilt_changed',
  onZoomChanged: 'zoom_changed',
}

const EVENT_NAMES = Object.keys(EVENTS)

const MAP_CONTROLS = {
  fullscreenControl: false,
  streetViewControl: false,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  rotateControl: true,

}

@themed(/^Gmap/, { pure: true })

export class Gmap extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    center: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    zoom: PropTypes.number,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    clickableIcons: PropTypes.bool,
    mapControls: PropTypes.shape({
      fullscreenControl: PropTypes.bool,
      mapTypeControl: PropTypes.bool,
      zoomControl: PropTypes.bool,
      streetViewControl: PropTypes.bool,
      scaleControl: PropTypes.bool,
      rotateControl: PropTypes.bool,
      draggable: PropTypes.bool,
      scrollwheel: PropTypes.bool,
      disableDoubleClickZoom: PropTypes.bool,
    }),
    stylingFunction: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    zoom: DEFAULT_ZOOM,
    minZoom: DEFAULT_MIN_ZOOM,
    center: DEFAULT_CENTER,
    clickableIcons: false,
    stylingFunction: () => ({}),
  }

  constructor(props) {
    super(props)

    this.state = { map: null }
    this.googleMap = React.createRef()
  }

  componentDidMount() {
    this.initMap()
  }

  componentDidUpdate(prevProps) {
    const { center, zoom } = this.props

    if (this.map) {
      if (this.isCenterChange(prevProps.center, center)) {
        this.map.setCenter(center)
      }

      if (zoom && prevProps.zoom !== zoom) {
        this.map.setZoom(zoom)
      }
    }
  }

  componentWillUnmount() {
    if (this.map) {
      window.google.maps.event.clearInstanceListeners(this.map)
    }
  }

  get children() {
    const { map } = this.state
    const children = React.Children.toArray(this.props.children)
    const props = { map }

    return React.Children.map(children, child =>
      React.cloneElement(child, props))
  }

  get mapControls() {
    return { ...MAP_CONTROLS, ...this.props.mapControls }
  }

  initMap() {
    const {
      zoom,
      center,
      minZoom,
      maxZoom,
      clickableIcons,
      stylingFunction,
    } = this.props

    this.map = new window.google.maps.Map(this.googleMap.current, {
      zoom,
      clickableIcons,
      minZoom,
      maxZoom,
      center,
      ...this.mapControls,
    })

    this.map.data.setStyle(stylingFunction)

    setupEvents(this.map, EVENTS, this.props)

    this.setState({ map: this.map })
    GmapInteraction.registerMap(this.map)
  }

  isCenterChange(prev, next) {
    const { lat: plat, lng: plng } = prev || {}
    const { lat: nlat, lng: nlng } = next || {}

    if (plat && plng && !(nlat && nlng)) return false
    return plat !== nlat || plng !== nlng
  }

  render() {
    const { map } = this.state
    const {
      theme,
      className,
      children,
      ...rest
    } = this.props

    const attributes = pickBy(rest, (_, key) => startsWith(key, 'data'))

    return (
      <div
        ref={this.googleMap}
        className={classnames(
          theme.Gmap,
          className,
        )}
        data-tid="google-map"
        {...attributes}
      >
        {map && this.children}
      </div>
    )
  }
}

EVENT_NAMES.forEach(name => {
  Gmap.propTypes[name] = PropTypes.func
})

export default withGoogleScript(Gmap)
