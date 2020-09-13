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
import cn from 'classnames';
import themed from '@rentpath/react-themed';
var Card = (_dec = themed('*', {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Card, _PureComponent);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "children"]);

      return React.createElement("div", _extends({
        className: cn(theme.Card, className),
        "data-tid": "card"
      }, props), React.createElement("div", {
        className: theme.Card_Body,
        "data-tid": "card-body"
      }, children));
    }
  }]);

  return Card;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { Card as default };