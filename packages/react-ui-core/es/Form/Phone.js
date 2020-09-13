import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

var Phone =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Phone, _PureComponent);

  function Phone() {
    _classCallCheck(this, Phone);

    return _possibleConstructorReturn(this, _getPrototypeOf(Phone).apply(this, arguments));
  }

  _createClass(Phone, [{
    key: "render",
    value: function render() {
      return React.createElement(Field, this.props);
    }
  }]);

  return Phone;
}(PureComponent);

_defineProperty(Phone, "propTypes", {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
});

_defineProperty(Phone, "defaultProps", {
  name: 'phone',
  type: 'tel'
});

export { Phone as default };