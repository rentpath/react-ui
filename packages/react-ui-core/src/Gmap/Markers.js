import { Component } from 'react'
import PropTypes from 'prop-types'
import { setupMarker, removeMarker } from './utils/markerHelpers'

const EMPTY_MARKERS = {}

const MARKER = ({ properties, geometry }) => ({
  id: properties.id,
  position: {
    lat: geometry.coordinates[0],
    lng: geometry.coordinates[1],
  },
  title: properties.id,
  key: properties.id,
})

export default class Markers extends Component {
  static propTypes = {
    map: PropTypes.object,
    marker: PropTypes.func,
    geojson: PropTypes.object,
    append: PropTypes.bool,
  }

  static defaultProps = {
    marker: () => ({}),
    append: false,
  }

  constructor(props) {
    super(props)
    this.markers = EMPTY_MARKERS
  }

  componentWillUnmount() {
    this.clearMarkers()
  }

  clearMarkers() {
    Object.keys(this.markers).map(id => {
      removeMarker(this.markers[id])
      return null
    })

    this.markers = EMPTY_MARKERS
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

  renderMarker(map, feature) {
    const id = feature.properties.id
    const marker = this.marker(feature)

    this.markers[id] = setupMarker(map, marker)
    return this.markers[id]
  }

  render() {
    const {
      map,
      geojson,
      append,
    } = this.props

    if (map) {
      if (!append && Object.keys(this.markers).length) this.clearMarkers()
      geojson.features.map(feature => this.renderMarker(map, feature))
    }
    return null
  }
}
