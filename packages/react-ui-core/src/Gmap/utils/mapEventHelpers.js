export const handleEvent = (instance, name, props) =>
  event => props[name](event, props, instance)

export const setupEvents = (instance, events, props, once) => {
  const eventNames = Object.keys(events)
  const type = once ? 'addListenerOnce' : 'addListener'
  const eventHandlers = {}
  eventNames.forEach(name => {
    if (props[name] && typeof props[name] === 'function') {
      const event = handleEvent(instance, name, props)
      eventHandlers[name] = window.google.maps.event[type](instance, events[name], event)
    }
  })
  return eventHandlers
}

export const removeEvent = event => {
  window.google.maps.event.removeListener(event)
}
