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

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _class, _class2, _temp;

var MenuWrapper = (_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(MenuWrapper, _PureComponent);

  function MenuWrapper() {
    (0, _classCallCheck2.default)(this, MenuWrapper);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MenuWrapper).apply(this, arguments));
  }

  (0, _createClass2.default)(MenuWrapper, [{
    key: "handleSelection",
    value: function handleSelection(item, index) {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          onItemSelect = _this$props.onItemSelect;
      if (onItemSelect) onItemSelect(item, index);
      if (onSelect) onSelect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onItemSelect = _this$props2.onItemSelect,
          onSelect = _this$props2.onSelect,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["onItemSelect", "onSelect"]);
      return _react.default.createElement(_Menu.default, (0, _extends2.default)({
        onItemSelect: this.handleSelection
      }, props));
    }
  }]);
  return MenuWrapper;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  onSelect: _propTypes.default.func,
  onItemSelect: _propTypes.default.func
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleSelection", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleSelection"), _class.prototype)), _class);
exports.default = MenuWrapper;