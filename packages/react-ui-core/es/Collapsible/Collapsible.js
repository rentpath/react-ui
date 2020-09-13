import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import { Button } from '../Button';
var type = PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node, PropTypes.func, PropTypes.array]);
var Collapsible = (_dec = themed(/^Collapsible/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible(props) {
    var _this;

    _classCallCheck(this, Collapsible);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapsible).call(this, props));
    _this.state = {
      display: _this.props.visible
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Collapsible, [{
    key: "handleClick",
    value: function handleClick() {
      var display = this.state.display;
      this.props.handleClick();
      this.setState({
        display: !display
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          align = _this$props.align,
          className = _this$props.className,
          showableItems = _this$props.showableItems,
          nonshowableItems = _this$props.nonshowableItems,
          hiddenText = _this$props.hiddenText,
          visibleText = _this$props.visibleText;
      var toggle = this.state.display ? 'visible' : 'hidden';
      return React.createElement("div", {
        className: classnames(className, theme.Collapsible)
      }, showableItems, nonshowableItems && [React.createElement("div", {
        key: "collapsible-toggle",
        className: classnames(theme.Collapsible_Items, theme["Collapsible_Items-".concat(toggle)])
      }, nonshowableItems), React.createElement(Button, {
        key: "collapsible-button",
        onClick: this.handleClick,
        className: classnames(theme["Button-".concat(toggle)], align && theme["Button-".concat(align)])
      }, this.state.display ? visibleText : hiddenText)]);
    }
  }]);

  return Collapsible;
}(Component), _defineProperty(_class2, "propTypes", {
  showableItems: type,
  nonshowableItems: type,
  hiddenText: type,
  visibleText: type,
  align: PropTypes.string,
  handleClick: PropTypes.func,
  visible: PropTypes.bool,
  theme: PropTypes.object,
  className: PropTypes.string
}), _defineProperty(_class2, "defaultProps", {
  showableItems: '',
  nonshowableItems: '',
  hiddenText: 'show more',
  visibleText: 'show less',
  align: '',
  handleClick: function handleClick() {},
  visible: false,
  theme: {}
}), _temp)) || _class);
export { Collapsible as default };