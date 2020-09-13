export var handleEvent = function handleEvent(instance, name, props) {
  return function (event) {
    return props[name](event, props, instance);
  };
};
export var setupEvents = function setupEvents(instance, events, props, once) {
  var eventNames = Object.keys(events);
  var type = once ? 'addListenerOnce' : 'addListener';
  var eventHandlers = {};
  eventNames.forEach(function (name) {
    if (props[name] && typeof props[name] === 'function') {
      var event = handleEvent(instance, name, props);
      eventHandlers[name] = window.google.maps.event[type](instance, events[name], event);
    }
  });
  return eventHandlers;
};
export var removeEvent = function removeEvent(event) {
  window.google.maps.event.removeListener(event);
};