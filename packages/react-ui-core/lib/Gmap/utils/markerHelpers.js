'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupMarker = exports.removeMarker = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _omitBy = require('lodash/omitBy');

var _omitBy2 = _interopRequireDefault(_omitBy);

var _mapEventHelpers = require('./mapEventHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var removeMarker = exports.removeMarker = function removeMarker(marker) {
  if (marker) {
    window.google.maps.event.clearInstanceListeners(marker);
    marker.setMap(null);
  }
};

var setupMarker = exports.setupMarker = function setupMarker(map, props) {
  if (map) {
    var propsWithoutEvents = (0, _omitBy2.default)(props, function (key, val) {
      return EVENTS[val];
    });
    var marker = new window.google.maps.Marker((0, _extends3.default)({}, propsWithoutEvents, {
      map: map
    }));

    (0, _mapEventHelpers.setupEvents)(marker, EVENTS, props);

    return marker;
  }

  return null;
};