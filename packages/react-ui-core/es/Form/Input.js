import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
import InputMask from 'react-input-mask';
import autobind from 'autobind-decorator';
var Input = (_dec = themed(/^Input/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this.state = _defineProperty({}, props.property, props.defaultValue || props[props.property] || '');
    return _this;
  }

  _createClass(Input, [{
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
      this.setState(_defineProperty({}, this.props.property, value));
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
          props = _objectWithoutProperties(_this$props2, ["theme", "block", "invalid", "variant", "className", "changeEvent", "property", "componentRef", "value"]);

      var InputComponent = this.props.mask ? InputMask : 'input';
      return React.createElement(InputComponent, _extends({
        className: classnames(className, theme.Input, theme["Input-".concat(props.type)], block && theme['Input-block'], invalid && theme['Input-invalid'], variant && theme["Input-".concat(variant)]),
        ref: componentRef
      }, props, this.controlledProps));
    }
  }, {
    key: "controlledProps",
    get: function get() {
      var _ref;

      if (this.props.defaultValue) return {};
      return _ref = {}, _defineProperty(_ref, this.props.changeEvent, this.handleChange), _defineProperty(_ref, this.props.property, this.value || ''), _ref;
    }
  }, {
    key: "value",
    get: function get() {
      return this.state[this.props.property];
    }
  }]);

  return Input;
}(Component), _defineProperty(_class3, "propTypes", {
  /**
   * The input type, e.g. "text" or "email".
   */
  type: PropTypes.string,

  /**
   * The input theme.
   */
  theme: PropTypes.object,

  /**
   * Indicates the input should be block styled.
   */
  block: PropTypes.bool,

  /**
   * A custom theme variant.
   */
  variant: PropTypes.string,

  /**
   * Indicates the input is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * The input classname.
   */
  className: PropTypes.string,

  /**
   * Controlled input
   */
  changeEvent: PropTypes.string,

  /**
   * Value of the input
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Value of the uncontrolled input
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Name of value to use for input field, ex: checked or value
   */
  property: PropTypes.string,

  /**
   * Used to determine if InputMask required
   */
  mask: PropTypes.string,

  /**
   * Adds ability to pass ref down to the actual DOM node
   */
  componentRef: PropTypes.func
}), _defineProperty(_class3, "defaultProps", {
  type: 'text',
  theme: {},
  property: 'value',
  changeEvent: 'onChange'
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleChange", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleChange"), _class2.prototype)), _class2)) || _class);
export { Input as default };