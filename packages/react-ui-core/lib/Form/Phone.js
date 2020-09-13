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

var _Field = _interopRequireDefault(require("./Field"));

var Phone =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Phone, _PureComponent);

  function Phone() {
    (0, _classCallCheck2.default)(this, Phone);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Phone).apply(this, arguments));
  }

  (0, _createClass2.default)(Phone, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Field.default, this.props);
    }
  }]);
  return Phone;
}(_react.PureComponent);

exports.default = Phone;
(0, _defineProperty2.default)(Phone, "propTypes", {
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  placeholder: _propTypes.default.string
});
(0, _defineProperty2.default)(Phone, "defaultProps", {
  name: 'phone',
  type: 'tel'
});