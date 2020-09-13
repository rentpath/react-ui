import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Menu from './Menu';
var MenuWrapper = (_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuWrapper, _PureComponent);

  function MenuWrapper() {
    _classCallCheck(this, MenuWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuWrapper).apply(this, arguments));
  }

  _createClass(MenuWrapper, [{
    key: "handleSelection",
    value: function handleSelection(item, index) {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          onItemSelect = _this$props.onItemSelect;
      if (onItemSelect) onItemSelect(item, index);
      if (onSelect) onSelect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onItemSelect = _this$props2.onItemSelect,
          onSelect = _this$props2.onSelect,
          props = _objectWithoutProperties(_this$props2, ["onItemSelect", "onSelect"]);

      return React.createElement(Menu, _extends({
        onItemSelect: this.handleSelection
      }, props));
    }
  }]);

  return MenuWrapper;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  onSelect: PropTypes.func,
  onItemSelect: PropTypes.func
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "handleSelection", [autobind], Object.getOwnPropertyDescriptor(_class.prototype, "handleSelection"), _class.prototype)), _class);
export { MenuWrapper as default };