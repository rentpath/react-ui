import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import difference from 'lodash/difference'
import { setupMarker, removeMarker } from './utils/markerHelpers'

const MARKER = ({ properties, geometry }) => ({
  ...properties,
  position: {
    lng: geometry.coordinates[0],
    lat: geometry.coordinates[1],
  },
  key: properties.id,
})

export default class Markers extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    marker: PropTypes.func,
    geojson: PropTypes.object,
    append: PropTypes.bool,
    onMarkersReady: PropTypes.func,
  }

  static defaultProps = {
    marker: () => ({}),
    append: false,
    onMarkersReady: () => {},
  }

  componentDidMount() {
    this.markers = {}
    this.renderMarkers()
    this.props.onMarkersReady(this.markers)
  }

  componentDidUpdate() {
    if (!this.props.append) this.clearUnusedMarkers()
    this.renderMarkers()
    this.props.onMarkersReady(this.markers)
  }

  componentWillUnmount() {
    this.clearAllMarkers()
    this.props.onMarkersReady(this.markers)
  }

  clearAllMarkers() {
    Object.keys(this.markers).forEach(id => {
      removeMarker(this.markers[id])
    })

    this.markers = {}
  }

  clearUnusedMarkers() {
    const { geojson } = this.props

    if (!geojson || !geojson.features || !geojson.features.length) {
      this.clearAllMarkers()
      return
    }

    const oldIds = Object.keys(this.markers)
    const newIds = geojson.features.map(feature => feature.properties.id)
    const remove = difference(oldIds, newIds)

    remove.forEach(id => {
      removeMarker(this.markers[id])
      this.markers[id] = null
    })
  }

  marker(feature) {
    const props = this.props.marker(feature)
    const defaults = MARKER(feature)

    if (typeof props === 'object') {
      return {
        ...defaults,
        ...props,
      }
    }

    return defaults
  }

  renderMarkers() {
    const { map, geojson } = this.props

    if (!map || !geojson || !geojson.features) return

    geojson.features.forEach(feature => {
      const id = feature.properties.id

      if (this.markers[id]) return

      this.markers[id] = setupMarker(map, this.marker(feature))
    })
  }

  render() {
    return null
  }
}
