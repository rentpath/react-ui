"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _Text = require("../Text");

var _dec, _class, _class2, _temp;

var Header = (_dec = (0, _reactThemed.default)(/^(Modal_Header|Modal_SubHeader)/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck2.default)(this, Header);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
  }

  (0, _createClass2.default)(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          header = _this$props.header;
      return _react.default.createElement("div", null, _react.default.createElement(_Text.Text, {
        className: theme.Modal_Header
      }, header), this.subHeader);
    }
  }, {
    key: "subHeader",
    get: function get() {
      var subHeader = this.props.subHeader;

      if (subHeader) {
        return _react.default.createElement(_Text.Text, {
          className: this.props.theme.Modal_SubHeader
        }, subHeader);
      }

      return null;
    }
  }]);
  return Header;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  header: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.func]),
  subHeader: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.func])
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  header: 'Contact Property'
}), _temp)) || _class);
exports.default = Header;