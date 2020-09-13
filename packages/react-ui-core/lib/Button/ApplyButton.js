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

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _Button = _interopRequireDefault(require("./Button"));

var _dec, _class, _class2, _class3, _temp;

var ApplyButton = (_dec = (0, _reactThemed.default)(['ApplyButton'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ApplyButton, _PureComponent);

  function ApplyButton() {
    (0, _classCallCheck2.default)(this, ApplyButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ApplyButton).apply(this, arguments));
  }

  (0, _createClass2.default)(ApplyButton, [{
    key: "handleClick",
    value: function handleClick() {
      var onClick = this.props.onClick;
      if (onClick) onClick(this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          onClick = _this$props.onClick,
          children = _this$props.children,
          value = _this$props.value,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "onClick", "children", "value"]);
      if (!onClick) return null;
      return _react.default.createElement(_Button.default, (0, _extends2.default)({
        className: (0, _classnames.default)(theme.ApplyButton, className),
        onClick: this.handleClick,
        "data-tid": "apply-button"
      }, props), children);
    }
  }]);
  return ApplyButton;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  onClick: _propTypes.default.func,
  theme: _propTypes.default.object,
  value: _propTypes.default.any
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  children: 'Apply',
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleClick", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
exports.default = ApplyButton;