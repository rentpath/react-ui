"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _pick = _interopRequireDefault(require("lodash/pick"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _Label = _interopRequireDefault(require("./Label"));

var _Text = require("../Text");

var _dec, _class, _class2, _class3, _temp;

var RadioGroup = (_dec = (0, _reactThemed.default)(/^(RadioGroup|Field|Label)/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(RadioGroup, _PureComponent);

  function RadioGroup(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RadioGroup);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioGroup).call(this, props));
    _this.state = {
      value: _this.currentlyCheckedValue(props.defaultValue || props.value)
    };

    _this.generateRandomId();

    return _this;
  }

  (0, _createClass2.default)(RadioGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual.default)(this.props.fields, nextProps.fields)) {
        this.generateRandomId();
      }

      if (!(0, _isEqual.default)(this.state.value, nextProps.value) && this.props.value !== nextProps.value || !(0, _isEqual.default)(nextProps.fields, this.props.fields)) {
        this.setState({
          value: this.currentlyCheckedValue(nextProps.value, nextProps.fields)
        });
      }
    }
  }, {
    key: "generateRandomId",
    value: function generateRandomId() {
      this.id = (0, _reactUiUtils.randomId)('radiogroup');
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
      var props = (0, _pick.default)(this.props, ['name', 'hideInputElement', 'orientation']);
      return _react.default.createElement(_RadioButton.default, (0, _extends2.default)({
        "data-tid": "radiogroup-radiobutton",
        key: "".concat(this.id, "-").concat(index),
        checked: this.state.value === fieldProps.value,
        onChange: this.handleValueChange,
        onClick: this.handleClick
      }, (0, _omit.default)(fieldProps, 'checked'), props));
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
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "theme", "name", "label", "error", "hint", "disabled", "required", "fields", "hideInputElement", "onChange", "allowUnselect", "onUnselect", "variant", "children"]);
      var id = rest.id || this.uniqueId;
      var invalid = rest.invalid || !!error;
      var props = {
        label: null,
        error: null,
        hint: null
      };
      if (!this.fields.length) return null;

      if (label) {
        props.label = _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(label, _Label.default, {
          key: "label-".concat(id),
          className: theme.Label
        })));
      }

      if (error) {
        props.error = _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(error, _Text.Text, {
          key: "error-".concat(id),
          className: theme.Field_error
        })));
      } else if (hint) {
        props.hint = _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(hint, _Text.Text, {
          key: "hint-".concat(id),
          className: theme.Field_hint
        })));
      }

      return _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(className, theme.RadioGroup, theme["Field-".concat(this.props.name)], invalid && theme['Field-invalid'], disabled && theme['Field-disabled'], required && theme['Field-required']),
        role: "group"
      }, rest), this.fields.map(function (field, index) {
        return _this2.renderRadioButton(index, field);
      }), Object.values(props));
    }
  }, {
    key: "uniqueId",
    get: function get() {
      var id = this._uniqueId || (this._uniqueId = (0, _reactUiUtils.randomId)(this.props.name));
      return id;
    }
  }, {
    key: "fields",
    get: function get() {
      return this.props.fields || [];
    }
  }]);
  return RadioGroup;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  orientation: _propTypes.default.string,
  hideInputElement: _propTypes.default.bool,
  theme: _propTypes.default.object,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func]),
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func]),
  hint: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func]),
  fields: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func]),
    checked: _propTypes.default.bool,
    value: _propTypes.default.string
  })),
  invalid: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  allowUnselect: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onUnselect: _propTypes.default.func,
  variant: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  children: _propTypes.default.node
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {},
  fields: [],
  allowUnselect: false
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleValueChange", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleValueChange"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleClick", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
exports.default = RadioGroup;