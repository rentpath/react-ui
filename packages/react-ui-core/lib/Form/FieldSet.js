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

var FieldSet = (_dec = (0, _reactThemed.default)(/^FieldSet/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FieldSet, _PureComponent);

  function FieldSet() {
    (0, _classCallCheck2.default)(this, FieldSet);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FieldSet).apply(this, arguments));
  }

  (0, _createClass2.default)(FieldSet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          legend = _this$props.legend,
          theme = _this$props.theme,
          className = _this$props.className,
          children = _this$props.children,
          variant = _this$props.variant,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["legend", "theme", "className", "children", "variant"]);
      return _react.default.createElement("fieldset", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(className, theme.FieldSet, variant && theme["FieldSet-".concat(variant)])
      }), legend && _react.default.createElement("legend", {
        className: theme.FieldSet_legend
      }, legend), children);
    }
  }]);
  return FieldSet;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  legend: _propTypes.default.string,
  theme: _propTypes.default.object,
  children: _propTypes.default.node,
  variant: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
exports.default = FieldSet;