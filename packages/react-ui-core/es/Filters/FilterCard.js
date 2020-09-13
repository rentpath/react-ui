import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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
import { parseArgs } from '@rentpath/react-ui-utils';
import { Title } from '../Title';
import { Text } from '../Text';
import { Card } from '../Card';
import { CancelButton, ApplyButton } from '../Button';
var buttonType = PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]);
var FilterCard = (_dec = themed(/^FilterCard/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FilterCard, _PureComponent);

  function FilterCard() {
    _classCallCheck(this, FilterCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilterCard).apply(this, arguments));
  }

  _createClass(FilterCard, [{
    key: "renderButton",
    value: function renderButton(button, DefaultButton) {
      var _parseArgs = parseArgs(this.props[button], DefaultButton),
          _parseArgs2 = _slicedToArray(_parseArgs, 2),
          FilterButton = _parseArgs2[0],
          props = _parseArgs2[1];

      return React.createElement(FilterButton, _extends({}, props, {
        value: this.props.value
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          theme = _this$props.theme,
          children = _this$props.children,
          title = _this$props.title,
          description = _this$props.description,
          applyButton = _this$props.applyButton,
          cancelButton = _this$props.cancelButton,
          props = _objectWithoutProperties(_this$props, ["className", "theme", "children", "title", "description", "applyButton", "cancelButton"]);

      return React.createElement(Card, _extends({
        className: classnames(theme.FilterCard, className)
      }, props), (title || description) && React.createElement("div", {
        className: theme.FilterCard_Header
      }, title && React.createElement(Title, {
        className: theme.FilterCard_Title
      }, title), description && React.createElement(Text, {
        className: theme.FilterCard_Description
      }, description)), React.createElement("div", {
        className: theme.FilterCard_Body
      }, children, (applyButton || cancelButton) && React.createElement("div", {
        className: theme.FilterCard_Buttons
      }, applyButton && this.renderButton('applyButton', ApplyButton), cancelButton && this.renderButton('cancelButton', CancelButton))));
    }
  }]);

  return FilterCard;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  theme: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  applyButton: buttonType,
  cancelButton: buttonType,
  value: PropTypes.any
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { FilterCard as default };