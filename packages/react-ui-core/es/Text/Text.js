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
var Text = (_dec = themed(/^Text/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Text, _PureComponent);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          theme = _this$props.theme,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["tag", "theme", "className"]);

      return React.createElement(Tag, _extends({
        "data-tid": "text"
      }, props, {
        className: classnames(className, theme.Text)
      }));
    }
  }]);

  return Text;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  className: PropTypes.string,
  tag: PropTypes.string,
  theme: PropTypes.object
}), _defineProperty(_class2, "defaultProps", {
  tag: 'div',
  theme: {}
}), _temp)) || _class);
export { Text as default };