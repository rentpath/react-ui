import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Layer extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    geojson: PropTypes.object.isRequired,
    // styles that apply to line, polygon geometries
    styles: PropTypes.shape({
      clickable: PropTypes.boolean,
      draggable: PropTypes.boolean,
      editable: PropTypes.boolean,
      fillColor: PropTypes.string,
      fillOpacity: PropTypes.number,
      strokeColor: PropTypes.string,
      strokeOpacity: PropTypes.number,
      strokeWeight: PropTypes.number,
      visible: PropTypes.boolean,
      zIndex: PropTypes.number,
    }),
  }

  static defaultProps = {
    styles: {},
  }

  constructor(props) {
    super(props)
    this.features = new Set()
  }

  componentWillUnmount() {
    this.removeFeatures()
  }

  removeFeatures() {
    const { map } = this.props

    this.features.forEach(feature => {
      if (map) map.data.remove(feature)
      this.features.delete(feature)
    })
  }

  render() {
    const { map, geojson, styles } = this.props

    this.removeFeatures()
    if (map) {
      map.data.addGeoJson(geojson).forEach(feature => {
        // map.data.overrideStyle(feature, styles)
        this.features.add(feature)
      })
    }

    return null
  }
}
