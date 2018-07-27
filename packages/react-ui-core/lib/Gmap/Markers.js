'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _difference = require('lodash/difference');

var _difference2 = _interopRequireDefault(_difference);

var _markerHelpers = require('./utils/markerHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MARKER = function MARKER(_ref) {
  var properties = _ref.properties,
      geometry = _ref.geometry;
  return (0, _extends3.default)({}, properties, {
    position: {
      lng: geometry.coordinates[0],
      lat: geometry.coordinates[1]
    },
    key: properties.id
  });
};

var Markers = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Markers, _PureComponent);

  function Markers() {
    (0, _classCallCheck3.default)(this, Markers);
    return (0, _possibleConstructorReturn3.default)(this, (Markers.__proto__ || (0, _getPrototypeOf2.default)(Markers)).apply(this, arguments));
  }

  (0, _createClass3.default)(Markers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.markers = {};
      this.renderMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.props.append) this.clearUnusedMarkers();
      this.renderMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearAllMarkers();
      this.props.onMarkersReady(this.markers);
    }
  }, {
    key: 'clearAllMarkers',
    value: function clearAllMarkers() {
      var _this2 = this;

      (0, _keys2.default)(this.markers).forEach(function (id) {
        (0, _markerHelpers.removeMarker)(_this2.markers[id]);
      });

      this.markers = {};
    }
  }, {
    key: 'clearUnusedMarkers',
    value: function clearUnusedMarkers() {
      var _this3 = this;

      var geojson = this.props.geojson;


      if (!geojson || !geojson.features || !geojson.features.length) {
        this.clearAllMarkers();
        return;
      }

      var oldIds = (0, _keys2.default)(this.markers);
      var newIds = geojson.features.map(function (feature) {
        return feature.properties.id;
      });
      var remove = (0, _difference2.default)(oldIds, newIds);

      remove.forEach(function (id) {
        (0, _markerHelpers.removeMarker)(_this3.markers[id]);
        _this3.markers[id] = null;
      });
    }
  }, {
    key: 'marker',
    value: function marker(feature) {
      var props = this.props.marker(feature);
      var defaults = MARKER(feature);

      if ((typeof props === 'undefined' ? 'undefined' : (0, _typeof3.default)(props)) === 'object') {
        return (0, _extends3.default)({}, defaults, props);
      }

      return defaults;
    }
  }, {
    key: 'renderMarkers',
    value: function renderMarkers() {
      var _this4 = this;

      var _props = this.props,
          map = _props.map,
          geojson = _props.geojson;


      if (!map || !geojson || !geojson.features) return;

      geojson.features.forEach(function (feature) {
        var id = feature.properties.id;

        if (_this4.markers[id]) return;

        _this4.markers[id] = (0, _markerHelpers.setupMarker)(map, _this4.marker(feature));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Markers;
}(_react.PureComponent), _class.propTypes = {
  map: _propTypes2.default.object,
  marker: _propTypes2.default.func,
  geojson: _propTypes2.default.object,
  append: _propTypes2.default.bool,
  onMarkersReady: _propTypes2.default.func
}, _class.defaultProps = {
  marker: function marker() {
    return {};
  },
  append: false,
  onMarkersReady: function onMarkersReady() {}
}, _temp);
exports.default = Markers;