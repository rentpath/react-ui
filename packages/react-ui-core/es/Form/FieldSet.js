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
var FieldSet = (_dec = themed(/^FieldSet/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FieldSet, _PureComponent);

  function FieldSet() {
    _classCallCheck(this, FieldSet);

    return _possibleConstructorReturn(this, _getPrototypeOf(FieldSet).apply(this, arguments));
  }

  _createClass(FieldSet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          legend = _this$props.legend,
          theme = _this$props.theme,
          className = _this$props.className,
          children = _this$props.children,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, ["legend", "theme", "className", "children", "variant"]);

      return React.createElement("fieldset", _extends({}, props, {
        className: classnames(className, theme.FieldSet, variant && theme["FieldSet-".concat(variant)])
      }), legend && React.createElement("legend", {
        className: theme.FieldSet_legend
      }, legend), children);
    }
  }]);

  return FieldSet;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  legend: PropTypes.string,
  theme: PropTypes.object,
  children: PropTypes.node,
  variant: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { FieldSet as default };