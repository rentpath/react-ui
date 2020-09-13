"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _markerHelpers = require("./utils/markerHelpers");

var EVENTS = {
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onDragEnd: 'dragend',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRecenter: 'recenter'
};
var EVENT_NAMES = Object.keys(EVENTS);

var NOOP = function NOOP() {
  return {};
};

var Marker =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Marker, _PureComponent);

  function Marker() {
    (0, _classCallCheck2.default)(this, Marker);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Marker).apply(this, arguments));
  }

  (0, _createClass2.default)(Marker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupMarker();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.clearMarker();
      this.setupMarker();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearMarker();
    }
  }, {
    key: "setupMarker",
    value: function setupMarker() {
      var map = this.props.map;

      if (map) {
        this.markerInstance = (0, _markerHelpers.setupMarker)(map, this.marker());
      }
    }
  }, {
    key: "marker",
    value: function marker() {
      var _this$props = this.props,
          map = _this$props.map,
          marker = _this$props.marker,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["map", "marker"]);
      return (0, _objectSpread2.default)({}, rest, marker(rest));
    }
  }, {
    key: "clearMarker",
    value: function clearMarker() {
      if (this.props.map && this.markerInstance) {
        (0, _markerHelpers.removeMarker)(this.markerInstance);
        this.markerInstance = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Marker;
}(_react.PureComponent);
/* eslint-disable react/no-unused-prop-types, react/forbid-foreign-prop-types */


(0, _defineProperty2.default)(Marker, "propTypes", {
  map: _propTypes.default.object,
  marker: _propTypes.default.func
});
(0, _defineProperty2.default)(Marker, "defaultProps", {
  marker: NOOP
});
EVENT_NAMES.forEach(function (name) {
  Marker.propTypes[name] = _propTypes.default.func;
});
/* eslint-enable react/no-unused-prop-types, react/forbid-foreign-prop-types */

var _default = Marker;
exports.default = _default;