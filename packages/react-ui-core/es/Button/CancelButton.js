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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
import autobind from 'autobind-decorator';
import Button from './Button';
var CancelButton = (_dec = themed(['CancelButton'], {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CancelButton, _PureComponent);

  function CancelButton() {
    _classCallCheck(this, CancelButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(CancelButton).apply(this, arguments));
  }

  _createClass(CancelButton, [{
    key: "handleClick",
    value: function handleClick() {
      var onClick = this.props.onClick;
      if (onClick) onClick(this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          onClick = _this$props.onClick,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "onClick", "children"]);

      if (!onClick) return null;
      return React.createElement(Button, _extends({
        className: classnames(theme.CancelButton, className),
        onClick: this.handleClick,
        "data-tid": "cancel-button"
      }, props), children);
    }
  }]);

  return CancelButton;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  value: PropTypes.any
}), _defineProperty(_class3, "defaultProps", {
  children: 'Cancel',
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleClick", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
export { CancelButton as default };