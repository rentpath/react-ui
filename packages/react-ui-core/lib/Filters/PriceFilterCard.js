"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _reactUiUtils = require("@rentpath/react-ui-utils");

var _Form = require("../Form");

var _FilterCard = _interopRequireDefault(require("./FilterCard"));

var _dec, _class, _class2, _class3, _temp;

var PriceFilterCard = (_dec = (0, _reactThemed.default)(/^PriceFilterCard/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PriceFilterCard, _Component);

  function PriceFilterCard(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PriceFilterCard);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PriceFilterCard).call(this, props));
    _this.state = {
      value: null
    };
    return _this;
  }

  (0, _createClass2.default)(PriceFilterCard, [{
    key: "handlePriceSliderChange",
    value: function handlePriceSliderChange(value) {
      this.setState({
        value: value
      });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: "renderPriceSlider",
    value: function renderPriceSlider() {
      var priceSlider = this.props.priceSlider;

      var _parseArgs = (0, _reactUiUtils.parseArgs)(priceSlider, _Form.RangeSlider),
          _parseArgs2 = (0, _slicedToArray2.default)(_parseArgs, 2),
          Slider = _parseArgs2[0],
          props = _parseArgs2[1];

      return _react.default.createElement(Slider, (0, _extends2.default)({}, props, {
        onChangeComplete: this.handlePriceSliderChange,
        "data-tid": "price-filter-card-slider"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          priceSlider = _this$props.priceSlider,
          onChange = _this$props.onChange,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "priceSlider", "onChange"]);
      return _react.default.createElement(_FilterCard.default, (0, _extends2.default)({
        className: (0, _classnames.default)(theme.PriceFilterCard, className, !this.state.value && theme['PriceFilterCard-noValue']),
        "data-tid": "price-filter-card",
        value: this.state.value
      }, props), this.renderPriceSlider());
    }
  }]);
  return PriceFilterCard;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  priceSlider: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
  onChange: _propTypes.default.func
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handlePriceSliderChange", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePriceSliderChange"), _class2.prototype)), _class2)) || _class);
exports.default = PriceFilterCard;