import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import format from 'date-fns/format';
import Input from '../Form/Input';
import Calendar from './Calendar';
var VALID_DT_REGEX = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
var DatePicker = (_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));
    _this.picker = React.createRef();
    _this.outsideHandler = null;
    _this.formatRegex = new RegExp(props.dateFormat.replace('/', '\\/').replace(/[mdy]/ig, '\\d'));
    var value = props.value;
    var isValidDate = VALID_DT_REGEX.test(value);
    _this.state = {
      showCalendar: props.showCalendar,
      value: isValidDate ? format(new Date(value), props.dateFormat) : value,
      isValidDate: isValidDate
    };
    return _this;
  }

  _createClass(DatePicker, [{
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
          value: selectedDate ? format(selectedDate, dateFormat) : state.value
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
        var isDisabled = isBefore(date, new Date(minDate)) || isAfter(date, new Date(maxDate));

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
          rest = _objectWithoutProperties(_this$props3, ["prevButtonLabel", "nextButtonLabel", "showCalendar", "minDate", "maxDate", "dateFormat"]);

      var _this$state = this.state,
          value = _this$state.value,
          isValidDate = _this$state.isValidDate,
          showCalendar = _this$state.showCalendar;
      return React.createElement("div", {
        ref: this.picker
      }, React.createElement(Input, _extends({}, rest, {
        onFocus: this.handleCalendarVisibility,
        value: value,
        onChange: this.handleChange,
        onBlur: this.validateTextField
      })), showCalendar && React.createElement(Calendar, {
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
}(PureComponent), _defineProperty(_class2, "propTypes", {
  dateFormat: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  prevButtonLabel: PropTypes.string,
  nextButtonLabel: PropTypes.string,
  onChange: PropTypes.func,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  showCalendar: PropTypes.bool
}), _defineProperty(_class2, "defaultProps", {
  dateFormat: 'MM/dd/yyyy',
  readOnly: false,
  showCalendar: false
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "onOutsideClick", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "onOutsideClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "dateChange", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "dateChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleCalendarVisibility", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleCalendarVisibility"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validateTextField", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "validateTextField"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleChange", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleChange"), _class.prototype)), _class);
export { DatePicker as default };