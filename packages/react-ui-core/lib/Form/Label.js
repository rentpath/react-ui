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

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dec, _class, _class2, _temp;

var Label = (_dec = (0, _reactThemed.default)(/^Label/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Label, _Component);

  function Label() {
    (0, _classCallCheck2.default)(this, Label);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
  }

  (0, _createClass2.default)(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          theme = _this$props.theme,
          className = _this$props.className,
          variant = _this$props.variant,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["text", "theme", "className", "variant", "children"]);
      var classnames = (0, _classnames.default)(className, theme.Label, variant && theme["Label-".concat(variant)]);
      return (
        /* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
        _react.default.createElement("label", (0, _extends2.default)({
          "data-tid": "label"
        }, props, {
          className: classnames
        }), text, children)
      );
    }
  }]);
  return Label;
}(_react.Component), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  text: _propTypes.default.string,
  theme: _propTypes.default.object,
  children: _propTypes.default.node,
  variant: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
exports.default = Label;