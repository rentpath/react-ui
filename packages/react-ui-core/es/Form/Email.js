import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

var Email =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Email, _PureComponent);

  function Email() {
    _classCallCheck(this, Email);

    return _possibleConstructorReturn(this, _getPrototypeOf(Email).apply(this, arguments));
  }

  _createClass(Email, [{
    key: "render",
    value: function render() {
      return React.createElement(Field, this.props);
    }
  }]);

  return Email;
}(PureComponent);

_defineProperty(Email, "propTypes", {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
});

_defineProperty(Email, "defaultProps", {
  name: 'email',
  type: 'email'
});

export { Email as default };