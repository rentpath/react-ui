'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiUtils = require('@rentpath/react-ui-utils');

var _Text = require('../Text');

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _controls = require('./controls');

var _controls2 = _interopRequireDefault(_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = (_dec = (0, _reactThemed2.default)(/^Field/, {
  pure: true
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Field, _Component);

  function Field() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Field);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Field.__proto__ || (0, _getPrototypeOf2.default)(Field)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }

      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleInputBlur = function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Field, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          type = _props.type,
          theme = _props.theme,
          label = _props.label,
          input = _props.input,
          error = _props.error,
          hint = _props.hint,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          disabled = _props.disabled,
          container = _props.container,
          children = _props.children,
          className = _props.className,
          rest = (0, _objectWithoutProperties3.default)(_props, ['id', 'type', 'theme', 'label', 'input', 'error', 'hint', 'onBlur', 'onFocus', 'disabled', 'container', 'children', 'className']);
      var focused = this.state.focused;


      var inputId = id || this.uniqueId;
      var invalid = rest.invalid || !!error;

      // define all possible elements,
      // the order is important.
      var props = {
        children: children,
        label: null,
        input: null,
        error: null,
        hint: null
      };

      props.input = (0, _react.createElement)(input || _controls2.default[type] || _controls2.default.text, (0, _extends3.default)({
        id: inputId,
        key: inputId,
        type: type,
        theme: theme,
        disabled: disabled,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus
      }, rest));

      if (label) {
        props.label = _react.createElement.apply(undefined, (0, _toConsumableArray3.default)((0, _reactUiUtils.parseArgs)(label, _Label2.default, {
          key: 'label-' + inputId,
          htmlFor: inputId,
          className: theme.Label
        })));
      }

      if (error) {
        props.error = _react.createElement.apply(undefined, (0, _toConsumableArray3.default)((0, _reactUiUtils.parseArgs)(error, _Text.Text, {
          key: 'error-' + inputId,
          className: theme.Field_error
        })));
      } else if (hint) {
        props.hint = _react.createElement.apply(undefined, (0, _toConsumableArray3.default)((0, _reactUiUtils.parseArgs)(hint, _Text.Text, {
          key: 'hint-' + inputId,
          className: theme.Field_hint
        })));
      }

      var _parseArgs = (0, _reactUiUtils.parseArgs)(container, null, {
        className: (0, _classnames2.default)(className, theme.Field, theme['Field-' + type], focused && theme['Field-focused'], invalid && theme['Field-invalid'], disabled && theme['Field-disabled'])
      }),
          _parseArgs2 = (0, _slicedToArray3.default)(_parseArgs, 2),
          FieldType = _parseArgs2[0],
          fieldProps = _parseArgs2[1];

      if (FieldType) {
        return _react2.default.createElement(FieldType, (0, _assign2.default)(props, fieldProps));
      }

      return _react2.default.createElement(
        'div',
        fieldProps,
        (0, _values2.default)(props)
      );
    }
  }, {
    key: 'uniqueId',
    get: function get() {
      var id = this._uniqueId || (this._uniqueId = (0, _reactUiUtils.randomId)(this.props.name));
      return id;
    }
  }]);
  return Field;
}(_react.Component), _class2.propTypes = {
  /**
   * The input id.
   */
  id: _propTypes2.default.string,

  /**
   * The type of input to render, e.g. "text" or "select".
   */
  type: _propTypes2.default.string,

  /**
   * The input name.
   */
  name: _propTypes2.default.string,

  /**
   * The theme to apply.
   */
  theme: _propTypes2.default.object,

  /**
   * Additional child nodes to render
   */
  children: _propTypes2.default.node,

  /**
   * The input classname.
   */
  className: _propTypes2.default.string,

  /**
   * Callback for input blur.
   */
  onBlur: _propTypes2.default.func,

  /**
   * Callback for input focus.
   */
  onFocus: _propTypes2.default.func,

  /**
   * Invalidates the field if set to true.
   */
  invalid: _propTypes2.default.bool,

  /**
   * Disables the field if set to true.
   */
  disabled: _propTypes2.default.bool,

  /**
   * Configures the wrapping div element.
   */
  container: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),

  /**
   * Adds/configures a label element.
   */
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func]),

  /**
   * Configures the input element.
   */
  input: _propTypes2.default.oneOfType([_propTypes2.default.func]),

  /**
   * Adds/configures a error element.
   */
  error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func]),

  /**
   * Adds/configures a hint element.
   */
  hint: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.func])
}, _class2.defaultProps = {
  theme: {}
}, _temp2)) || _class);
exports.default = Field;