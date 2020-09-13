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
import themed from '@rentpath/react-themed';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autobind from 'autobind-decorator';
import { ToggleButton } from '../Button';
var Drawer = (_dec = themed(/^Drawer/, {
  pure: true
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Drawer, _PureComponent);

  function Drawer(props) {
    var _this;

    _classCallCheck(this, Drawer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Drawer).call(this, props));
    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  _createClass(Drawer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(this.props.visible === nextProps.visible)) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(value) {
      this.setState({
        visible: value
      });
      if (this.props.onClick) this.props.onClick(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          height = _this$props.height,
          className = _this$props.className,
          children = _this$props.children,
          movementDamping = _this$props.movementDamping,
          movementStiffness = _this$props.movementStiffness,
          closeButtonContents = _this$props.closeButtonContents,
          openButtonContents = _this$props.openButtonContents,
          visibleProp = _this$props.visible,
          onClick = _this$props.onClick,
          props = _objectWithoutProperties(_this$props, ["theme", "height", "className", "children", "movementDamping", "movementStiffness", "closeButtonContents", "openButtonContents", "visible", "onClick"]);

      var visible = this.state.visible;
      return React.createElement("div", {
        className: classnames(theme.Drawer, theme[visible ? 'Drawer-on' : 'Drawer-off'], className),
        style: visible ? {} : {
          transform: "translateY(".concat(height, "px)")
        },
        "data-tid": "drawer"
      }, React.createElement(ToggleButton, _extends({
        className: classnames(theme[visible ? 'Drawer-Button-on' : 'Drawer-Button-off']),
        theme: theme,
        onClick: this.handleToggle,
        value: visible
      }, props), visible ? closeButtonContents : openButtonContents), React.createElement("div", {
        className: theme.Drawer_Content,
        "data-tid": "drawer-content"
      }, children));
    }
  }]);

  return Drawer;
}(PureComponent), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  onClick: PropTypes.func,
  height: PropTypes.number,
  children: PropTypes.node,
  openButtonContents: PropTypes.node,
  closeButtonContents: PropTypes.node,
  movementDamping: PropTypes.number,
  movementStiffness: PropTypes.number,
  visible: PropTypes.bool
}), _defineProperty(_class3, "defaultProps", {
  theme: {},
  height: 205,
  movementDamping: null,
  movementStiffness: null,
  visible: true
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "handleToggle", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleToggle"), _class2.prototype)), _class2)) || _class);
export { Drawer as default };