"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupMarker = exports.removeMarker = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _omitBy = _interopRequireDefault(require("lodash/omitBy"));

var _mapEventHelpers = require("./mapEventHelpers");

var EVENTS = {
  onAnimationChanged: 'animation_changed',
  onClick: 'click',
  onClickableChanged: 'clickable_changed',
  onCursorChanged: 'cursor_changed',
  onDoubleClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDraggableChanged: 'draggable_changed',
  onDragStart: 'dragstart',
  onFlatChanged: 'flat_changed',
  onIconChanged: 'icon_changed',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onPositionChanged: 'position_changed',
  onRightClick: 'rightclick',
  onShapeChanged: 'shape_changed',
  onTitleChanged: 'title_changed',
  onVisibleChanged: 'visible_changed',
  onZIndexChanged: 'zindex_changed'
};

var removeMarker = function removeMarker(marker) {
  if (marker) {
    window.google.maps.event.clearInstanceListeners(marker);
    marker.setMap(null);
  }
};

exports.removeMarker = removeMarker;

var setupMarker = function setupMarker(map, props) {
  if (map) {
    var propsWithoutEvents = (0, _omitBy.default)(props, function (key, val) {
      return EVENTS[val];
    });
    var marker = new window.google.maps.Marker((0, _objectSpread2.default)({}, propsWithoutEvents, {
      map: map
    }));
    (0, _mapEventHelpers.setupEvents)(marker, EVENTS, props);
    return marker;
  }

  return null;
};

exports.setupMarker = setupMarker;