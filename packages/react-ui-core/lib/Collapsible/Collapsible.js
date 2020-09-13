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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var _dec, _class, _class2, _temp;

var type = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node, _propTypes.default.func, _propTypes.default.array]);

var Collapsible = (_dec = (0, _reactThemed.default)(/^Collapsible/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Collapsible, _Component);

  function Collapsible(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Collapsible);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Collapsible).call(this, props));
    _this.state = {
      display: _this.props.visible
    };
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Collapsible, [{
    key: "handleClick",
    value: function handleClick() {
      var display = this.state.display;
      this.props.handleClick();
      this.setState({
        display: !display
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          align = _this$props.align,
          className = _this$props.className,
          showableItems = _this$props.showableItems,
          nonshowableItems = _this$props.nonshowableItems,
          hiddenText = _this$props.hiddenText,
          visibleText = _this$props.visibleText;
      var toggle = this.state.display ? 'visible' : 'hidden';
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(className, theme.Collapsible)
      }, showableItems, nonshowableItems && [_react.default.createElement("div", {
        key: "collapsible-toggle",
        className: (0, _classnames.default)(theme.Collapsible_Items, theme["Collapsible_Items-".concat(toggle)])
      }, nonshowableItems), _react.default.createElement(_Button.Button, {
        key: "collapsible-button",
        onClick: this.handleClick,
        className: (0, _classnames.default)(theme["Button-".concat(toggle)], align && theme["Button-".concat(align)])
      }, this.state.display ? visibleText : hiddenText)]);
    }
  }]);
  return Collapsible;
}(_react.Component), (0, _defineProperty2.default)(_class2, "propTypes", {
  showableItems: type,
  nonshowableItems: type,
  hiddenText: type,
  visibleText: type,
  align: _propTypes.default.string,
  handleClick: _propTypes.default.func,
  visible: _propTypes.default.bool,
  theme: _propTypes.default.object,
  className: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  showableItems: '',
  nonshowableItems: '',
  hiddenText: 'show more',
  visibleText: 'show less',
  align: '',
  handleClick: function handleClick() {},
  visible: false,
  theme: {}
}), _temp)) || _class);
exports.default = Collapsible;