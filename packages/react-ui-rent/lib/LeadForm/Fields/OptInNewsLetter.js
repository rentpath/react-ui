'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var OptInNewsLetter = (_temp = _class = function (_PureComponent) {
  (0, _inherits3.default)(OptInNewsLetter, _PureComponent);

  function OptInNewsLetter() {
    (0, _classCallCheck3.default)(this, OptInNewsLetter);
    return (0, _possibleConstructorReturn3.default)(this, (OptInNewsLetter.__proto__ || (0, _getPrototypeOf2.default)(OptInNewsLetter)).apply(this, arguments));
  }

  (0, _createClass3.default)(OptInNewsLetter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactUiCore.Field, this.props);
    }
  }]);
  return OptInNewsLetter;
}(_react.PureComponent), _class.propTypes = {
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func])
}, _class.defaultProps = {
  name: 'opt_in_newsletter',
  type: 'checkbox',
  label: 'Simplify my search with helpful tips and rental recommendations.'
}, _temp);
exports.default = OptInNewsLetter;