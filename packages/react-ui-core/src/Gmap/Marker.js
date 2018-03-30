import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { GmapContext } from './GmapContext'

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

  componentWillUnmount() {
    if (this.marker) {
      window.google.maps.event.clearInstanceListeners(this.marker)
      this.marker.setMap(null)
      this.marker = null
    }
  }

  setupMarker(map) {
    if (map) {
      this.marker = new window.google.maps.Marker({
        ...this.props,
        map,
      })

      this.setupEvents()
    }

    return null
  }

  setupEvents() {
    EVENT_NAMES.forEach(name => {
      if (this.props[name]) {
        this.marker.addListener(EVENTS[name], this.handleEvent(name))
      }
    })
  }

  handleEvent(name) {
    return event => {
      this.props[name](event, this.props, this.marker)
    }
  }

  render() {
    return (
      <GmapContext.Consumer>
        { context => this.setupMarker(context.map)}
      </GmapContext.Consumer>
    )
  }
}

Marker.propTypes = {}

EVENT_NAMES.forEach(name => {
  Marker.propTypes[name] = PropTypes.func
})

export default Marker
