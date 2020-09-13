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
import classNames from 'classnames';
import themed from '@rentpath/react-themed';
var Textarea = (_dec = themed(/^Textarea/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "variant"]);

      return React.createElement("textarea", _extends({}, props, {
        className: classNames(className, theme.Textarea, variant && theme["Textarea-".concat(variant)])
      }));
    }
  }]);

  return Textarea;
}(Component), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { Textarea as default };