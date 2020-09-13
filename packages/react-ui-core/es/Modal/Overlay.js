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
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
import autobind from 'autobind-decorator';
var Overlay = (_dec = themed(/^Overlay/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Overlay, _PureComponent);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(Overlay).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      // Verify that the click started on the overlay
      this.clickedOutside = e.target === this.overlay;

      if (this.props.onMouseDown) {
        this.props.onMouseDown(e);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      // Verify that the click ended on the overlay
      if (e.target !== this.overlay) {
        this.clickedOutside = false;
      }

      if (this.props.onMouseUp) {
        this.props.onMouseUp(e);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      // If the click did not start and end on the overlay do not register click
      if (!this.clickedOutside) {
        return;
      }

      this.clickedOutside = null;

      if (this.props.onClick && e.target === this.overlay) {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          rest = _objectWithoutProperties(_this$props, ["className", "theme", "children", "isOpen"]);

      return React.createElement("div", _extends({
        ref: function ref(node) {
          _this.overlay = node;
        },
        role: "presentation"
      }, rest, {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onClick: this.handleClick,
        className: classnames(className, theme.Overlay, theme["Overlay-".concat(isOpen ? 'open' : 'close')])
      }), children);
    }
  }]);

  return Overlay;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  children: PropTypes.node,
  isOpen: PropTypes.bool
}), _defineProperty(_class3, "defaultProps", {
  theme: {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleMouseDown", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleMouseDown"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleMouseUp", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleMouseUp"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleClick", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
export { Overlay as default };