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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _Field = _interopRequireDefault(require("./Field"));

var _dec, _class, _class2, _temp;

var RadioButton = (_dec = (0, _reactThemed.default)(/^RadioButton/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(RadioButton, _PureComponent);

  function RadioButton() {
    (0, _classCallCheck2.default)(this, RadioButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioButton).apply(this, arguments));
  }

  (0, _createClass2.default)(RadioButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          orientation = _this$props.orientation,
          hideInputElement = _this$props.hideInputElement,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "orientation", "hideInputElement"]);
      return _react.default.createElement(_Field.default, (0, _extends2.default)({
        className: (0, _classnames.default)(className, theme.RadioButton, this.props.checked && theme['RadioButton-checked'], hideInputElement && theme['RadioButton-hidden'], orientation && theme["RadioButton-".concat(orientation)]),
        type: "radio"
      }, props));
    }
  }]);
  return RadioButton;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  orientation: _propTypes.default.string,
  hideInputElement: _propTypes.default.bool,
  theme: _propTypes.default.object,
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
exports.default = RadioButton;