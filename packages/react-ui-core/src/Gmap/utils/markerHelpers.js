import omitBy from 'lodash/omitBy'
import { setupEvents } from './mapEventHelpers'

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

export const removeMarker = marker => {
  if (marker) {
    window.google.maps.event.clearInstanceListeners(marker)
    marker.setMap(null)
  }
}

export const setupMarker = (map, props) => {
  if (map) {
    const propsWithoutEvents = omitBy(props, (key, val) => EVENTS[val])
    const marker = new window.google.maps.Marker({
      ...propsWithoutEvents,
      map,
    })

    setupEvents(marker, EVENTS, props)

    return marker
  }

  return null
}
