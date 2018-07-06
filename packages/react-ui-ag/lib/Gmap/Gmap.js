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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gmap = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(Gmap, _PureComponent);

  function Gmap() {
    (0, _classCallCheck3.default)(this, Gmap);
    return (0, _possibleConstructorReturn3.default)(this, (Gmap.__proto__ || (0, _getPrototypeOf2.default)(Gmap)).apply(this, arguments));
  }

  (0, _createClass3.default)(Gmap, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          apiKey = _props.apiKey,
          rest = (0, _objectWithoutProperties3.default)(_props, ['apiKey']);


      return _react2.default.createElement(_reactUiCore.Gmap, (0, _extends3.default)({
        apiKey: apiKey,
        spinner: _react2.default.createElement(_reactUiCore.GmapSpinner, { color: '#ff0000', loading: true, closeDelay: 1000 })
      }, rest));
    }
  }]);
  return Gmap;
}(_react.PureComponent), _class.propTypes = {
  apiKey: _propTypes2.default.string.isRequired
}, _temp);
exports.default = Gmap;