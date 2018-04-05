export const handleEvent = (instance, name, props) =>
  event => props[name](event, props, instance)

export const setupEvents = (instance, events, props) => {
  const eventNames = Object.keys(events)

  eventNames.forEach(name => {
    if (props[name] && typeof props[name] === 'function') {
      const event = handleEvent(instance, name, props)
      window.google.maps.event.addListener(instance, events[name], event)
    }
  })
}
