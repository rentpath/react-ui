"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var OptInNewsLetter =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(OptInNewsLetter, _PureComponent);

  function OptInNewsLetter() {
    (0, _classCallCheck2.default)(this, OptInNewsLetter);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OptInNewsLetter).apply(this, arguments));
  }

  (0, _createClass2.default)(OptInNewsLetter, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Checkbox.default, this.props);
    }
  }]);
  return OptInNewsLetter;
}(_react.PureComponent);

exports.default = OptInNewsLetter;
(0, _defineProperty2.default)(OptInNewsLetter, "propTypes", {
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func])
});
(0, _defineProperty2.default)(OptInNewsLetter, "defaultProps", {
  name: 'opt-in-newsletter',
  label: 'Simplify my search with helpful tips and rental recommendations.'
});