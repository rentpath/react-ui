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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _dec, _class, _class2, _temp;

var Button = (_dec = (0, _reactThemed.default)(/^Button/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
  }

  (0, _createClass2.default)(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          color = _this$props.color,
          theme = _this$props.theme,
          className = _this$props.className,
          NodeType = _this$props.nodeType,
          componentRef = _this$props.componentRef,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["size", "color", "theme", "className", "nodeType", "componentRef"]);
      return _react.default.createElement(NodeType, (0, _extends2.default)({
        "data-tid": "button"
      }, props, {
        ref: componentRef,
        className: (0, _classnames.default)(className, theme.Button, color && theme["Button-".concat(color)], size && theme["Button-".concat(size)])
      }));
    }
  }]);
  return Button;
}(_react.Component), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  size: _propTypes.default.string,
  color: _propTypes.default.string,
  theme: _propTypes.default.object,
  nodeType: _propTypes.default.string,
  componentRef: _propTypes.default.func
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  nodeType: 'button'
}), _temp)) || _class);
exports.default = Button;