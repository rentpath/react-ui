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
import autobind from 'autobind-decorator';
import Button from './Button';
var ToggleButton = (_dec = themed(/^ToggleButton/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(ToggleButton, _Component);

  function ToggleButton(props) {
    var _this;

    _classCallCheck(this, ToggleButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToggleButton).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(ToggleButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(this.props.value === nextProps.value)) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          inactive = _this$props.inactive;
      var value = inactive ? this.state.value : !this.state.value;

      if (!inactive) {
        this.setState({
          value: value
        });
      }

      if (onClick) onClick(value, event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          theme = _this$props2.theme,
          children = _this$props2.children,
          onClick = _this$props2.onClick,
          value = _this$props2.value,
          inactive = _this$props2.inactive,
          props = _objectWithoutProperties(_this$props2, ["className", "theme", "children", "onClick", "value", "inactive"]);

      return React.createElement(Button, _extends({
        onClick: this.toggle,
        className: classnames(theme.ToggleButton, className, theme[this.state.value ? 'ToggleButton-on' : 'ToggleButton-off']),
        "data-tid": "toggle-button"
      }, props), children);
    }
  }]);

  return ToggleButton;
}(Component), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  children: PropTypes.node,
  value: PropTypes.bool,
  onClick: PropTypes.func,
  inactive: PropTypes.bool
}), _defineProperty(_class3, "defaultProps", {
  theme: {},
  value: false
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "toggle", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "toggle"), _class2.prototype)), _class2)) || _class);
export { ToggleButton as default };