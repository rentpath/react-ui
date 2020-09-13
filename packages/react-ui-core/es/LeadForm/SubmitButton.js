import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

var SubmitButton =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SubmitButton, _PureComponent);

  function SubmitButton() {
    _classCallCheck(this, SubmitButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubmitButton).apply(this, arguments));
  }

  _createClass(SubmitButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(Button, _extends({
        "data-tid": "lead-form-submit"
      }, props), children);
    }
  }]);

  return SubmitButton;
}(PureComponent);

_defineProperty(SubmitButton, "propTypes", {
  type: PropTypes.string,
  children: PropTypes.any
});

_defineProperty(SubmitButton, "defaultProps", {
  type: 'submit',
  children: 'Send'
});

export { SubmitButton as default };