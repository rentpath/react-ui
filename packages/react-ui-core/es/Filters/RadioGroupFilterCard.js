import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
import isEqual from 'lodash/isEqual';
import autobind from 'autobind-decorator';
import { RadioGroup } from '../Form';
import FilterCard from './FilterCard';
var RadioGroupFilterCard = (_dec = themed(/^RadioGroupFilterCard/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(RadioGroupFilterCard, _Component);

  function RadioGroupFilterCard(props) {
    var _this;

    _classCallCheck(this, RadioGroupFilterCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroupFilterCard).call(this, props));
    _this.state = {
      value: _this.currentlyCheckedValue()
    };
    return _this;
  }

  _createClass(RadioGroupFilterCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props.fields, nextProps.fields)) {
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
          props = _objectWithoutProperties(_this$props, ["className", "theme", "fields", "onChange"]);

      return React.createElement(FilterCard, _extends({
        className: classnames(theme.RadioGroupFilterCard, className, !this.state.value && theme['RadioGroupFilterCard-noValue']),
        "data-tid": "radio-group-filter-card",
        value: this.state.value
      }, props), React.createElement(RadioGroup, {
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
}(Component), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
    value: PropTypes.string
  })),
  onChange: PropTypes.func
}), _defineProperty(_class3, "defaultProps", {
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleRadioGroupSelection", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleRadioGroupSelection"), _class2.prototype)), _class2)) || _class);
export { RadioGroupFilterCard as default };