import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import { createElement, PureComponent } from 'react';
import { parseArgs } from '@rentpath/react-ui-utils';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import themed from '@rentpath/react-themed';
import { Button } from '../Button';
var DropdownAnchor = (_dec = themed(['DropdownAnchor-expand', 'DropdownAnchor-collapse', 'DropdownAnchor'], {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DropdownAnchor, _PureComponent);

  function DropdownAnchor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownAnchor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownAnchor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          visible = _this$props.visible;
      if (onClick) onClick(visible);
    });

    return _this;
  }

  _createClass(DropdownAnchor, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          anchor = _this$props2.anchor,
          className = _this$props2.className,
          theme = _this$props2.theme,
          visible = _this$props2.visible,
          props = _objectWithoutProperties(_this$props2, ["anchor", "className", "theme", "visible"]);

      return createElement.apply(void 0, _toConsumableArray(parseArgs(anchor, Button, _objectSpread({
        'data-tid': 'dropdown-anchor',
        className: classnames(className, theme.DropdownAnchor, theme["DropdownAnchor-".concat(visible ? 'expand' : 'collapse')]),
        onClick: this.handleClick
      }, props))));
    }
  }]);

  return DropdownAnchor;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  onClick: PropTypes.func,
  visible: PropTypes.bool,
  theme: PropTypes.object,
  className: PropTypes.string,
  changeVisibility: PropTypes.func,
  children: PropTypes.any,
  anchor: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.func])
}), _defineProperty(_class2, "defaultProps", {
  theme: {}
}), _temp)) || _class);
export { DropdownAnchor as default };