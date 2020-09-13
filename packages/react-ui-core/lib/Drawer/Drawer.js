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

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _Button = require("../Button");

var _dec, _class, _class2, _class3, _temp;

var Drawer = (_dec = (0, _reactThemed.default)(/^Drawer/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Drawer, _PureComponent);

  function Drawer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Drawer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Drawer).call(this, props));
    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  (0, _createClass2.default)(Drawer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(this.props.visible === nextProps.visible)) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(value) {
      this.setState({
        visible: value
      });
      if (this.props.onClick) this.props.onClick(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          height = _this$props.height,
          className = _this$props.className,
          children = _this$props.children,
          movementDamping = _this$props.movementDamping,
          movementStiffness = _this$props.movementStiffness,
          closeButtonContents = _this$props.closeButtonContents,
          openButtonContents = _this$props.openButtonContents,
          visibleProp = _this$props.visible,
          onClick = _this$props.onClick,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "height", "className", "children", "movementDamping", "movementStiffness", "closeButtonContents", "openButtonContents", "visible", "onClick"]);
      var visible = this.state.visible;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(theme.Drawer, theme[visible ? 'Drawer-on' : 'Drawer-off'], className),
        style: visible ? {} : {
          transform: "translateY(".concat(height, "px)")
        },
        "data-tid": "drawer"
      }, _react.default.createElement(_Button.ToggleButton, (0, _extends2.default)({
        className: (0, _classnames.default)(theme[visible ? 'Drawer-Button-on' : 'Drawer-Button-off']),
        theme: theme,
        onClick: this.handleToggle,
        value: visible
      }, props), visible ? closeButtonContents : openButtonContents), _react.default.createElement("div", {
        className: theme.Drawer_Content,
        "data-tid": "drawer-content"
      }, children));
    }
  }]);
  return Drawer;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  onClick: _propTypes.default.func,
  height: _propTypes.default.number,
  children: _propTypes.default.node,
  openButtonContents: _propTypes.default.node,
  closeButtonContents: _propTypes.default.node,
  movementDamping: _propTypes.default.number,
  movementStiffness: _propTypes.default.number,
  visible: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {},
  height: 205,
  movementDamping: null,
  movementStiffness: null,
  visible: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleToggle", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleToggle"), _class2.prototype)), _class2)) || _class);
exports.default = Drawer;