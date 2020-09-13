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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Text = require("../Text");

var _dec, _class, _class2, _temp;

var Counter = (_dec = (0, _reactThemed.default)(/^(Counter|Label|Text)/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Counter, _PureComponent);

  function Counter(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Counter);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Counter).call(this, props));
    _this.state = {
      count: _this.props.count
    };
    _this.increment = _this.increment.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.decrement = _this.decrement.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(Counter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.count !== nextProps.count) {
        this.setState({
          count: nextProps.count
        });
      }
    }
  }, {
    key: "text",
    value: function text(count) {
      var text = this.props.text;
      if (text) return text(count);
      return count;
    }
  }, {
    key: "handleClick",
    value: function handleClick(count) {
      this.setState({
        count: count
      });
      this.props.onClick(count);
    }
  }, {
    key: "increment",
    value: function increment() {
      var _this$props = this.props,
          max = _this$props.max,
          step = _this$props.step;
      var count = this.state.count + step;
      if (count <= max) this.handleClick(count, 'INC');
    }
  }, {
    key: "decrement",
    value: function decrement() {
      var _this$props2 = this.props,
          min = _this$props2.min,
          step = _this$props2.step;
      var count = this.state.count - step;
      if (count >= min) this.handleClick(count, 'DEC');
    }
  }, {
    key: "render",
    value: function render() {
      var count = this.state.count;
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          label = _this$props3.label,
          className = _this$props3.className,
          decrementOperator = _this$props3.decrementOperator,
          incrementOperator = _this$props3.incrementOperator,
          onClick = _this$props3.onClick,
          text = _this$props3.text,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max,
          props = (0, _objectWithoutProperties2.default)(_this$props3, ["theme", "label", "className", "decrementOperator", "incrementOperator", "onClick", "text", "step", "min", "max"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(theme.Counter, className)
      }, props), label && this.renderLabel, _react.default.createElement("div", {
        className: theme.Counter_Controls
      }, _react.default.createElement("span", {
        role: "presentation",
        onClick: this.decrement,
        className: (0, _classnames.default)(theme.Counter_Button, theme.Counter_Decrement),
        "data-tid": "counter-decrement"
      }, decrementOperator), _react.default.createElement(_Text.Text, {
        "data-tid": "counter-text"
      }, this.text(count)), _react.default.createElement("span", {
        role: "presentation",
        onClick: this.increment,
        className: (0, _classnames.default)(theme.Counter_Button, theme.Counter_Increment),
        "data-tid": "counter-increment"
      }, incrementOperator)));
    }
  }, {
    key: "renderLabel",
    get: function get() {
      var _this$props4 = this.props,
          theme = _this$props4.theme,
          label = _this$props4.label;
      return _react.default.createElement("div", {
        className: theme.Label
      }, label);
    }
  }]);
  return Counter;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func,
  decrementOperator: _propTypes.default.element,
  incrementOperator: _propTypes.default.element,
  text: _propTypes.default.func,
  count: _propTypes.default.number,
  step: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  className: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  onClick: function onClick() {},
  decrementOperator: _react.default.createElement("span", null, "-"),
  incrementOperator: _react.default.createElement("span", null, "+"),
  count: 0,
  step: 1,
  min: 0,
  max: 10
}), _temp)) || _class);
exports.default = Counter;