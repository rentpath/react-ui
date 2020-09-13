"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var defaultAnimation = function defaultAnimation(i) {
  return "BOUNCELOADER 2.1s ".concat(i === 1 ? '1s' : '0s', " infinite ease-in-out");
};

var Loader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Loader, _Component);

  function Loader() {
    (0, _classCallCheck2.default)(this, Loader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Loader).apply(this, arguments));
  }

  (0, _createClass2.default)(Loader, [{
    key: "style",
    value: function style(scale) {
      var _this$props = this.props,
          size = _this$props.size,
          color = _this$props.color,
          sizeUnit = _this$props.sizeUnit,
          animation = _this$props.animation;
      return {
        position: 'absolute',
        height: "".concat(size).concat(sizeUnit),
        width: "".concat(size).concat(sizeUnit),
        backgroundColor: "".concat(color),
        borderRadius: '100%',
        opacity: 0.6,
        top: 0,
        left: 0,
        animationFillMode: 'both',
        animation: animation(scale)
      };
    }
  }, {
    key: "wrapperStyles",
    value: function wrapperStyles() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          sizeUnit = _this$props2.sizeUnit;
      return {
        position: 'relative',
        width: "".concat(size).concat(sizeUnit),
        height: "".concat(size).concat(sizeUnit)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          loading = _this$props3.loading,
          className = _this$props3.className;
      return loading ? _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("div", {
        style: this.style(0)
      }), _react.default.createElement("div", {
        style: this.style(1)
      }), _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "\n            @keyframes BOUNCELOADER {\n              0% {\n                transform: scale(0);\n                -webkit-transform: scale(0);\n              }\n              50% {\n                transform: scale(1);\n                -webkit-transform: scale(1);\n              }\n              100% {\n                transform: scale(0);\n                -webkit-transform: scale(0);\n              }\n            }\n          "
        }
      })) : null;
    }
  }]);
  return Loader;
}(_react.Component);

(0, _defineProperty2.default)(Loader, "propTypes", {
  loading: _propTypes.default.bool,
  color: _propTypes.default.string,
  size: _propTypes.default.number,
  sizeUnit: _propTypes.default.string,
  className: _propTypes.default.string,
  animation: _propTypes.default.func
});
(0, _defineProperty2.default)(Loader, "defaultProps", {
  loading: true,
  color: '#000000',
  size: 60,
  sizeUnit: 'px',
  className: '',
  animation: defaultAnimation
});
var _default = Loader;
exports.default = _default;