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

var _isAfter = _interopRequireDefault(require("date-fns/isAfter"));

var _isBefore = _interopRequireDefault(require("date-fns/isBefore"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _Input = _interopRequireDefault(require("../Form/Input"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _class, _class2, _temp;

var VALID_DT_REGEX = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
var DatePicker = (_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DatePicker, _PureComponent);

  function DatePicker(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DatePicker);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DatePicker).call(this, props));
    _this.picker = _react.default.createRef();
    _this.outsideHandler = null;
    _this.formatRegex = new RegExp(props.dateFormat.replace('/', '\\/').replace(/[mdy]/ig, '\\d'));
    var value = props.value;
    var isValidDate = VALID_DT_REGEX.test(value);
    _this.state = {
      showCalendar: props.showCalendar,
      value: isValidDate ? (0, _format.default)(new Date(value), props.dateFormat) : value,
      isValidDate: isValidDate
    };
    return _this;
  }

  (0, _createClass2.default)(DatePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.showCalendar && !this.outsideHandler) {
        document.removeEventListener('click', this.onOutsideClick, false);
        this.outsideHandler = document.addEventListener('click', this.onOutsideClick, false);
      } else if (this.outsideHandler) {
        document.removeEventListener(this.outsideHandler, this.onOutsideClick, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onOutsideClick, false);
    }
  }, {
    key: "onOutsideClick",
    value: function onOutsideClick(event) {
      if (!this.picker.current.contains(event.target) && this.state.showCalendar) {
        this.setState({
          showCalendar: false
        });
      }
    }
  }, {
    key: "dateChange",
    value: function dateChange(selectedDate) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          dateFormat = _this$props.dateFormat;
      if (onChange) onChange(selectedDate);
      this.setState(function (state) {
        return {
          showCalendar: false,
          isValidDate: true,
          value: selectedDate ? (0, _format.default)(selectedDate, dateFormat) : state.value
        };
      });
    }
  }, {
    key: "handleCalendarVisibility",
    value: function handleCalendarVisibility() {
      var showCalendar = this.state.showCalendar;
      this.setState({
        showCalendar: !showCalendar
      });
    }
  }, {
    key: "validateTextField",
    value: function validateTextField(e) {
      var value = e.target.value;
      var _this$props2 = this.props,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate;

      if (VALID_DT_REGEX.test(value) && !this.state.isValidDate) {
        var date = new Date(value);
        var isDisabled = (0, _isBefore.default)(date, new Date(minDate)) || (0, _isAfter.default)(date, new Date(maxDate));

        if (!isDisabled) {
          this.dateChange(date);
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var value = e.target.value;

      if (this.formatRegex.test(value)) {
        this.validateTextField(e);
      } else {
        this.setState({
          showCalendar: false,
          isValidDate: false,
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          prevButtonLabel = _this$props3.prevButtonLabel,
          nextButtonLabel = _this$props3.nextButtonLabel,
          _ = _this$props3.showCalendar,
          minDate = _this$props3.minDate,
          maxDate = _this$props3.maxDate,
          dateFormat = _this$props3.dateFormat,
          rest = (0, _objectWithoutProperties2.default)(_this$props3, ["prevButtonLabel", "nextButtonLabel", "showCalendar", "minDate", "maxDate", "dateFormat"]);
      var _this$state = this.state,
          value = _this$state.value,
          isValidDate = _this$state.isValidDate,
          showCalendar = _this$state.showCalendar;
      return _react.default.createElement("div", {
        ref: this.picker
      }, _react.default.createElement(_Input.default, (0, _extends2.default)({}, rest, {
        onFocus: this.handleCalendarVisibility,
        value: value,
        onChange: this.handleChange,
        onBlur: this.validateTextField
      })), showCalendar && _react.default.createElement(_Calendar.default, {
        value: isValidDate ? new Date(value) : undefined,
        dateChange: this.dateChange,
        minDate: minDate,
        maxDate: maxDate,
        prevButtonLabel: prevButtonLabel,
        nextButtonLabel: nextButtonLabel
      }));
    }
  }]);
  return DatePicker;
}(_react.PureComponent), (0, _defineProperty2.default)(_class2, "propTypes", {
  dateFormat: _propTypes.default.string,
  value: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  prevButtonLabel: _propTypes.default.string,
  nextButtonLabel: _propTypes.default.string,
  onChange: _propTypes.default.func,
  minDate: _propTypes.default.object,
  maxDate: _propTypes.default.object,
  showCalendar: _propTypes.default.bool
}), (0, _defineProperty2.default)(_class2, "defaultProps", {
  dateFormat: 'MM/dd/yyyy',
  readOnly: false,
  showCalendar: false
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "onOutsideClick", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "onOutsideClick"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "dateChange", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "dateChange"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleCalendarVisibility", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleCalendarVisibility"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "validateTextField", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "validateTextField"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "handleChange", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype)), _class);
exports.default = DatePicker;