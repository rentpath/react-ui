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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _formSerialize = _interopRequireDefault(require("form-serialize"));

var _dec, _class, _class2, _temp;

var Form = (_dec = (0, _reactThemed.default)(['Form'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onSubmit", function (event) {
      var _this$props = _this.props,
          onSubmit = _this$props.onSubmit,
          serialize = _this$props.serialize,
          serializeOptions = _this$props.serializeOptions;
      event.preventDefault();

      if (onSubmit) {
        if (serialize) {
          onSubmit(event, (0, _formSerialize.default)(event.target, serializeOptions));
        } else {
          onSubmit(event);
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Form, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          serialize = _this$props2.serialize,
          serializeOptions = _this$props2.serializeOptions,
          className = _this$props2.className,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "serialize", "serializeOptions", "className"]);
      return _react.default.createElement("form", (0, _extends2.default)({
        "data-tid": "form"
      }, props, {
        onSubmit: this.onSubmit,
        className: (0, _classnames.default)(className, theme.Form)
      }));
    }
  }]);
  return Form;
}(_react.Component), (0, _defineProperty2.default)(_class2, "propTypes", {
  /**
   * className to apply
   */
  className: _propTypes.default.string,

  /**
   * The theme to apply.
   */
  theme: _propTypes.default.object,

  /**
   * The form action.
   */
  action: _propTypes.default.string,

  /**
   * The form method.
   */
  method: _propTypes.default.string,

  /**
   * Enables browser validation when false.
   */
  noValidate: _propTypes.default.bool,

  /**
   * Submit callback.
   */
  onSubmit: _propTypes.default.func,

  /**
   * Serializes form data when true.
   */
  serialize: _propTypes.default.bool,

  /**
   * Serialize options when serialize is on
   */
  serializeOptions: _propTypes.default.object
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  action: '#',
  method: 'POST',
  noValidate: true,
  serializeOptions: {
    hash: true
  }
}), _temp)) || _class);
exports.default = Form;