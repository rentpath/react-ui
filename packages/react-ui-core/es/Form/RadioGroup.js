import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
import { parseArgs, randomId } from '@rentpath/react-ui-utils';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import isEqual from 'lodash/isEqual';
import RadioButton from './RadioButton';
import Label from './Label';
import { Text } from '../Text';
var RadioGroup = (_dec = themed(/^(RadioGroup|Field|Label)/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RadioGroup, _PureComponent);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).call(this, props));
    _this.state = {
      value: _this.currentlyCheckedValue(props.defaultValue || props.value)
    };

    _this.generateRandomId();

    return _this;
  }

  _createClass(RadioGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props.fields, nextProps.fields)) {
        this.generateRandomId();
      }

      if (!isEqual(this.state.value, nextProps.value) && this.props.value !== nextProps.value || !isEqual(nextProps.fields, this.props.fields)) {
        this.setState({
          value: this.currentlyCheckedValue(nextProps.value, nextProps.fields)
        });
      }
    }
  }, {
    key: "generateRandomId",
    value: function generateRandomId() {
      this.id = randomId('radiogroup');
    }
  }, {
    key: "currentlyCheckedValue",
    value: function currentlyCheckedValue(value) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.fields;
      return value || ((fields || []).find(function (f) {
        return f.checked;
      }) || {}).value;
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(event) {
      this.setState({
        value: event.target.value
      });

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var _this$props = this.props,
          allowUnselect = _this$props.allowUnselect,
          onUnselect = _this$props.onUnselect; // Check if value was already selected, should we unselect it?

      if (allowUnselect && this.state.value === event.target.value) {
        this.setState({
          value: null
        });
        if (onUnselect) onUnselect(event);
      }
    }
  }, {
    key: "renderRadioButton",
    value: function renderRadioButton(index, fieldProps) {
      var props = pick(this.props, ['name', 'hideInputElement', 'orientation']);
      return React.createElement(RadioButton, _extends({
        "data-tid": "radiogroup-radiobutton",
        key: "".concat(this.id, "-").concat(index),
        checked: this.state.value === fieldProps.value,
        onChange: this.handleValueChange,
        onClick: this.handleClick
      }, omit(fieldProps, 'checked'), props));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          theme = _this$props2.theme,
          name = _this$props2.name,
          label = _this$props2.label,
          error = _this$props2.error,
          hint = _this$props2.hint,
          disabled = _this$props2.disabled,
          required = _this$props2.required,
          fields = _this$props2.fields,
          hideInputElement = _this$props2.hideInputElement,
          onChange = _this$props2.onChange,
          allowUnselect = _this$props2.allowUnselect,
          onUnselect = _this$props2.onUnselect,
          variant = _this$props2.variant,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["className", "theme", "name", "label", "error", "hint", "disabled", "required", "fields", "hideInputElement", "onChange", "allowUnselect", "onUnselect", "variant", "children"]);

      var id = rest.id || this.uniqueId;
      var invalid = rest.invalid || !!error;
      var props = {
        label: null,
        error: null,
        hint: null
      };
      if (!this.fields.length) return null;

      if (label) {
        props.label = createElement.apply(void 0, _toConsumableArray(parseArgs(label, Label, {
          key: "label-".concat(id),
          className: theme.Label
        })));
      }

      if (error) {
        props.error = createElement.apply(void 0, _toConsumableArray(parseArgs(error, Text, {
          key: "error-".concat(id),
          className: theme.Field_error
        })));
      } else if (hint) {
        props.hint = createElement.apply(void 0, _toConsumableArray(parseArgs(hint, Text, {
          key: "hint-".concat(id),
          className: theme.Field_hint
        })));
      }

      return React.createElement("div", _extends({
        className: classnames(className, theme.RadioGroup, theme["Field-".concat(this.props.name)], invalid && theme['Field-invalid'], disabled && theme['Field-disabled'], required && theme['Field-required']),
        role: "group"
      }, rest), this.fields.map(function (field, index) {
        return _this2.renderRadioButton(index, field);
      }), Object.values(props));
    }
  }, {
    key: "uniqueId",
    get: function get() {
      var id = this._uniqueId || (this._uniqueId = randomId(this.props.name));
      return id;
    }
  }, {
    key: "fields",
    get: function get() {
      return this.props.fields || [];
    }
  }]);

  return RadioGroup;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  orientation: PropTypes.string,
  hideInputElement: PropTypes.bool,
  theme: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
    checked: PropTypes.bool,
    value: PropTypes.string
  })),
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  allowUnselect: PropTypes.bool,
  onChange: PropTypes.func,
  onUnselect: PropTypes.func,
  variant: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node
}), _defineProperty(_class3, "defaultProps", {
  theme: {},
  fields: [],
  allowUnselect: false
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleValueChange", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleValueChange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleClick", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
export { RadioGroup as default };