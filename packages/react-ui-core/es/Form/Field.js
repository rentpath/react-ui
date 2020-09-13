import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classNames from 'classnames';
import { parseArgs, randomId } from '@rentpath/react-ui-utils';
import { Text } from '../Text';
import Label from './Label';
import controls from './controls';
var Field = (_dec = themed(/^Field/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Field, _Component);

  function Field() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Field)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputFocus", function (event) {
      if (_this.props.disabled) {
        return;
      }

      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputBlur", function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    });

    return _this;
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          type = _this$props.type,
          theme = _this$props.theme,
          label = _this$props.label,
          input = _this$props.input,
          error = _this$props.error,
          hint = _this$props.hint,
          ignoreAction = _this$props.ignoreAction,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          disabled = _this$props.disabled,
          container = _this$props.container,
          children = _this$props.children,
          className = _this$props.className,
          required = _this$props.required,
          rest = _objectWithoutProperties(_this$props, ["id", "type", "theme", "label", "input", "error", "hint", "ignoreAction", "onBlur", "onFocus", "disabled", "container", "children", "className", "required"]);

      var focused = this.state.focused;
      var inputId = id || this.uniqueId;
      var invalid = rest.invalid || !!error; // define all possible elements,
      // the order is important.

      var props = {
        children: children,
        label: null,
        input: null,
        error: null,
        hint: null
      };
      props.input = createElement(input || controls[type] || controls.text, _objectSpread({
        id: inputId,
        key: inputId,
        type: type,
        theme: theme,
        disabled: disabled,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus
      }, rest));

      if (label) {
        props.label = createElement.apply(void 0, _toConsumableArray(parseArgs(label, Label, _objectSpread({
          key: "label-".concat(inputId),
          htmlFor: inputId,
          className: theme.Label
        }, ignoreAction && {
          'data-tag_action': 'ignore'
        }))));
      }

      if (error) {
        props.error = createElement.apply(void 0, _toConsumableArray(parseArgs(error, Text, {
          key: "error-".concat(inputId),
          className: theme.Field_error
        })));
      } else if (hint) {
        props.hint = createElement.apply(void 0, _toConsumableArray(parseArgs(hint, Text, {
          key: "hint-".concat(inputId),
          className: theme.Field_hint
        })));
      }

      var _parseArgs = parseArgs(container, null, {
        className: classNames(className, theme.Field, theme["Field-".concat(type)], theme["Field-".concat(this.props.name)], focused && theme['Field-focused'], invalid && theme['Field-invalid'], disabled && theme['Field-disabled'], required && theme['Field-required'])
      }),
          _parseArgs2 = _slicedToArray(_parseArgs, 2),
          FieldType = _parseArgs2[0],
          fieldProps = _parseArgs2[1];

      if (FieldType) {
        return React.createElement(FieldType, Object.assign(props, fieldProps));
      }

      return React.createElement("div", fieldProps, Object.values(props));
    }
  }, {
    key: "uniqueId",
    get: function get() {
      var id = this._uniqueId || (this._uniqueId = randomId(this.props.name));
      return id;
    }
  }]);

  return Field;
}(Component), _defineProperty(_class2, "propTypes", {
  /**
   * The input id.
   */
  id: PropTypes.string,

  /**
   * The type of input to render, e.g. "text" or "select".
   */
  type: PropTypes.string,

  /**
   * The input name.
   */
  name: PropTypes.string,

  /**
   * The theme to apply.
   */
  theme: PropTypes.object,

  /**
   * Additional child nodes to render
   */
  children: PropTypes.node,

  /**
   * The input classname.
   */
  className: PropTypes.string,

  /**
   * Callback for input blur.
   */
  onBlur: PropTypes.func,

  /**
   * Callback for input focus.
   */
  onFocus: PropTypes.func,

  /**
   * Invalidates the field if set to true.
   */
  invalid: PropTypes.bool,

  /**
   * Disables the field if set to true.
   */
  disabled: PropTypes.bool,

  /**
   * Required status.
   */
  required: PropTypes.bool,

  /**
   * Configures the wrapping div element.
   */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Adds/configures a label element.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),

  /**
   * Configures the input element.
   */
  input: PropTypes.oneOfType([PropTypes.func]),

  /**
   * Adds/configures a error element.
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),

  /**
   * Adds/configures a hint element.
   */
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),

  /**
   * Ignore tracking on label element.
   */
  ignoreAction: PropTypes.bool
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { Field as default };