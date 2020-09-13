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

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _dec, _class, _class2, _class3, _temp;

var Overlay = (_dec = (0, _reactThemed.default)(/^Overlay/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Overlay, _PureComponent);

  function Overlay() {
    (0, _classCallCheck2.default)(this, Overlay);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Overlay).apply(this, arguments));
  }

  (0, _createClass2.default)(Overlay, [{
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      // Verify that the click started on the overlay
      this.clickedOutside = e.target === this.overlay;

      if (this.props.onMouseDown) {
        this.props.onMouseDown(e);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      // Verify that the click ended on the overlay
      if (e.target !== this.overlay) {
        this.clickedOutside = false;
      }

      if (this.props.onMouseUp) {
        this.props.onMouseUp(e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      // If the click did not start and end on the overlay do not register click
      if (!this.clickedOutside) {
        return;
      }

      this.clickedOutside = null;

      if (this.props.onClick && e.target === this.overlay) {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "theme", "children", "isOpen"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        ref: function ref(node) {
          _this.overlay = node;
        },
        role: "presentation"
      }, rest, {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onClick: this.handleClick,
        className: (0, _classnames.default)(className, theme.Overlay, theme["Overlay-".concat(isOpen ? 'open' : 'close')])
      }), children);
    }
  }]);
  return Overlay;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  onMouseDown: _propTypes.default.func,
  onMouseUp: _propTypes.default.func,
  onClick: _propTypes.default.func,
  theme: _propTypes.default.object,
  children: _propTypes.default.node,
  isOpen: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleMouseDown", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleMouseDown"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleMouseUp", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleMouseUp"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleClick", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
exports.default = Overlay;