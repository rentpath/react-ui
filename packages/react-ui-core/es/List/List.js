import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/typeof";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import cn from 'classnames';
import { randomId, parseArgs } from '@rentpath/react-ui-utils';
import themed from '@rentpath/react-themed';
import DefaultListItem from './ListItem';
var List = (_dec = themed('*', {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));

    _this.generateRandomId();

    return _this;
  }

  _createClass(List, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props.items, nextProps.items)) {
        this.generateRandomId();
      }
    }
  }, {
    key: "generateRandomId",
    value: function generateRandomId() {
      this.id = randomId('listItem');
    }
  }, {
    key: "itemId",
    value: function itemId(index) {
      return "".concat(this.id, "-").concat(index);
    }
  }, {
    key: "itemComponentAndProps",
    value: function itemComponentAndProps(listItem) {
      return parseArgs(listItem, DefaultListItem);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      if (item && _typeof(item) === 'object' && !React.isValidElement(item)) {
        var label = item.label,
            props = _objectWithoutProperties(item, ["label"]);

        return [label, props];
      }

      if (typeof item === 'function') return [item()];
      return [item];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          NodeType = _this$props.nodeType,
          className = _this$props.className,
          items = _this$props.items,
          listItem = _this$props.listItem,
          orientation = _this$props.orientation,
          highlightIndex = _this$props.highlightIndex,
          selectedIndex = _this$props.selectedIndex,
          props = _objectWithoutProperties(_this$props, ["theme", "nodeType", "className", "items", "listItem", "orientation", "highlightIndex", "selectedIndex"]);

      var _this$itemComponentAn = this.itemComponentAndProps(listItem),
          _this$itemComponentAn2 = _slicedToArray(_this$itemComponentAn, 2),
          Item = _this$itemComponentAn2[0],
          baseProps = _this$itemComponentAn2[1];

      return React.createElement(NodeType, {
        className: cn(theme.List, orientation && theme["List-".concat(orientation)], className)
      }, items.map(function (item, i) {
        var _this2$renderItem = _this2.renderItem(item),
            _this2$renderItem2 = _slicedToArray(_this2$renderItem, 2),
            children = _this2$renderItem2[0],
            itemProps = _this2$renderItem2[1];

        return React.createElement(Item, _extends({}, baseProps, {
          "data-tid": "list-item-".concat(i)
        }, props, itemProps, {
          highlight: highlightIndex === i,
          selected: selectedIndex === i,
          key: _this2.itemId(i),
          index: i
        }), children);
      }));
    }
  }]);

  return List;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  className: PropTypes.string,
  nodeType: PropTypes.string,
  listItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.shape({
    label: PropTypes.node.isRequired
  })])),
  orientation: PropTypes.string,
  highlightIndex: PropTypes.number,
  selectedIndex: PropTypes.number
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  nodeType: 'ul',
  items: [],
  orientation: 'vertical'
}), _temp)) || _class);
export { List as default };