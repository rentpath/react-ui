"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _Text = require("../Text");

var _Label = _interopRequireDefault(require("./Label"));

var _controls = _interopRequireDefault(require("./controls"));

var _dec, _class, _class2, _temp;

var Field = (_dec = (0, _reactThemed.default)(/^Field/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Field, _Component);

  function Field() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Field);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Field)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      focused: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleInputFocus", function (event) {
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleInputBlur", function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Field, [{
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
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["id", "type", "theme", "label", "input", "error", "hint", "ignoreAction", "onBlur", "onFocus", "disabled", "container", "children", "className", "required"]);
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
      props.input = (0, _react.createElement)(input || _controls.default[type] || _controls.default.text, (0, _objectSpread2.default)({
        id: inputId,
        key: inputId,
        type: type,
        theme: theme,
        disabled: disabled,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus
      }, rest));

      if (label) {
        props.label = _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(label, _Label.default, (0, _objectSpread2.default)({
          key: "label-".concat(inputId),
          htmlFor: inputId,
          className: theme.Label
        }, ignoreAction && {
          'data-tag_action': 'ignore'
        }))));
      }

      if (error) {
        props.error = _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(error, _Text.Text, {
          key: "error-".concat(inputId),
          className: theme.Field_error
        })));
      } else if (hint) {
        props.hint = _react.createElement.apply(void 0, (0, _toConsumableArray2.default)((0, _reactUiUtils.parseArgs)(hint, _Text.Text, {
          key: "hint-".concat(inputId),
          className: theme.Field_hint
        })));
      }

      var _parseArgs = (0, _reactUiUtils.parseArgs)(container, null, {
        className: (0, _classnames.default)(className, theme.Field, theme["Field-".concat(type)], theme["Field-".concat(this.props.name)], focused && theme['Field-focused'], invalid && theme['Field-invalid'], disabled && theme['Field-disabled'], required && theme['Field-required'])
      }),
          _parseArgs2 = (0, _slicedToArray2.default)(_parseArgs, 2),
          FieldType = _parseArgs2[0],
          fieldProps = _parseArgs2[1];

      if (FieldType) {
        return _react.default.createElement(FieldType, Object.assign(props, fieldProps));
      }

      return _react.default.createElement("div", fieldProps, Object.values(props));
    }
  }, {
    key: "uniqueId",
    get: function get() {
      var id = this._uniqueId || (this._uniqueId = (0, _reactUiUtils.randomId)(this.props.name));
      return id;
    }
  }]);
  return Field;
}(_react.Component), (0, _defineProperty2.default)(_class2, "propTypes", {
  /**
   * The input id.
   */
  id: _propTypes.default.string,

  /**
   * The type of input to render, e.g. "text" or "select".
   */
  type: _propTypes.default.string,

  /**
   * The input name.
   */
  name: _propTypes.default.string,

  /**
   * The theme to apply.
   */
  theme: _propTypes.default.object,

  /**
   * Additional child nodes to render
   */
  children: _propTypes.default.node,

  /**
   * The input classname.
   */
  className: _propTypes.default.string,

  /**
   * Callback for input blur.
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback for input focus.
   */
  onFocus: _propTypes.default.func,

  /**
   * Invalidates the field if set to true.
   */
  invalid: _propTypes.default.bool,

  /**
   * Disables the field if set to true.
   */
  disabled: _propTypes.default.bool,

  /**
   * Required status.
   */
  required: _propTypes.default.bool,

  /**
   * Configures the wrapping div element.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Adds/configures a label element.
   */
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func]),

  /**
   * Configures the input element.
   */
  input: _propTypes.default.oneOfType([_propTypes.default.func]),

  /**
   * Adds/configures a error element.
   */
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func]),

  /**
   * Adds/configures a hint element.
   */
  hint: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.func]),

  /**
   * Ignore tracking on label element.
   */
  ignoreAction: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
exports.default = Field;