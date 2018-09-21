import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { setupEvents } from './utils/mapEventHelpers'

const EVENTS = {
  onAddFeature: 'addfeature',
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRemoveFeature: 'removefeature',
  onRemoveProperty: 'removeproperty',
  onRightClick: 'rightclick',
  onSetGeometry: 'setgeometry',
  onSetProperty: 'setproperty',
}

const EVENT_NAMES = Object.keys(EVENTS)

export default class Layer extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    geojson: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.features = new Set()
  }

  componentDidMount() {
    const { map } = this.props

    if (map && map.data) {
      setupEvents(map.data, EVENTS, this.props)
      this.addFeatures()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.geojson !== this.props.geojson) {
      this.removeFeatures()
      if (this.props.geojson) this.addFeatures()
    }
  }

  componentWillUnmount() {
    this.removeFeatures()
  }

  addFeatures() {
    const { map, geojson } = this.props

    if (map && geojson) {
      map.data.addGeoJson(geojson).forEach(feature => {
        this.features.add(feature)
      })
    }
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
    return null
  }
}

/* NOTE: linter complains about Layer.propTypes.name never used,
 * but it's dynanic so "name" isn't a prop
 */
/* eslint-disable react/no-unused-prop-types */
EVENT_NAMES.forEach(name => {
  Layer.propTypes[name] = PropTypes.func
})
/* eslint-enable react/no-unused-prop-types */
