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

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _reactUiCore = require('@rentpath/react-ui-core');

var _markerIcons = require('./markerIcons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOOP = function NOOP() {
  return {};
};

var Markers = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Markers, _PureComponent);

  function Markers() {
    (0, _classCallCheck3.default)(this, Markers);
    return (0, _possibleConstructorReturn3.default)(this, (Markers.__proto__ || (0, _getPrototypeOf2.default)(Markers)).apply(this, arguments));
  }

  (0, _createClass3.default)(Markers, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          marker = _props.marker,
          rest = (0, _objectWithoutProperties3.default)(_props, ['marker']);


      return _react2.default.createElement(_reactUiCore.Markers, (0, _extends3.default)({
        marker: this.marker
      }, rest));
    }
  }, {
    key: 'marker',
    get: function get() {
      var _this2 = this;

      var _props2 = this.props,
          markerIconHover = _props2.markerIconHover,
          _onMouseOver = _props2.onMouseOver,
          _onMouseOut = _props2.onMouseOut,
          markerIcon = _props2.markerIcon,
          markerInactiveIcon = _props2.markerInactiveIcon;


      return function (feature) {
        var isActive = (0, _get3.default)(feature, 'properties.isActive', true);
        var icon = isActive ? markerIcon : markerInactiveIcon;

        return (0, _extends3.default)({
          icon: icon(),
          onMouseOver: function onMouseOver(event, props, marker) {
            if (markerIconHover) marker.setIcon(markerIconHover());
            if (_onMouseOver) _onMouseOver(marker);
          },
          onMouseOut: function onMouseOut(event, props, marker) {
            marker.setIcon(icon());
            if (_onMouseOut) _onMouseOut(marker);
          }
        }, _this2.props.marker(feature), {
          zIndex: isActive ? 2 : 1
        });
      };
    }
  }]);
  return Markers;
}(_react.PureComponent), _class.propTypes = {
  marker: _propTypes2.default.func,
  markerIcon: _propTypes2.default.func,
  markerInactiveIcon: _propTypes2.default.func,
  markerIconHover: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func
}, _class.defaultProps = {
  marker: NOOP,
  markerIcon: _markerIcons.redDotIcon,
  markerInactiveIcon: _markerIcons.greyDotIcon,
  markerIconHover: _markerIcons.blackDotIcon
}, _temp);
exports.default = Markers;