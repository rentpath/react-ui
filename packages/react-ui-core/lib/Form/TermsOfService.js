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

var _Text = require("../Text");

var _dec, _class, _class2, _temp;

var TermsOfService = (_dec = (0, _reactThemed.default)(/^TermsOfService/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TermsOfService, _PureComponent);

  function TermsOfService() {
    (0, _classCallCheck2.default)(this, TermsOfService);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TermsOfService).apply(this, arguments));
  }

  (0, _createClass2.default)(TermsOfService, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "theme", "className"]);
      return _react.default.createElement(_Text.Text, (0, _extends2.default)({
        className: (0, _classnames.default)(className, theme.TermsOfService)
      }, props), children);
    }
  }]);
  return TermsOfService;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  children: null
}), _temp)) || _class);
exports.default = TermsOfService;