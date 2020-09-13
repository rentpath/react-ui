import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _class, _class2, _temp;

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { GMAP_EVENTS } from './utils/const';
import { setupEvents, removeEvent } from './utils/mapEventHelpers';

var enableControls = function enableControls() {
  var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    draggable: enable,
    zoomControl: enable,
    scrollwheel: enable,
    disableDoubleClickZoom: enable
  };
};

var FreeDrawLayer = (_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FreeDrawLayer, _PureComponent);

  function FreeDrawLayer() {
    _classCallCheck(this, FreeDrawLayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(FreeDrawLayer).apply(this, arguments));
  }

  _createClass(FreeDrawLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.enabled = false;
      this.addShapes();
      if (this.props.enabled) this.enableDraw();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var enabled = nextProps.enabled;

      if (this.enabled !== enabled) {
        enabled ? this.enableDraw() : this.disableDraw(); // eslint-disable-line no-unused-expressions
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.shapes !== prevProps.shapes) {
        this.clearAllShapes();
        this.addShapes();
      }
    }
  }, {
    key: "getPolygonCoords",
    value: function getPolygonCoords(poly) {
      return poly && poly.getPath().getArray().map(function (path) {
        return [path.lng(), path.lat()];
      });
    }
  }, {
    key: "enableMapControls",
    value: function enableMapControls() {
      var _this$props = this.props,
          map = _this$props.map,
          mapControls = _this$props.mapControls;
      map.setOptions(_objectSpread({}, enableControls(true), mapControls));
    }
  }, {
    key: "disableMapControls",
    value: function disableMapControls() {
      var map = this.props.map;
      map.setOptions(enableControls(false));
    }
  }, {
    key: "enableDraw",
    value: function enableDraw() {
      this.enabled = true;
      this.disableMapControls();
      this.clearAllShapes();
      this.drawFreeHand();
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      this.mouseDown = false;
      var polygonCoords = this.getPolygonCoords(this.polygon);
      if (polygonCoords.length) this.finishDraw(polygonCoords);
      this.endDraw();
      this.drawFreeHand();
    }
  }, {
    key: "finishDraw",
    value: function finishDraw(polygonCoords) {
      if (this.enabled) {
        var onDrawEnd = this.props.onDrawEnd;
        if (onDrawEnd) onDrawEnd(polygonCoords);
      }
    }
  }, {
    key: "endDraw",
    value: function endDraw() {
      var _this = this;

      if (this.events) {
        Object.keys(this.events).forEach(function (name) {
          removeEvent(_this.events[name]);
        });
      }

      if (this.polyline) this.polyline.setMap(null);
      if (this.polygon) this.polygon.setMap(null);
    }
  }, {
    key: "disableDraw",
    value: function disableDraw() {
      this.endDraw();
      this.enableMapControls();
      this.enabled = false;
    }
  }, {
    key: "createPolyline",
    value: function createPolyline() {
      var _this$props2 = this.props,
          map = _this$props2.map,
          dataStyle = _this$props2.dataStyle;
      return new window.google.maps.Polyline(_objectSpread({
        map: map,
        clickable: false
      }, dataStyle.polyline));
    }
  }, {
    key: "createPolygon",
    value: function createPolygon(polyline, attributes) {
      return new window.google.maps.Polygon(_objectSpread({
        map: this.props.map,
        path: polyline,
        clickable: false
      }, attributes));
    }
  }, {
    key: "drawFreeHand",
    value: function drawFreeHand() {
      var _this$props3 = this.props,
          map = _this$props3.map,
          dataStyle = _this$props3.dataStyle,
          onDrawBegin = _this$props3.onDrawBegin;
      this.polyline = this.createPolyline();
      this.polygon = this.createPolygon(this.polyline.getPath(), dataStyle.polylineFill);
      if (onDrawBegin) onDrawBegin();
      this.events = _objectSpread({}, setupEvents(map, GMAP_EVENTS, {
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onTouchMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleMouseUp
      }, false));
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      this.mouseDown = true;
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      if (this.mouseDown) {
        this.polyline.getPath().push(e.latLng);
      }
    }
  }, {
    key: "addShapes",
    value: function addShapes() {
      var _this2 = this;

      var _this$props$dataStyle = this.props.dataStyle,
          polyline = _this$props$dataStyle.polyline,
          polygon = _this$props$dataStyle.polygon;
      var shapes = this.formatLongLatToGmapsCoordinates();
      this.polygons = shapes.map(function (path) {
        return _this2.createPolygon(path, _objectSpread({}, polyline, polygon));
      });
    }
  }, {
    key: "clearAllShapes",
    value: function clearAllShapes() {
      this.polygons.forEach(function (poly) {
        return poly.setMap(null);
      });
      this.polygons = [];
    }
  }, {
    key: "formatLongLatToGmapsCoordinates",
    value: function formatLongLatToGmapsCoordinates() {
      // Should be refactored later to
      // over(pipe(allArr, allArr), point => ({lat: point[1], lng: point[0]})(Object.values(shape)
      return Object.values(this.props.shapes).map(function (polygon) {
        return polygon.map(function (point) {
          return {
            lat: point[1],
            lng: point[0]
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FreeDrawLayer;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  map: PropTypes.object,
  enabled: PropTypes.bool,
  onDrawBegin: PropTypes.func,
  onDrawEnd: PropTypes.func,
  shapes: PropTypes.object,
  dataStyle: PropTypes.object,
  mapControls: PropTypes.object
}), _defineProperty(_class2, "defaultProps", {
  shapes: {},
  dataStyle: {}
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "handleMouseUp", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseDown", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMouseMove", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseMove"), _class.prototype)), _class);
export { FreeDrawLayer as default };