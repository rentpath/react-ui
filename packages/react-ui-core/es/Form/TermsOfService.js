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
import { Text } from '../Text';
var TermsOfService = (_dec = themed(/^TermsOfService/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TermsOfService, _PureComponent);

  function TermsOfService() {
    _classCallCheck(this, TermsOfService);

    return _possibleConstructorReturn(this, _getPrototypeOf(TermsOfService).apply(this, arguments));
  }

  _createClass(TermsOfService, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["children", "theme", "className"]);

      return React.createElement(Text, _extends({
        className: classnames(className, theme.TermsOfService)
      }, props), children);
    }
  }]);

  return TermsOfService;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  children: null
}), _temp)) || _class);
export { TermsOfService as default };