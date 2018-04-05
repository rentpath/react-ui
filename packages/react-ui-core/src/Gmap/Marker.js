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

class Marker extends PureComponent {
  static propTypes = {
    map: PropTypes.object,
  }

  componentWillUnmount() {
    if (this.marker) {
      removeMarker(this.marker)
      this.marker = null
    }
  }

  setupMarker() {
    const { map, ...rest } = this.props
    this.marker = setupMarker(map, rest)
    return null
  }

  render() {
    return this.setupMarker()
  }
}

EVENT_NAMES.forEach(name => {
  Marker.propTypes[name] = PropTypes.func
})

export default Marker
