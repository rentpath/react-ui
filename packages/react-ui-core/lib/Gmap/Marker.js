'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _markerHelpers = require('./utils/markerHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var EVENT_NAMES = (0, _keys2.default)(EVENTS);
var NOOP = function NOOP() {
  return {};
};

var Marker = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Marker, _PureComponent);

  function Marker() {
    (0, _classCallCheck3.default)(this, Marker);
    return (0, _possibleConstructorReturn3.default)(this, (Marker.__proto__ || (0, _getPrototypeOf2.default)(Marker)).apply(this, arguments));
  }

  (0, _createClass3.default)(Marker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setupMarker();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.clearMarker();
      this.setupMarker();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearMarker();
    }
  }, {
    key: 'setupMarker',
    value: function setupMarker() {
      var map = this.props.map;


      if (map) {
        this.markerInstance = (0, _markerHelpers.setupMarker)(map, this.marker());
      }
    }
  }, {
    key: 'marker',
    value: function marker() {
      var _props = this.props,
          map = _props.map,
          marker = _props.marker,
          rest = (0, _objectWithoutProperties3.default)(_props, ['map', 'marker']);

      return (0, _extends3.default)({}, rest, marker(rest));
    }
  }, {
    key: 'clearMarker',
    value: function clearMarker() {
      if (this.props.map && this.markerInstance) {
        (0, _markerHelpers.removeMarker)(this.markerInstance);
        this.markerInstance = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Marker;
}(_react.PureComponent), _class.propTypes = {
  map: _propTypes2.default.object,
  marker: _propTypes2.default.func
}, _class.defaultProps = {
  marker: NOOP
}, _temp);


EVENT_NAMES.forEach(function (name) {
  Marker.propTypes[name] = _propTypes2.default.func;
});

exports.default = Marker;