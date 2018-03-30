import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import startsWith from 'lodash/startsWith'
import pickBy from 'lodash/pickBy'
import { GmapContext } from './GmapContext'
import { GmapInteraction } from './GmapInteraction'

const DEFAULT_ZOOM = 8
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
  onHeadingChnaged: 'heading_changed',
  onIdle: 'idle',
  onMaptypeIdChanged: 'maptypeid_changed',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onProjectionChanged: 'projection_changed',
  onResize: 'resize',
  onRightclick: 'rightclick',
  onTilesLoaded: 'tilesloaded',
  onTiltChanged: 'tilt_changed',
  onZoomChanged: 'zoom_changed',
}

const EVENT_NAMES = Object.keys(EVENTS)

@themed(/^Gmap/, { pure: true })

class GmapBase extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    center: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    zoom: PropTypes.number,
    clickableIcons: PropTypes.bool,
    mapControls: PropTypes.shape({
      fullscreenControl: PropTypes.bool,
      mapTypeControl: PropTypes.bool,
      zoomControl: PropTypes.bool,
      streetViewControl: PropTypes.bool,
    }),
  }

  static defaultProps = {
    theme: {},
    zoom: DEFAULT_ZOOM,
    clickableIcons: false,
    mapControls: {
      fullscreenControl: false,
      streetViewControl: false,
    },
  }

  constructor(props) {
    super(props)

    this.state = { map: null }
    this.googleMap = React.createRef()
  }

  componentDidMount() {
    this.initMap()
  }

  componentWillUnmount() {
    if (this.map) {
      window.google.maps.event.clearInstanceListeners(this.map)
    }
  }

  setupEvents() {
    EVENT_NAMES.forEach(name => {
      if (this.props[name]) {
        this.map.addListener(EVENTS[name], this.handleEvent(name))
      }
    })
  }

  initMap() {
    const {
      zoom,
      mapControls,
      center,
      clickableIcons,
    } = this.props

    this.map = new window.google.maps.Map(this.googleMap.current, {
      zoom,
      clickableIcons,
      center: center || DEFAULT_CENTER,
      ...mapControls,
    })

    this.setupEvents()
    this.setState({ map: this.map })
    GmapInteraction.registerMap(this.map)
  }

  handleEvent(name) {
    return () => {
      this.props[name](this.map)
    }
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
        <GmapContext.Provider value={{ map }}>
          {map && children}
        </GmapContext.Provider>
      </div>
    )
  }
}

EVENT_NAMES.forEach(name => {
  GmapBase.propTypes[name] = PropTypes.func
})

export default GmapBase
