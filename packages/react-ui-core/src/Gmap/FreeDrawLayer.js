import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import themed from 'react-themed'
import classnames from 'classnames'
import { GMAP_EVENTS } from './utils/const'
import { setupEvents, removeEvent } from './utils/mapEventHelpers'
import FreeDrawTool from './FreeDrawTool'
import FreeDrawBanner from './FreeDrawBanner'

const enableControls = (enable = true) => ({
  draggable: enable,
  zoomControl: enable,
  scrollwheel: enable,
  disableDoubleClickZoom: enable,
})

@themed(/^Gmap_FreeDrawLayer/, { pure: true })
export default class FreeDrawLayer extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    map: PropTypes.object,
    onMapDrawStart: PropTypes.func,
    onEnableMapDraw: PropTypes.func,
    onMapDrawEnd: PropTypes.func,
    shapes: PropTypes.object,
    multipleShapes: PropTypes.bool,
    dataStyle: PropTypes.object,
    mapControls: PropTypes.object.isRequired,
    freeDrawToolControls: PropTypes.object,
    DrawTool: PropTypes.func,
    className: PropTypes.string,
    bannerControls: PropTypes.object,
    Banner: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    map: {},
    multipleShapes: false,
    shapes: {},
    dataStyle: {},
    freeDrawToolControls: {},
    DrawTool: FreeDrawTool,
    bannerControls: {},
    Banner: FreeDrawBanner,
  }

  constructor(props) {
    super(props)
    this.state = { drawing: false }
    this.addShapes()
  }

  componentDidUpdate(prevProps) {
    if (this.props.shapes !== prevProps.shapes) {
      this.clearAllShapes()
      this.addShapes()
    }
  }

  getPolygonCoords(poly) {
    return poly.getPath().getArray().map(path => [path.lng(), path.lat()])
  }

  enableMapControls() {
    const { map, mapControls } = this.props
    map.setOptions({
      ...enableControls(true),
      ...mapControls,
    })
    this.setState({
      drawing: false,
    })
  }

  disableMapControls() {
    const { map } = this.props
    map.setOptions(enableControls(false))
    this.setState({ drawing: true })
  }

  @autobind
  enableMapDraw() {
    const { map, multipleShapes, onEnableMapDraw } = this.props
    this.disableMapControls()

    if (onEnableMapDraw) onEnableMapDraw()

    if (!multipleShapes) this.clearAllShapes()

    this.events = setupEvents(map, GMAP_EVENTS, {
      onMouseDown: this.drawFreeHand,
    }, true)
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
    const { map } = this.props

    return new window.google.maps.Polygon({
      map,
      path: polyline,
      clickable: false,
      ...attributes,
    })
  }

  @autobind
  drawFreeHand() {
    const { map, dataStyle, onMapDrawStart, onMapDrawEnd } = this.props
    const polyline = this.createPolyline()
    const polygon = this.createPolygon(polyline.getPath(), dataStyle.polylineFill)

    if (onMapDrawStart) onMapDrawStart()

    const listener = setupEvents(map, GMAP_EVENTS, {
      onMouseMove: e => polyline.getPath().push(e.latLng),
      onTouchStart: e => polyline.getPath().push(e.latLng),
    }, false)

    const onMouseUp = () => {
      removeEvent(listener.onMouseMove)
      polyline.setMap(null)
      polygon.setMap(null)

      if (onMapDrawEnd) onMapDrawEnd(this.getPolygonCoords(polygon))
      this.enableMapControls()
    }

    this.events = setupEvents(map, GMAP_EVENTS, {
      onMouseUp,
      onTouchEnd: onMouseUp,
    }, true)
  }

  addShapes() {
    const shapes = this.formatLongLatToGmapsCoordinates()
    this.polygons = shapes.map(path =>
      this.createPolygon(
        path,
        {
          ...this.props.dataStyle.polyline,
          ...this.props.dataStyle.polygon,
        }
      )
    )
  }

  @autobind
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
    const {
      freeDrawToolControls,
      DrawTool,
      bannerControls,
      Banner,
      className,
      theme,
    } = this.props

    return (
      <React.Fragment>
        <Banner
          className={classnames(className, theme.Gmap_FreeDrawLayer)}
          {...bannerControls}
        />
        <DrawTool
          className={classnames(className, theme.Gmap_FreeDrawLayer)}
          handleClick={this.enableMapDraw}
          {...freeDrawToolControls}
        />
      </React.Fragment>
    )
  }
}
