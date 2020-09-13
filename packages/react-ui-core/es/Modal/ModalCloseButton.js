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
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
var CloseButton = (_dec = themed(/^CloseButton/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CloseButton, _PureComponent);

  function CloseButton() {
    _classCallCheck(this, CloseButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloseButton).apply(this, arguments));
  }

  _createClass(CloseButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["className", "theme", "children"]);

      return React.createElement("div", _extends({
        className: classnames(className, theme.CloseButton),
        "data-tid": "close-modal"
      }, props), children);
    }
  }]);

  return CloseButton;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  children: 'X'
}), _temp)) || _class);
export { CloseButton as default };