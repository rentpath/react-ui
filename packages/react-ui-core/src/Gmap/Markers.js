import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { setupMarker, removeMarker } from './utils/markerHelpers'

const EMPTY_MARKERS = {}

const MARKER = ({ properties, geometry }) => ({
  id: properties.id,
  position: {
    lng: geometry.coordinates[0],
    lat: geometry.coordinates[1],
  },
  title: properties.id,
  key: properties.id,
})

export default class Markers extends PureComponent {
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
    Object.keys(this.markers).forEach(id => {
      removeMarker(this.markers[id])
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

  renderMarkers() {
    const { map, geojson } = this.props

    geojson.features.forEach(feature => {
      const id = feature.properties.id
      const marker = this.marker(feature)

      this.markers[id] = setupMarker(map, marker)
    })
  }

  render() {
    const { map, append } = this.props

    if (map) {
      if (!append) this.clearMarkers()
      this.renderMarkers()
    }
    return null
  }
}
