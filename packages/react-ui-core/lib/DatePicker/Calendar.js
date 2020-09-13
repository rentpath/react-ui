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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactThemed = _interopRequireDefault(require("@rentpath/react-themed"));

var _autobindDecorator = _interopRequireDefault(require("autobind-decorator"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqual = _interopRequireDefault(require("date-fns/isEqual"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _addMonths = _interopRequireDefault(require("date-fns/addMonths"));

var _subMonths = _interopRequireDefault(require("date-fns/subMonths"));

var _isBefore = _interopRequireDefault(require("date-fns/isBefore"));

var _isAfter = _interopRequireDefault(require("date-fns/isAfter"));

var _startOfMonth = _interopRequireDefault(require("date-fns/startOfMonth"));

var _getDay = _interopRequireDefault(require("date-fns/getDay"));

var _subDays = _interopRequireDefault(require("date-fns/subDays"));

var _addDays = _interopRequireDefault(require("date-fns/addDays"));

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

var _getDate = _interopRequireDefault(require("date-fns/getDate"));

var _dec, _class, _class2, _class3, _temp;

var Calendar = (_dec = (0, _reactThemed.default)(/^Calendar/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Calendar, _PureComponent);

  function Calendar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Calendar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Calendar).call(this, props));
    _this.state = {
      date: _this.props.value,
      selectedDate: _this.props.value
    };
    return _this;
  }

  (0, _createClass2.default)(Calendar, [{
    key: "nextMonth",
    value: function nextMonth() {
      var date = this.state.date;
      this.setState({
        date: (0, _addMonths.default)(date, 1)
      });
    }
  }, {
    key: "previousMonth",
    value: function previousMonth() {
      var date = this.state.date;
      this.setState({
        date: (0, _subMonths.default)(date, 1)
      });
    }
  }, {
    key: "handleDateSelected",
    value: function handleDateSelected(evt) {
      var _this$props = this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;
      var selectedDate = new Date(evt.target.dataset.date);
      var notBeforeMin = !(0, _isBefore.default)(selectedDate, minDate);
      var notAfterMax = maxDate ? !(0, _isAfter.default)(selectedDate, maxDate) : true; // If date is within acceptable range, set state. Otherwise, do nothing.

      if (notBeforeMin && notAfterMax) {
        var date = new Date(selectedDate);
        this.setState({
          selectedDate: date
        });
        this.props.dateChange(date);
      }
    }
  }, {
    key: "days",
    value: function days(row) {
      var _this$props2 = this.props,
          dateFormat = _this$props2.dateFormat,
          theme = _this$props2.theme;
      var daysOfMonth = [];
      var monthStart = (0, _startOfMonth.default)(this.state.date);
      var month = (0, _getMonth.default)(this.state.date);
      var startDate = new Date(this.state.selectedDate);
      var dow = (0, _getDay.default)((0, _startOfMonth.default)(this.state.date));
      var firstDate = (0, _subDays.default)(monthStart, dow);
      var indexStart = row * 7;

      for (var i = indexStart; i < indexStart + 7; i += 1) {
        var currentDate = (0, _addDays.default)(firstDate, i);
        var disabled = this.isBeforeMinDate(currentDate) || this.isAfterMaxDate(currentDate);
        var active = (0, _isEqual.default)(currentDate, startDate);
        var currentMonth = month === (0, _getMonth.default)(currentDate);
        daysOfMonth.push(_react.default.createElement("button", {
          className: (0, _classnames.default)(theme.Calendar_Date, !currentMonth && theme['Calendar_Date-notCurrentMonth'], active && theme['Calendar_Date-active'], disabled && theme['Calendar_Date-disabled']),
          "data-date": (0, _format.default)(currentDate, dateFormat),
          disabled: disabled,
          key: currentDate.toString(),
          onClick: this.handleDateSelected,
          type: "button"
        }, (0, _getDate.default)(currentDate)));
      }

      return daysOfMonth;
    }
  }, {
    key: "isBeforeMinDate",
    value: function isBeforeMinDate(date) {
      var minDate = this.props.minDate;
      return minDate ? (0, _isBefore.default)(date, minDate) : false;
    }
  }, {
    key: "isAfterMaxDate",
    value: function isAfterMaxDate(date) {
      var maxDate = this.props.maxDate;
      return maxDate ? (0, _isAfter.default)(date, maxDate) : false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          theme = _this$props3.theme,
          prevButtonLabel = _this$props3.prevButtonLabel,
          nextButtonLabel = _this$props3.nextButtonLabel;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(theme.Calendar, className),
        style: {
          display: 'inline-block'
        },
        "data-tid": "calendar"
      }, _react.default.createElement("div", {
        className: theme.Calendar_Controls
      }, _react.default.createElement("button", {
        type: "button",
        "data-tid": "calendar-previous",
        className: (0, _classnames.default)(theme.Calendar_Navigation, theme['Calendar_Navigation-previous']),
        onClick: this.previousMonth
      }, _react.default.createElement("span", null, prevButtonLabel)), _react.default.createElement("div", {
        "data-tid": "calendar-month",
        className: theme.Calendar_Month
      }, (0, _format.default)(this.state.date, 'MMMM yyyy')), _react.default.createElement("button", {
        type: "button",
        "data-tid": "calendar-next",
        className: (0, _classnames.default)(theme.Calendar_Navigation, theme['Calendar_Navigation-next']),
        onClick: this.nextMonth
      }, _react.default.createElement("span", null, nextButtonLabel))), _react.default.createElement("div", {
        className: theme.Calendar_DaysOfWeek
      }, this.daysOfWeek), _react.default.createElement("div", {
        "data-tid": "calendar-dates",
        className: theme.Calendar_Dates
      }, this.daysOfMonth));
    }
  }, {
    key: "daysOfWeek",
    get: function get() {
      var daysOfWeek = [];
      var monthStart = (0, _startOfMonth.default)(this.state.date);
      var dow = (0, _getDay.default)((0, _startOfMonth.default)(this.state.date));
      var firstDate = (0, _subDays.default)(monthStart, dow);

      for (var i = 0; i <= 6; i += 1) {
        daysOfWeek.push(_react.default.createElement("span", {
          key: "dow-".concat(i)
        }, (0, _format.default)((0, _addDays.default)(firstDate, i), 'EEEEEE')));
      }

      return daysOfWeek;
    }
  }, {
    key: "daysOfMonth",
    get: function get() {
      var days = []; // NOTE: consitently create 5 rows so the calendar pads shorter months

      for (var i = 0; i <= 5; i += 1) {
        days.push(_react.default.createElement("div", {
          key: "date-row-".concat(i)
        }, this.days(i)));
      }

      return days;
    }
  }]);
  return Calendar;
}(_react.PureComponent), (0, _defineProperty2.default)(_class3, "propTypes", {
  value: _propTypes.default.object,
  minDate: _propTypes.default.object,
  maxDate: _propTypes.default.object,
  prevButtonLabel: _propTypes.default.string,
  nextButtonLabel: _propTypes.default.string,
  dateChange: _propTypes.default.func,
  dateFormat: _propTypes.default.string,
  theme: _propTypes.default.object,
  className: _propTypes.default.string
}), (0, _defineProperty2.default)(_class3, "defaultProps", {
  dateFormat: 'MM/dd/yyyy',
  value: new Date(),
  minDate: new Date(),
  prevButtonLabel: String.fromCharCode(8592),
  nextButtonLabel: String.fromCharCode(8594),
  theme: {}
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "nextMonth", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "nextMonth"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "previousMonth", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "previousMonth"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleDateSelected", [_autobindDecorator.default], Object.getOwnPropertyDescriptor(_class2.prototype, "handleDateSelected"), _class2.prototype)), _class2)) || _class);
exports.default = Calendar;