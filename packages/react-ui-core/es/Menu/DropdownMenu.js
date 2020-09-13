import _typeof from "@babel/runtime/helpers/typeof";
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';
import { Dropdown } from '../Dropdown';
import MenuWrapper from './MenuWrapper';
var DropdownMenu = (_dec = themed(/^DropdownMenu/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck(this, DropdownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).call(this, props));
    var selectedIndex = _this.selectedIndexFromValue() || _this.props.selectedIndex || 0;
    _this.state = {
      selectedIndex: selectedIndex
    };
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedIndex !== nextProps.selectedIndex) {
        this.setState({
          selectedIndex: nextProps.selectedIndex
        });
      } else if (this.props.selectedValue !== nextProps.selectedValue) {
        this.setState({
          selectedIndex: this.selectedIndexFromValue(nextProps.selectedValue)
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$props = this.props,
          options = _this$props.options,
          selectedIndex = _this$props.selectedIndex,
          selectedValue = _this$props.selectedValue;
      return !isEqual(options, nextProps.options) || selectedIndex !== nextProps.selectedIndex || selectedValue !== nextProps.selectedValue || this.state.selectedIndex !== nextState.selectedIndex;
    }
  }, {
    key: "selectedIndexFromValue",
    value: function selectedIndexFromValue() {
      var selectedValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.selectedValue;
      var index = this.props.options.findIndex(function (option) {
        return option.value === selectedValue;
      });
      return index === -1 ? 0 : index;
    }
  }, {
    key: "itemSelectionHandler",
    value: function itemSelectionHandler(item, index) {
      var onItemSelect = this.props.onItemSelect;
      if (onItemSelect) onItemSelect(item, index);
      this.setState({
        selectedIndex: index
      });
    }
  }, {
    key: "renderAnchorFieldText",
    value: function renderAnchorFieldText() {
      var createAnchorText = this.props.createAnchorText;
      if (createAnchorText) return createAnchorText(this.selectedItemLabel);
      return this.selectedItemLabel;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          className = _this$props2.className,
          options = _this$props2.options,
          selectedIndex = _this$props2.selectedIndex,
          selectedValue = _this$props2.selectedValue,
          onItemSelect = _this$props2.onItemSelect,
          createAnchorText = _this$props2.createAnchorText,
          props = _objectWithoutProperties(_this$props2, ["theme", "className", "options", "selectedIndex", "selectedValue", "onItemSelect", "createAnchorText"]);

      return React.createElement(Dropdown, _extends({
        className: classnames(className, theme.DropdownMenu),
        anchorField: {
          children: this.renderAnchorFieldText()
        }
      }, props), React.createElement(MenuWrapper, {
        options: options,
        selectedIndex: this.state.selectedIndex,
        onItemSelect: this.itemSelectionHandler
      }));
    }
  }, {
    key: "selectedItem",
    get: function get() {
      return this.props.options[this.state.selectedIndex] || '';
    }
  }, {
    key: "selectedItemLabel",
    get: function get() {
      var item = this.selectedItem;
      return _typeof(item) === 'object' ? item.label : item;
    }
  }]);

  return DropdownMenu;
}(Component), _defineProperty(_class3, "propTypes", {
  theme: PropTypes.object,
  options: PropTypes.array,
  onItemSelect: PropTypes.func,
  className: PropTypes.string,
  selectedIndex: PropTypes.number,
  selectedValue: PropTypes.node,
  createAnchorText: PropTypes.func
}), _defineProperty(_class3, "defaultProps", {
  theme: {},
  options: [],
  selectedIndex: 0,
  selectedValue: null,
  onItemSelect: function onItemSelect() {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "itemSelectionHandler", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "itemSelectionHandler"), _class2.prototype)), _class2)) || _class);
export { DropdownMenu as default };