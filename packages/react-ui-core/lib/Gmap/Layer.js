"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mapEventHelpers = require("./utils/mapEventHelpers");

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
var EVENT_NAMES = Object.keys(EVENTS);

var Layer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Layer, _PureComponent);

  function Layer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Layer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layer).call(this, props));
    _this.features = new Set();
    return _this;
  }

  (0, _createClass2.default)(Layer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var map = this.props.map;

      if (map && map.data) {
        (0, _mapEventHelpers.setupEvents)(map.data, EVENTS, this.props);
        this.addFeatures();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.geojson !== this.props.geojson) {
        this.removeFeatures();
        if (this.props.geojson) this.addFeatures();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeFeatures();
    }
  }, {
    key: "addFeatures",
    value: function addFeatures() {
      var _this2 = this;

      var _this$props = this.props,
          map = _this$props.map,
          geojson = _this$props.geojson;

      if (map && geojson) {
        map.data.addGeoJson(geojson).forEach(function (feature) {
          _this2.features.add(feature);
        });
      }
    }
  }, {
    key: "removeFeatures",
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
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Layer;
}(_react.PureComponent);
/* NOTE: linter complains about Layer.propTypes.name never used,
 * but it's dynanic so "name" isn't a prop
 */

/* eslint-disable react/no-unused-prop-types, react/forbid-foreign-prop-types */


exports.default = Layer;
(0, _defineProperty2.default)(Layer, "propTypes", {
  map: _propTypes.default.object,
  geojson: _propTypes.default.object.isRequired
});
EVENT_NAMES.forEach(function (name) {
  Layer.propTypes[name] = _propTypes.default.func;
});
/* eslint-enable react/no-unused-prop-types, react/forbid-foreign-prop-types */