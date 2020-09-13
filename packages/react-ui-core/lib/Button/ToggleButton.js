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

var ToggleButton = (_dec = (0, _reactThemed.default)(/^ToggleButton/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ToggleButton, _Component);

  function ToggleButton(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ToggleButton);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ToggleButton).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  (0, _createClass2.default)(ToggleButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(this.props.value === nextProps.value)) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          inactive = _this$props.inactive;
      var value = inactive ? this.state.value : !this.state.value;

      if (!inactive) {
        this.setState({
          value: value
        });
      }

      if (onClick) onClick(value, event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          theme = _this$props2.theme,
          children = _this$props2.children,
          onClick = _this$props2.onClick,
          value = _this$props2.value,
          inactive = _this$props2.inactive,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "theme", "children", "onClick", "value", "inactive"]);
      return _react.default.createElement(_Button.default, (0, _extends2.default)({
        onClick: this.toggle,
        className: (0, _classnames.default)(theme.ToggleButton, className, theme[this.state.value ? 'ToggleButton-on' : 'ToggleButton-off']),
        "data-tid": "toggle-button"
      }, props), children);
    }
  }]);
  return ToggleButton;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  children: _propTypes.default.node,
  value: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  inactive: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {},
  value: false
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "toggle", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "toggle"), _class2.prototype)), _class2)) || _class);
exports.default = ToggleButton;