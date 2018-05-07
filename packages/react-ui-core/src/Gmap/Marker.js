import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { setupMarker, removeMarker } from './utils/markerHelpers'

const EVENTS = {
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onDragEnd: 'dragend',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRecenter: 'recenter',
}

const EVENT_NAMES = Object.keys(EVENTS)
const NOOP = () => ({})

class Marker extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
    marker: PropTypes.func,
  }

  static defaultProps = {
    marker: NOOP,
  }

  componentDidMount() {
    this.setupMarker()
  }

  componentDidUpdate() {
    this.clearMarker()
    this.setupMarker()
  }

  componentWillUnmount() {
    this.clearMarker()
  }

  setupMarker() {
    const { map } = this.props

    if (map) {
      this.markerInstance = setupMarker(map, this.marker())
    }
  }

  marker() {
    const { map, marker, ...rest } = this.props
    return {
      ...rest,
      ...marker(rest),
    }
  }

  clearMarker() {
    if (this.props.map && this.markerInstance) {
      removeMarker(this.markerInstance)
      this.markerInstance = null
    }
  }

  render() {
    return null
  }
}

EVENT_NAMES.forEach(name => {
  Marker.propTypes[name] = PropTypes.func
})

export default Marker
