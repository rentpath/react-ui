'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEvent = exports.setupEvents = exports.handleEvent = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleEvent = exports.handleEvent = function handleEvent(instance, name, props) {
  return function (event) {
    return props[name](event, props, instance);
  };
};

var setupEvents = exports.setupEvents = function setupEvents(instance, events, props, once) {
  var eventNames = (0, _keys2.default)(events);
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

var removeEvent = exports.removeEvent = function removeEvent(event) {
  window.google.maps.event.removeListener(event);
};