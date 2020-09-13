import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
import Field from './Field';
var RadioButton = (_dec = themed(/^RadioButton/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RadioButton, _PureComponent);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioButton).apply(this, arguments));
  }

  _createClass(RadioButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          orientation = _this$props.orientation,
          hideInputElement = _this$props.hideInputElement,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "orientation", "hideInputElement"]);

      return React.createElement(Field, _extends({
        className: classnames(className, theme.RadioButton, this.props.checked && theme['RadioButton-checked'], hideInputElement && theme['RadioButton-hidden'], orientation && theme["RadioButton-".concat(orientation)]),
        type: "radio"
      }, props));
    }
  }]);

  return RadioButton;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  orientation: PropTypes.string,
  hideInputElement: PropTypes.bool,
  theme: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { RadioButton as default };