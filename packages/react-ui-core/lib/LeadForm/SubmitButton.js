"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../Button");

var SubmitButton =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SubmitButton, _PureComponent);

  function SubmitButton() {
    (0, _classCallCheck2.default)(this, SubmitButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SubmitButton).apply(this, arguments));
  }

  (0, _createClass2.default)(SubmitButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return _react.default.createElement(_Button.Button, (0, _extends2.default)({
        "data-tid": "lead-form-submit"
      }, props), children);
    }
  }]);
  return SubmitButton;
}(_react.PureComponent);

exports.default = SubmitButton;
(0, _defineProperty2.default)(SubmitButton, "propTypes", {
  type: _propTypes.default.string,
  children: _propTypes.default.any
});
(0, _defineProperty2.default)(SubmitButton, "defaultProps", {
  type: 'submit',
  children: 'Send'
});