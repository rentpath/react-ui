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
import cn from 'classnames';
import autobind from 'autobind-decorator';
import themed from '@rentpath/react-themed';
var ListItem = (_dec = themed(/^ListItem/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ListItem, _PureComponent);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          index = _this$props.index;
      if (onMouseEnter) onMouseEnter(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          className = _this$props2.className,
          children = _this$props2.children,
          onMouseEnter = _this$props2.onMouseEnter,
          index = _this$props2.index,
          highlight = _this$props2.highlight,
          selected = _this$props2.selected,
          NodeType = _this$props2.nodeType,
          props = _objectWithoutProperties(_this$props2, ["theme", "className", "children", "onMouseEnter", "index", "highlight", "selected", "nodeType"]);

      return React.createElement(NodeType, _extends({
        className: cn(theme.ListItem, className, highlight && theme['ListItem-highlight'], selected && theme['ListItem-selected']),
        index: index,
        onMouseEnter: this.handleMouseEnter
      }, props), children);
    }
  }]);

  return ListItem;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  nodeType: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  onMouseEnter: PropTypes.func,
  onClick: PropTypes.func,
  index: PropTypes.number,
  highlight: PropTypes.bool,
  selected: PropTypes.bool
}), _defineProperty(_class3, "defaultProps", {
  theme: {},
  nodeType: 'li'
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleMouseEnter", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleMouseEnter"), _class2.prototype)), _class2)) || _class);
export { ListItem as default };