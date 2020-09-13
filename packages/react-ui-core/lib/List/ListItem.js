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

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _dec, _class, _class2, _class3, _temp;

var ListItem = (_dec = (0, _reactThemed.default)(/^ListItem/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ListItem, _PureComponent);

  function ListItem() {
    (0, _classCallCheck2.default)(this, ListItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListItem).apply(this, arguments));
  }

  (0, _createClass2.default)(ListItem, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          index = _this$props.index;
      if (onMouseEnter) onMouseEnter(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          className = _this$props2.className,
          children = _this$props2.children,
          onMouseEnter = _this$props2.onMouseEnter,
          index = _this$props2.index,
          highlight = _this$props2.highlight,
          selected = _this$props2.selected,
          NodeType = _this$props2.nodeType,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["theme", "className", "children", "onMouseEnter", "index", "highlight", "selected", "nodeType"]);
      return _react.default.createElement(NodeType, (0, _extends2.default)({
        className: (0, _classnames.default)(theme.ListItem, className, highlight && theme['ListItem-highlight'], selected && theme['ListItem-selected']),
        index: index,
        onMouseEnter: this.handleMouseEnter
      }, props), children);
    }
  }]);
  return ListItem;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  nodeType: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
  children: _propTypes.default.node,
  onMouseEnter: _propTypes.default.func,
  onClick: _propTypes.default.func,
  index: _propTypes.default.number,
  highlight: _propTypes.default.bool,
  selected: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {},
  nodeType: 'li'
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleMouseEnter", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleMouseEnter"), _class2.prototype)), _class2)) || _class);
exports.default = ListItem;