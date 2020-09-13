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

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _Form = require("../Form");

var _FilterCard = _interopRequireDefault(require("./FilterCard"));

var _dec, _class, _class2, _class3, _temp;

var RadioGroupFilterCard = (_dec = (0, _reactThemed.default)(/^RadioGroupFilterCard/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RadioGroupFilterCard, _Component);

  function RadioGroupFilterCard(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RadioGroupFilterCard);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioGroupFilterCard).call(this, props));
    _this.state = {
      value: _this.currentlyCheckedValue()
    };
    return _this;
  }

  (0, _createClass2.default)(RadioGroupFilterCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _isEqual.default)(this.props.fields, nextProps.fields)) {
        this.setState({
          value: this.currentlyCheckedValue(nextProps.fields || [])
        });
      }
    }
  }, {
    key: "currentlyCheckedValue",
    value: function currentlyCheckedValue() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fields;
      return (fields.find(function (f) {
        return f.checked;
      }) || {}).value;
    }
  }, {
    key: "handleRadioGroupSelection",
    value: function handleRadioGroupSelection(event) {
      var onChange = this.props.onChange;
      var value = event.target.value;
      this.setState({
        value: value
      });
      if (onChange) onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          fields = _this$props.fields,
          onChange = _this$props.onChange,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "theme", "fields", "onChange"]);
      return _react.default.createElement(_FilterCard.default, (0, _extends2.default)({
        className: (0, _classnames.default)(theme.RadioGroupFilterCard, className, !this.state.value && theme['RadioGroupFilterCard-noValue']),
        "data-tid": "radio-group-filter-card",
        value: this.state.value
      }, props), _react.default.createElement(_Form.RadioGroup, {
        name: "radio-group-filter-card-radio-group",
        hideInputElement: true,
        fields: fields,
        onChange: this.handleRadioGroupSelection
      }));
    }
  }, {
    key: "fields",
    get: function get() {
      return this.props.fields || [];
    }
  }]);
  return RadioGroupFilterCard;
}(_react.Component), (0, _defineProperty2.default)(_class3, "propTypes", {
  className: _propTypes.default.string,
  theme: _propTypes.default.object,
  fields: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func, _propTypes.default.object]),
    value: _propTypes.default.string
  })),
  onChange: _propTypes.default.func
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleRadioGroupSelection", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleRadioGroupSelection"), _class2.prototype)), _class2)) || _class);
exports.default = RadioGroupFilterCard;