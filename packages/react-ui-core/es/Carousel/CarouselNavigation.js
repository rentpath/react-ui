import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
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
import { Button } from '../Button';
var CarouselNavigation = (_dec = themed(/^CarouselNavigation/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CarouselNavigation, _PureComponent);

  function CarouselNavigation() {
    _classCallCheck(this, CarouselNavigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselNavigation).apply(this, arguments));
  }

  _createClass(CarouselNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          theme = _this$props.theme,
          className = _this$props.className,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["direction", "theme", "className", "children"]);

      return React.createElement(Button, _extends({
        "data-tid": "carousel-navigation-".concat(direction),
        "data-tag_item": this.tagItem,
        className: classnames(className, theme.CarouselNavigation, theme["CarouselNavigation-".concat(direction)]),
        role: "button",
        tabIndex: 0
      }, rest), children);
    }
  }, {
    key: "tagItem",
    get: function get() {
      var direction = this.props.direction === 'previous' ? 'left' : 'right';
      return "".concat(direction, "_arrow");
    }
  }]);

  return CarouselNavigation;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  direction: PropTypes.oneOf(['previous', 'next']),
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
}), _defineProperty(_class2, "defaultProps", {
  direction: 'next',
  theme: {}
}), _temp)) || _class);
export { CarouselNavigation as default };