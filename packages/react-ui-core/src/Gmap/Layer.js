import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Layer extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    geojson: PropTypes.object.isRequired,
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

    if (map) {
      this.features.forEach(feature => {
        map.data.remove(feature)
      })
    }
    this.features.clear()
  }

  render() {
    const { map, geojson } = this.props

    this.removeFeatures()
    if (map) {
      map.data.addGeoJson(geojson).forEach(feature => {
        this.features.add(feature)
      })
    }

    return null
  }
}
