import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import { GMAP_EVENTS } from './utils/const'
import { setupEvents, removeEvent } from './utils/mapEventHelpers'

const enableControls = (enable = true) => ({
  draggable: enable,
  zoomControl: enable,
  scrollwheel: enable,
  disableDoubleClickZoom: enable,
})

export default class FreeDrawLayer extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    enabled: PropTypes.bool,
    onDrawBegin: PropTypes.func,
    onDrawEnd: PropTypes.func,
    shapes: PropTypes.object,
    dataStyle: PropTypes.object,
    mapControls: PropTypes.object,
  }

  static defaultProps = {
    shapes: {},
    dataStyle: {},
  }

  componentDidMount() {
    this.enabled = false
    this.addShapes()
    if (this.props.enabled) this.enableDraw()
  }

  componentWillReceiveProps(nextProps) {
    const { enabled } = nextProps

    if (this.enabled !== enabled) {
      enabled ? this.enableDraw() : this.disableDraw() // eslint-disable-line no-unused-expressions
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.shapes !== prevProps.shapes) {
      this.clearAllShapes()
      this.addShapes()
    }
  }

  getPolygonCoords(poly) {
    return poly && poly.getPath().getArray().map(path => [path.lng(), path.lat()])
  }

  enableMapControls() {
    const { map, mapControls } = this.props
    map.setOptions({
      ...enableControls(true),
      ...mapControls,
    })
  }

  disableMapControls() {
    const { map } = this.props
    map.setOptions(enableControls(false))
  }

  enableDraw() {
    this.enabled = true

    this.disableMapControls()
    this.clearAllShapes()
    this.drawFreeHand()
  }

  @autobind
  handleMouseUp() {
    this.mouseDown = false
    const polygonCoords = this.getPolygonCoords(this.polygon)

    if (polygonCoords.length) this.finishDraw(polygonCoords)
  }

  finishDraw(polygonCoords) {
    if (this.enabled) {
      const { onDrawEnd } = this.props

      if (onDrawEnd) onDrawEnd(polygonCoords)
    }
  }

  disableDraw() {
    Object.keys(this.events).forEach(name => {
      removeEvent(this.events[name])
    })

    if (this.polyline) this.polyline.setMap(null)
    if (this.polygon) this.polygon.setMap(null)
    this.enableMapControls()
    this.enabled = false
  }

  createPolyline() {
    const { map, dataStyle } = this.props

    return new window.google.maps.Polyline({
      map,
      clickable: false,
      ...dataStyle.polyline,
    })
  }

  createPolygon(polyline, attributes) {
    return new window.google.maps.Polygon({
      map: this.props.map,
      path: polyline,
      clickable: false,
      ...attributes,
    })
  }

  @autobind
  drawFreeHand() {
    const { map, dataStyle, onDrawBegin } = this.props

    this.polyline = this.createPolyline()
    this.polygon = this.createPolygon(this.polyline.getPath(), dataStyle.polylineFill)

    if (onDrawBegin) onDrawBegin()

    this.events = {
      ...setupEvents(map, GMAP_EVENTS, {
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onTouchMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleMouseUp,
      }, false),
    }
  }

  @autobind
  handleMouseDown() {
    this.mouseDown = true
  }

  @autobind
  handleMouseMove(e) {
    if (this.mouseDown) {
      this.polyline.getPath().push(e.latLng)
    }
  }

  addShapes() {
    const { polyline, polygon } = this.props.dataStyle
    const shapes = this.formatLongLatToGmapsCoordinates()

    this.polygons = shapes.map(path =>
      this.createPolygon(path, { ...polyline, ...polygon })
    )
  }

  clearAllShapes() {
    this.polygons.forEach(poly => poly.setMap(null))
    this.polygons = []
  }

  formatLongLatToGmapsCoordinates() {
    // Should be refactored later to
    // over(pipe(allArr, allArr), point => ({lat: point[1], lng: point[0]})(Object.values(shape)

    return Object.values(this.props.shapes).map(polygon => (
      polygon.map(point => ({ lat: point[1], lng: point[0] }))
    ))
  }

  render() {
    return null
  }
}
