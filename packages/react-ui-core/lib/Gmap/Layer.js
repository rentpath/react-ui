'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapEventHelpers = require('./utils/mapEventHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EVENTS = {
  onAddFeature: 'addfeature',
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRemoveFeature: 'removefeature',
  onRemoveProperty: 'removeproperty',
  onRightClick: 'rightclick',
  onSetGeometry: 'setgeometry',
  onSetProperty: 'setproperty'
};

var EVENT_NAMES = (0, _keys2.default)(EVENTS);

var Layer = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Layer, _PureComponent);

  function Layer(props) {
    (0, _classCallCheck3.default)(this, Layer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layer.__proto__ || (0, _getPrototypeOf2.default)(Layer)).call(this, props));

    _this.features = new _set2.default();
    return _this;
  }

  (0, _createClass3.default)(Layer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var map = this.props.map;


      if (map && map.data) {
        (0, _mapEventHelpers.setupEvents)(map.data, EVENTS, this.props);
        this.addFeatures();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.geojson !== this.props.geojson) {
        this.removeFeatures();
        if (this.props.geojson) this.addFeatures();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeFeatures();
    }
  }, {
    key: 'addFeatures',
    value: function addFeatures() {
      var _this2 = this;

      var _props = this.props,
          map = _props.map,
          geojson = _props.geojson;


      if (map && geojson) {
        map.data.addGeoJson(geojson).forEach(function (feature) {
          _this2.features.add(feature);
        });
      }
    }
  }, {
    key: 'removeFeatures',
    value: function removeFeatures() {
      var map = this.props.map;


      if (map) {
        this.features.forEach(function (feature) {
          map.data.remove(feature);
        });
      }
      this.features.clear();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Layer;
}(_react.PureComponent), _class.propTypes = {
  map: _propTypes2.default.object,
  geojson: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Layer;


EVENT_NAMES.forEach(function (name) {
  Layer.propTypes[name] = _propTypes2.default.func;
});