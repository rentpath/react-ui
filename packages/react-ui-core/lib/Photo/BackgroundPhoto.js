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

var _pipe = _interopRequireDefault(require("lodash/fp/pipe"));

var _filter = _interopRequireDefault(require("lodash/fp/filter"));

var _map = _interopRequireDefault(require("lodash/fp/map"));

var _join = _interopRequireDefault(require("lodash/fp/join"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _dec, _class, _class2, _temp;

var backgroundUrl = (0, _pipe.default)(function () {
  for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
    urls[_key] = arguments[_key];
  }

  return urls.concat();
}, _flatten.default, (0, _filter.default)(Boolean), // skip if undefined
(0, _map.default)(function (url) {
  return "url(".concat(url, ")");
}), (0, _join.default)(', '));
var BackgroundPhoto = (_dec = (0, _reactThemed.default)(['BackgroundPhoto'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(BackgroundPhoto, _PureComponent);

  function BackgroundPhoto() {
    (0, _classCallCheck2.default)(this, BackgroundPhoto);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BackgroundPhoto).apply(this, arguments));
  }

  (0, _createClass2.default)(BackgroundPhoto, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          url = _this$props.url,
          fallbackUrl = _this$props.fallbackUrl,
          alt = _this$props.alt,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "url", "fallbackUrl", "alt"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        style: {
          backgroundImage: backgroundUrl(url, fallbackUrl)
        },
        className: (0, _classnames.default)(className, theme.BackgroundPhoto),
        "data-tid": "bg-photo"
      }, rest));
    }
  }]);
  return BackgroundPhoto;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  url: _propTypes.default.string,
  fallbackUrl: _propTypes.default.string,
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  alt: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
exports.default = BackgroundPhoto;