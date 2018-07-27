'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactUiCore = require('@rentpath/react-ui-core');

var _markerIcons = require('./markerIcons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    key: 'render',
    value: function render() {
      var _props = this.props,
          marker = _props.marker,
          rest = (0, _objectWithoutProperties3.default)(_props, ['marker']);

      return _react2.default.createElement(_reactUiCore.Marker, (0, _extends3.default)({}, rest, { marker: this.marker }));
    }
  }, {
    key: 'marker',
    get: function get() {
      var _this2 = this;

      return function (props) {
        return (0, _extends3.default)({
          icon: (0, _markerIcons.redDotIcon)()
        }, _this2.props.marker(props));
      };
    }
  }]);
  return Marker;
}(_react.PureComponent), _class.propTypes = {
  marker: _propTypes2.default.func
}, _class.defaultProps = {
  marker: NOOP
}, _temp);
exports.default = Marker;