import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import { Text } from '../Text';
var Counter = (_dec = themed(/^(Counter|Label|Text)/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Counter, _PureComponent);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));
    _this.state = {
      count: _this.props.count
    };
    _this.increment = _this.increment.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.decrement = _this.decrement.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Counter, [{
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
          props = _objectWithoutProperties(_this$props3, ["theme", "label", "className", "decrementOperator", "incrementOperator", "onClick", "text", "step", "min", "max"]);

      return React.createElement("div", _extends({
        className: classnames(theme.Counter, className)
      }, props), label && this.renderLabel, React.createElement("div", {
        className: theme.Counter_Controls
      }, React.createElement("span", {
        role: "presentation",
        onClick: this.decrement,
        className: classnames(theme.Counter_Button, theme.Counter_Decrement),
        "data-tid": "counter-decrement"
      }, decrementOperator), React.createElement(Text, {
        "data-tid": "counter-text"
      }, this.text(count)), React.createElement("span", {
        role: "presentation",
        onClick: this.increment,
        className: classnames(theme.Counter_Button, theme.Counter_Increment),
        "data-tid": "counter-increment"
      }, incrementOperator)));
    }
  }, {
    key: "renderLabel",
    get: function get() {
      var _this$props4 = this.props,
          theme = _this$props4.theme,
          label = _this$props4.label;
      return React.createElement("div", {
        className: theme.Label
      }, label);
    }
  }]);

  return Counter;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  label: PropTypes.string,
  onClick: PropTypes.func,
  decrementOperator: PropTypes.element,
  incrementOperator: PropTypes.element,
  text: PropTypes.func,
  count: PropTypes.number,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  onClick: function onClick() {},
  decrementOperator: React.createElement("span", null, "-"),
  incrementOperator: React.createElement("span", null, "+"),
  count: 0,
  step: 1,
  min: 0,
  max: 10
}), _temp)) || _class);
export { Counter as default };