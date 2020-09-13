import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

var Message =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Message, _PureComponent);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      return React.createElement(Field, this.props);
    }
  }]);

  return Message;
}(PureComponent);

_defineProperty(Message, "propTypes", {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
});

_defineProperty(Message, "defaultProps", {
  name: 'message',
  type: 'textarea'
});

export { Message as default };