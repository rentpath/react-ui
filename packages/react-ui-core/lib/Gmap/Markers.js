"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _difference = _interopRequireDefault(require("lodash/difference"));

var _markerHelpers = require("./utils/markerHelpers");

var MARKER = function MARKER(_ref) {
  var properties = _ref.properties,
      geometry = _ref.geometry;
  return (0, _objectSpread2.default)({}, properties, {
    position: {
      lng: geometry.coordinates[0],
      lat: geometry.coordinates[1]
    },
    key: properties.id
  });
};

var Markers =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Markers, _PureComponent);

  function Markers() {
    (0, _classCallCheck2.default)(this, Markers);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Markers).apply(this, arguments));
  }

  (0, _createClass2.default)(Markers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.markers = {};
      this.renderMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.append) this.clearUnusedMarkers();
      this.renderMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearAllMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: "clearAllMarkers",
    value: function clearAllMarkers() {
      var _this = this;

      Object.keys(this.markers).forEach(function (id) {
        (0, _markerHelpers.removeMarker)(_this.markers[id]);
      });
      this.markers = {};
    }
  }, {
    key: "clearUnusedMarkers",
    value: function clearUnusedMarkers() {
      var _this2 = this;

      var geojson = this.props.geojson;

      if (!geojson || !geojson.features || !geojson.features.length) {
        this.clearAllMarkers();
        return;
      }

      var oldIds = Object.keys(this.markers);
      var newIds = geojson.features.map(function (feature) {
        return feature.properties.id;
      });
      var remove = (0, _difference.default)(oldIds, newIds);
      remove.forEach(function (id) {
        (0, _markerHelpers.removeMarker)(_this2.markers[id]);
        _this2.markers[id] = null;
      });
    }
  }, {
    key: "marker",
    value: function marker(feature) {
      var props = this.props.marker(feature);
      var defaults = MARKER(feature);

      if ((0, _typeof2.default)(props) === 'object') {
        return (0, _objectSpread2.default)({}, defaults, props);
      }

      return defaults;
    }
  }, {
    key: "renderMarkers",
    value: function renderMarkers() {
      var _this3 = this;

      var _this$props = this.props,
          map = _this$props.map,
          geojson = _this$props.geojson;
      if (!map || !geojson || !geojson.features) return;
      geojson.features.forEach(function (feature) {
        var id = feature.properties.id;
        if (_this3.markers[id]) return;
        _this3.markers[id] = (0, _markerHelpers.setupMarker)(map, _this3.marker(feature));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Markers;
}(_react.PureComponent);

exports.default = Markers;
(0, _defineProperty2.default)(Markers, "propTypes", {
  map: _propTypes.default.object,
  marker: _propTypes.default.func,
  geojson: _propTypes.default.object,
  append: _propTypes.default.bool,
  onMarkersReady: _propTypes.default.func
});
(0, _defineProperty2.default)(Markers, "defaultProps", {
  marker: function marker() {
    return {};
  },
  append: false,
  onMarkersReady: function onMarkersReady() {}
});