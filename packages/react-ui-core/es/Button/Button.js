import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
var Button = (_dec = themed(/^Button/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          color = _this$props.color,
          theme = _this$props.theme,
          className = _this$props.className,
          NodeType = _this$props.nodeType,
          componentRef = _this$props.componentRef,
          props = _objectWithoutProperties(_this$props, ["size", "color", "theme", "className", "nodeType", "componentRef"]);

      return React.createElement(NodeType, _extends({
        "data-tid": "button"
      }, props, {
        ref: componentRef,
        className: classnames(className, theme.Button, color && theme["Button-".concat(color)], size && theme["Button-".concat(size)])
      }));
    }
  }]);

  return Button;
}(Component), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.object,
  nodeType: PropTypes.string,
  componentRef: PropTypes.func
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  nodeType: 'button'
}), _temp)) || _class);
export { Button as default };