"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dec, _class, _class2, _temp;

var CloseButton = (_dec = (0, _reactThemed.default)(/^CloseButton/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(CloseButton, _PureComponent);

  function CloseButton() {
    (0, _classCallCheck2.default)(this, CloseButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CloseButton).apply(this, arguments));
  }

  (0, _createClass2.default)(CloseButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "theme", "children"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(className, theme.CloseButton),
        "data-tid": "close-modal"
      }, props), children);
    }
  }]);
  return CloseButton;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  children: _propTypes.default.any
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  children: 'X'
}), _temp)) || _class);
exports.default = CloseButton;