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

var _dec, _class, _class2, _temp;

var Text = (_dec = (0, _reactThemed.default)(/^Text/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Text, _PureComponent);

  function Text() {
    (0, _classCallCheck2.default)(this, Text);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Text).apply(this, arguments));
  }

  (0, _createClass2.default)(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          theme = _this$props.theme,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["tag", "theme", "className"]);
      return _react.default.createElement(Tag, (0, _extends2.default)({
        "data-tid": "text"
      }, props, {
        className: (0, _classnames.default)(className, theme.Text)
      }));
    }
  }]);
  return Text;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  className: _propTypes.default.string,
  tag: _propTypes.default.string,
  theme: _propTypes.default.object
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  tag: 'div',
  theme: {}
}), _temp)) || _class);
exports.default = Text;