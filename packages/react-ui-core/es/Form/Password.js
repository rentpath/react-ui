import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

var Password =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Password, _PureComponent);

  function Password() {
    _classCallCheck(this, Password);

    return _possibleConstructorReturn(this, _getPrototypeOf(Password).apply(this, arguments));
  }

  _createClass(Password, [{
    key: "render",
    value: function render() {
      return React.createElement(Field, this.props);
    }
  }]);

  return Password;
}(PureComponent);

_defineProperty(Password, "propTypes", {
  name: PropTypes.string,
  type: PropTypes.string
});

_defineProperty(Password, "defaultProps", {
  name: 'password',
  type: 'password'
});

export { Password as default };