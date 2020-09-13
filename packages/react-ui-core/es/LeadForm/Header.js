import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _dec, _class, _class2, _temp;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import themed from '@rentpath/react-themed';
import { Text } from '../Text';
var Header = (_dec = themed(/^(Modal_Header|Modal_SubHeader)/, {
  pure: true
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          header = _this$props.header;
      return React.createElement("div", null, React.createElement(Text, {
        className: theme.Modal_Header
      }, header), this.subHeader);
    }
  }, {
    key: "subHeader",
    get: function get() {
      var subHeader = this.props.subHeader;

      if (subHeader) {
        return React.createElement(Text, {
          className: this.props.theme.Modal_SubHeader
        }, subHeader);
      }

      return null;
    }
  }]);

  return Header;
}(PureComponent), _defineProperty(_class2, "propTypes", {
  theme: PropTypes.object,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  subHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func])
}), _defineProperty(_class2, "defaultProps", {
  theme: {},
  header: 'Contact Property'
}), _temp)) || _class);
export { Header as default };