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

var _reactInputRange = _interopRequireDefault(require("react-input-range"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _dec, _class, _class2, _temp;

var RangeSlider = (_dec = (0, _reactThemed.default)('*', {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(RangeSlider, _PureComponent);

  function RangeSlider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RangeSlider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RangeSlider).call(this, props));
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.state = {
      value: props.value
    };

    _this.setSliderTheme(props.theme);

    return _this;
  }

  (0, _createClass2.default)(RangeSlider, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual.default)(this.props.value, nextProps.value)) {
        this.setState({
          value: nextProps.value
        });
      }

      if (this.props.theme !== nextProps.theme) {
        this.setSliderTheme(nextProps.theme);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      if (this.props.onChange) this.props.onChange(value);
      this.setState({
        value: value
      });
    }
  }, {
    key: "setSliderTheme",
    value: function setSliderTheme(theme) {
      // NOTE: this ensures react-input-range plays nicely with theme object
      this.sliderTheme = (0, _omit.default)(theme, '_getCss', '_insertCss', '_getContent');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          onChange = _this$props.onChange,
          formatHeader = _this$props.formatHeader,
          variant = _this$props.variant,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "onChange", "formatHeader", "variant"]);
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(theme.RangeSlider, className, variant && theme["RangeSlider-".concat(variant)])
      }, formatHeader && formatHeader(this.state.value), _react.default.createElement(_reactInputRange.default, (0, _extends2.default)({}, props, {
        onChange: this.onChange,
        value: this.state.value,
        classNames: this.sliderTheme
      })));
    }
  }]);
  return RangeSlider;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  theme: _propTypes.default.object,
  className: _propTypes.default.string,
  onChange: _propTypes.default.func,
  formatHeader: _propTypes.default.func,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.object]),
  variant: _propTypes.default.string
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  theme: {},
  value: 0
}), _temp)) || _class);
exports.default = RangeSlider;