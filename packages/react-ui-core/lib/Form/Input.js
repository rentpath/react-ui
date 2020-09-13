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

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _dec, _class, _class2, _class3, _temp;

var Input = (_dec = (0, _reactThemed.default)(/^Input/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Input, _Component);

  function Input(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Input);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Input).call(this, props));
    _this.state = (0, _defineProperty2.default)({}, props.property, props.defaultValue || props[props.property] || '');
    return _this;
  }

  (0, _createClass2.default)(Input, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var property = this.props.property;

      if (this.value !== nextProps[property]) {
        this.setValue(nextProps[property]);
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState((0, _defineProperty2.default)({}, this.props.property, value));
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          changeEvent = _this$props.changeEvent,
          property = _this$props.property;
      this.setValue(event.target[property]);
      if (this.props[changeEvent]) this.props[changeEvent](event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          block = _this$props2.block,
          invalid = _this$props2.invalid,
          variant = _this$props2.variant,
          className = _this$props2.className,
          changeEvent = _this$props2.changeEvent,
          property = _this$props2.property,
          componentRef = _this$props2.componentRef,
          value = _this$props2.value,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "block", "invalid", "variant", "className", "changeEvent", "property", "componentRef", "value"]);
      var InputComponent = this.props.mask ? _reactInputMask.default : 'input';
      return _react.default.createElement(InputComponent, (0, _extends2.default)({
        className: (0, _classnames.default)(className, theme.Input, theme["Input-".concat(props.type)], block && theme['Input-block'], invalid && theme['Input-invalid'], variant && theme["Input-".concat(variant)]),
        ref: componentRef
      }, props, this.controlledProps));
    }
  }, {
    key: "controlledProps",
    get: function get() {
      var _ref;

      if (this.props.defaultValue) return {};
      return _ref = {}, (0, _defineProperty2.default)(_ref, this.props.changeEvent, this.handleChange), (0, _defineProperty2.default)(_ref, this.props.property, this.value || ''), _ref;
    }
  }, {
    key: "value",
    get: function get() {
      return this.state[this.props.property];
    }
  }]);
  return Input;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  /**
   * The input type, e.g. "text" or "email".
   */
  type: _propTypes.default.string,

  /**
   * The input theme.
   */
  theme: _propTypes.default.object,

  /**
   * Indicates the input should be block styled.
   */
  block: _propTypes.default.bool,

  /**
   * A custom theme variant.
   */
  variant: _propTypes.default.string,

  /**
   * Indicates the input is invalid.
   */
  invalid: _propTypes.default.bool,

  /**
   * The input classname.
   */
  className: _propTypes.default.string,

  /**
   * Controlled input
   */
  changeEvent: _propTypes.default.string,

  /**
   * Value of the input
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Value of the uncontrolled input
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Name of value to use for input field, ex: checked or value
   */
  property: _propTypes.default.string,

  /**
   * Used to determine if InputMask required
   */
  mask: _propTypes.default.string,

  /**
   * Adds ability to pass ref down to the actual DOM node
   */
  componentRef: _propTypes.default.func
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  type: 'text',
  theme: {},
  property: 'value',
  changeEvent: 'onChange'
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleChange", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleChange"), _class2.prototype)), _class2)) || _class);
exports.default = Input;