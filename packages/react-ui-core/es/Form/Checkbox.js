import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      return React.createElement(Field, this.props);
    }
  }]);

  return Checkbox;
}(PureComponent);

_defineProperty(Checkbox, "propTypes", {
  type: PropTypes.string,
  property: PropTypes.string
});

_defineProperty(Checkbox, "defaultProps", {
  type: 'checkbox',
  property: 'checked'
});

export { Checkbox as default };