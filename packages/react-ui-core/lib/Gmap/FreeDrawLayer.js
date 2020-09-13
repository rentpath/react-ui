"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _const = require("./utils/const");

var _mapEventHelpers = require("./utils/mapEventHelpers");

var _class, _class2, _temp;

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
  (0, _inherits2.default)(FreeDrawLayer, _PureComponent);

  function FreeDrawLayer() {
    (0, _classCallCheck2.default)(this, FreeDrawLayer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FreeDrawLayer).apply(this, arguments));
  }

  (0, _createClass2.default)(FreeDrawLayer, [{
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
      map.setOptions((0, _objectSpread2.default)({}, enableControls(true), mapControls));
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
          (0, _mapEventHelpers.removeEvent)(_this.events[name]);
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
      return new window.google.maps.Polyline((0, _objectSpread2.default)({
        map: map,
        clickable: false
      }, dataStyle.polyline));
    }
  }, {
    key: "createPolygon",
    value: function createPolygon(polyline, attributes) {
      return new window.google.maps.Polygon((0, _objectSpread2.default)({
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
      this.events = (0, _objectSpread2.default)({}, (0, _mapEventHelpers.setupEvents)(map, _const.GMAP_EVENTS, {
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
        return _this2.createPolygon(path, (0, _objectSpread2.default)({}, polyline, polygon));
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
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  map: _propTypes.default.object,
  enabled: _propTypes.default.bool,
  onDrawBegin: _propTypes.default.func,
  onDrawEnd: _propTypes.default.func,
  shapes: _propTypes.default.object,
  dataStyle: _propTypes.default.object,
  mapControls: _propTypes.default.object
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  shapes: {},
  dataStyle: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleMouseUp", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseUp"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleMouseDown", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseDown"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleMouseMove", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleMouseMove"), _class.prototype)), _class);
exports.default = FreeDrawLayer;