import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import isEqual from 'date-fns/isEqual';
import format from 'date-fns/format';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import isBefore from 'date-fns/isBefore';
import isAfter from 'date-fns/isAfter';
import startOfMonth from 'date-fns/startOfMonth';
import getDay from 'date-fns/getDay';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';
var Calendar = (_dec = themed(/^Calendar/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Calendar, _PureComponent);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));
    _this.state = {
      date: _this.props.value,
      selectedDate: _this.props.value
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "nextMonth",
    value: function nextMonth() {
      var date = this.state.date;
      this.setState({
        date: addMonths(date, 1)
      });
    }
  }, {
    key: "previousMonth",
    value: function previousMonth() {
      var date = this.state.date;
      this.setState({
        date: subMonths(date, 1)
      });
    }
  }, {
    key: "handleDateSelected",
    value: function handleDateSelected(evt) {
      var _this$props = this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;
      var selectedDate = new Date(evt.target.dataset.date);
      var notBeforeMin = !isBefore(selectedDate, minDate);
      var notAfterMax = maxDate ? !isAfter(selectedDate, maxDate) : true; // If date is within acceptable range, set state. Otherwise, do nothing.

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
      var monthStart = startOfMonth(this.state.date);
      var month = getMonth(this.state.date);
      var startDate = new Date(this.state.selectedDate);
      var dow = getDay(startOfMonth(this.state.date));
      var firstDate = subDays(monthStart, dow);
      var indexStart = row * 7;

      for (var i = indexStart; i < indexStart + 7; i += 1) {
        var currentDate = addDays(firstDate, i);
        var disabled = this.isBeforeMinDate(currentDate) || this.isAfterMaxDate(currentDate);
        var active = isEqual(currentDate, startDate);
        var currentMonth = month === getMonth(currentDate);
        daysOfMonth.push(React.createElement("button", {
          className: classnames(theme.Calendar_Date, !currentMonth && theme['Calendar_Date-notCurrentMonth'], active && theme['Calendar_Date-active'], disabled && theme['Calendar_Date-disabled']),
          "data-date": format(currentDate, dateFormat),
          disabled: disabled,
          key: currentDate.toString(),
          onClick: this.handleDateSelected,
          type: "button"
        }, getDate(currentDate)));
      }

      return daysOfMonth;
    }
  }, {
    key: "isBeforeMinDate",
    value: function isBeforeMinDate(date) {
      var minDate = this.props.minDate;
      return minDate ? isBefore(date, minDate) : false;
    }
  }, {
    key: "isAfterMaxDate",
    value: function isAfterMaxDate(date) {
      var maxDate = this.props.maxDate;
      return maxDate ? isAfter(date, maxDate) : false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          theme = _this$props3.theme,
          prevButtonLabel = _this$props3.prevButtonLabel,
          nextButtonLabel = _this$props3.nextButtonLabel;
      return React.createElement("div", {
        className: classnames(theme.Calendar, className),
        style: {
          display: 'inline-block'
        },
        "data-tid": "calendar"
      }, React.createElement("div", {
        className: theme.Calendar_Controls
      }, React.createElement("button", {
        type: "button",
        "data-tid": "calendar-previous",
        className: classnames(theme.Calendar_Navigation, theme['Calendar_Navigation-previous']),
        onClick: this.previousMonth
      }, React.createElement("span", null, prevButtonLabel)), React.createElement("div", {
        "data-tid": "calendar-month",
        className: theme.Calendar_Month
      }, format(this.state.date, 'MMMM yyyy')), React.createElement("button", {
        type: "button",
        "data-tid": "calendar-next",
        className: classnames(theme.Calendar_Navigation, theme['Calendar_Navigation-next']),
        onClick: this.nextMonth
      }, React.createElement("span", null, nextButtonLabel))), React.createElement("div", {
        className: theme.Calendar_DaysOfWeek
      }, this.daysOfWeek), React.createElement("div", {
        "data-tid": "calendar-dates",
        className: theme.Calendar_Dates
      }, this.daysOfMonth));
    }
  }, {
    key: "daysOfWeek",
    get: function get() {
      var daysOfWeek = [];
      var monthStart = startOfMonth(this.state.date);
      var dow = getDay(startOfMonth(this.state.date));
      var firstDate = subDays(monthStart, dow);

      for (var i = 0; i <= 6; i += 1) {
        daysOfWeek.push(React.createElement("span", {
          key: "dow-".concat(i)
        }, format(addDays(firstDate, i), 'EEEEEE')));
      }

      return daysOfWeek;
    }
  }, {
    key: "daysOfMonth",
    get: function get() {
      var days = []; // NOTE: consitently create 5 rows so the calendar pads shorter months

      for (var i = 0; i <= 5; i += 1) {
        days.push(React.createElement("div", {
          key: "date-row-".concat(i)
        }, this.days(i)));
      }

      return days;
    }
  }]);

  return Calendar;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  value: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  prevButtonLabel: PropTypes.string,
  nextButtonLabel: PropTypes.string,
  dateChange: PropTypes.func,
  dateFormat: PropTypes.string,
  theme: PropTypes.object,
  className: PropTypes.string
}), _defineProperty(_class3, "defaultProps", {
  dateFormat: 'MM/dd/yyyy',
  value: new Date(),
  minDate: new Date(),
  prevButtonLabel: String.fromCharCode(8592),
  nextButtonLabel: String.fromCharCode(8594),
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "nextMonth", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "nextMonth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "previousMonth", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "previousMonth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleDateSelected", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleDateSelected"), _class2.prototype)), _class2)) || _class);
export { Calendar as default };