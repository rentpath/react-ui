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
import classNames from 'classnames';
import themed from '@rentpath/react-themed';
import autobind from 'autobind-decorator';
var Select = (_dec = themed(/^Select/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.value !== nextProps.value) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange;
      if (defaultValue) return;
      this.setValue(event.target.value);
      if (onChange) onChange(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          options = _this$props2.options,
          className = _this$props2.className,
          variant = _this$props2.variant,
          value = _this$props2.value,
          props = _objectWithoutProperties(_this$props2, ["theme", "options", "className", "variant", "value"]);

      return React.createElement("select", _extends({}, props, this.controlledProps, {
        className: classNames(className, theme.Select, variant && theme["Select-".concat(variant)])
      }), this.children);
    }
  }, {
    key: "value",
    get: function get() {
      return this.state.value;
    }
  }, {
    key: "children",
    get: function get() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          options = _this$props3.options;
      if (children) return children;
      return options.map(function (opt) {
        return React.createElement("option", {
          key: opt.value,
          value: opt.value
        }, opt.label);
      });
    }
  }, {
    key: "controlledProps",
    get: function get() {
      if (this.props.defaultValue) return {};
      return {
        onChange: this.handleChange,
        value: this.state.value
      };
    }
  }]);

  return Select;
}(Component), _defineProperty(_class3, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  variant: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
}), _defineProperty(_class3, "defaultProps", {
  theme: {},
  options: []
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleChange", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleChange"), _class2.prototype)), _class2)) || _class);
export { Select as default };