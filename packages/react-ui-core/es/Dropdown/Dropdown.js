import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _class3, _temp;

import React, { Component, cloneElement, createElement } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { parseArgs } from '@rentpath/react-ui-utils';
import themed from '@rentpath/react-themed';
import classnames from 'classnames';
import DropdownAnchor from './DropdownAnchor';
var Dropdown = (_dec = themed(/^Dropdown/), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible !== nextProps.visible) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility() {
      var _this$props = this.props,
          onVisibilityChange = _this$props.onVisibilityChange,
          toggleOnSelect = _this$props.toggleOnSelect;
      var visible = toggleOnSelect ? !this.state.visible : true;

      if (this.state.visible !== visible) {
        onVisibilityChange(visible);
        this.setState({
          visible: visible
        });
      }
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(event) {
      var eventTarget = event.target;
      var parentTarget = event.target.parentNode;
      var hasParentTarget = this.dropdown.contains(parentTarget);
      var parentIsDropdown = hasParentTarget && parentTarget.dataset.self === 'dropdown';
      var targetIsDropdown = this.dropdown.contains(eventTarget) || parentIsDropdown;
      var shouldFireEvent = this.state.visible && !targetIsDropdown;

      if (shouldFireEvent) {
        this.setState({
          visible: false
        });
        this.props.onVisibilityChange(false);
      }
    }
  }, {
    key: "renderAnchor",
    value: function renderAnchor() {
      return createElement.apply(void 0, _toConsumableArray(parseArgs(this.props.anchorField, DropdownAnchor, {
        'data-tid': 'dropdown-anchor',
        visible: this.state.visible,
        onClick: this.toggleVisibility,
        className: this.props.className
      })));
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var props = {
        onSelect: this.toggleVisibility
      };
      var children = React.Children.toArray(this.props.children);
      return React.Children.map(children, function (child) {
        return typeof child.type === 'function' ? cloneElement(child, props) : child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          theme = _this$props2.theme,
          _ = _this$props2.visible,
          children = _this$props2.children,
          anchorField = _this$props2.anchorField,
          className = _this$props2.className,
          onVisibilityChange = _this$props2.onVisibilityChange,
          toggleOnSelect = _this$props2.toggleOnSelect,
          props = _objectWithoutProperties(_this$props2, ["theme", "visible", "children", "anchorField", "className", "onVisibilityChange", "toggleOnSelect"]);

      var visible = this.state.visible;
      return React.createElement("div", _extends({
        ref: function ref(_ref) {
          _this2.dropdown = _ref;
        },
        className: classnames(theme.Dropdown, className, theme["Dropdown-".concat(visible ? 'expand' : 'collapse')])
      }, props, {
        "data-self": "dropdown"
      }), this.renderAnchor(), visible && React.createElement("div", {
        "data-tid": "dropdown-body",
        className: theme.Dropdown_Body
      }, this.renderChildren()));
    }
  }]);

  return Dropdown;
}(Component), _defineProperty(_class3, "propTypes", {
  className: PropTypes.string,
  visible: PropTypes.bool,
  theme: PropTypes.object,
  children: PropTypes.node,
  onVisibilityChange: PropTypes.func,
  anchorField: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]),
  toggleOnSelect: PropTypes.bool
}), _defineProperty(_class3, "defaultProps", {
  toggleOnSelect: true,
  visible: false,
  theme: {},
  onVisibilityChange: function onVisibilityChange() {}
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "toggleVisibility", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "toggleVisibility"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleDocumentClick", [autobind], Object.getOwnPropertyDescriptor(_class2.prototype, "handleDocumentClick"), _class2.prototype)), _class2)) || _class);
export { Dropdown as default };