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
var Title = (_dec = themed('*', {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Title, _PureComponent);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, _getPrototypeOf(Title).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          NodeType = _this$props.nodeType,
          className = _this$props.className,
          theme = _this$props.theme,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["nodeType", "className", "theme", "children"]);

      return React.createElement(NodeType, _extends({
        className: classnames(theme.Title, className),
        "data-tid": "title"
      }, props), children);
    }
  }]);

  return Title;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  nodeType: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
  children: PropTypes.node
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  nodeType: 'h2'
}), _temp)) || _class);
export { Title as default };