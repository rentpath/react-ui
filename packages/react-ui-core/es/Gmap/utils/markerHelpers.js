import _objectSpread from "@babel/runtime/helpers/objectSpread";
import omitBy from 'lodash/omitBy';
import { setupEvents } from './mapEventHelpers';
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
export var removeMarker = function removeMarker(marker) {
  if (marker) {
    window.google.maps.event.clearInstanceListeners(marker);
    marker.setMap(null);
  }
};
export var setupMarker = function setupMarker(map, props) {
  if (map) {
    var propsWithoutEvents = omitBy(props, function (key, val) {
      return EVENTS[val];
    });
    var marker = new window.google.maps.Marker(_objectSpread({}, propsWithoutEvents, {
      map: map
    }));
    setupEvents(marker, EVENTS, props);
    return marker;
  }

  return null;
};