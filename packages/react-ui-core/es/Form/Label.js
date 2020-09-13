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
import themed from '@rentpath/react-themed';
import classNames from 'classnames';
var Label = (_dec = themed(/^Label/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          theme = _this$props.theme,
          className = _this$props.className,
          variant = _this$props.variant,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["text", "theme", "className", "variant", "children"]);

      var classnames = classNames(className, theme.Label, variant && theme["Label-".concat(variant)]);
      return (
        /* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
        React.createElement("label", _extends({
          "data-tid": "label"
        }, props, {
          className: classnames
        }), text, children)
      );
    }
  }]);

  return Label;
}(Component), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.object,
  children: PropTypes.node,
  variant: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { Label as default };