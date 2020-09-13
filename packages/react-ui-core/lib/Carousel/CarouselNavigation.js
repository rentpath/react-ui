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

var _Button = require("../Button");

var _dec, _class, _class2, _temp;

var CarouselNavigation = (_dec = (0, _reactThemed.default)(/^CarouselNavigation/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(CarouselNavigation, _PureComponent);

  function CarouselNavigation() {
    (0, _classCallCheck2.default)(this, CarouselNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CarouselNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(CarouselNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          theme = _this$props.theme,
          className = _this$props.className,
          children = _this$props.children,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["direction", "theme", "className", "children"]);
      return _react.default.createElement(_Button.Button, (0, _extends2.default)({
        "data-tid": "carousel-navigation-".concat(direction),
        "data-tag_item": this.tagItem,
        className: (0, _classnames.default)(className, theme.CarouselNavigation, theme["CarouselNavigation-".concat(direction)]),
        role: "button",
        tabIndex: 0
      }, rest), children);
    }
  }, {
    key: "tagItem",
    get: function get() {
      var direction = this.props.direction === 'previous' ? 'left' : 'right';
      return "".concat(direction, "_arrow");
    }
  }]);
  return CarouselNavigation;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  direction: _propTypes.default.oneOf(['previous', 'next']),
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  children: _propTypes.default.node
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  direction: 'next',
  theme: {}
}), _temp)) || _class);
exports.default = CarouselNavigation;