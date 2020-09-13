"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEvent = exports.setupEvents = exports.handleEvent = void 0;

var handleEvent = function handleEvent(instance, name, props) {
  return function (event) {
    return props[name](event, props, instance);
  };
};

exports.handleEvent = handleEvent;

var setupEvents = function setupEvents(instance, events, props, once) {
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

exports.setupEvents = setupEvents;

var removeEvent = function removeEvent(event) {
  window.google.maps.event.removeListener(event);
};

exports.removeEvent = removeEvent;