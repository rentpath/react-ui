import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

var Name =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Name, _PureComponent);

  function Name() {
    _classCallCheck(this, Name);

    return _possibleConstructorReturn(this, _getPrototypeOf(Name).apply(this, arguments));
  }

  _createClass(Name, [{
    key: "render",
    value: function render() {
      return React.createElement(Field, this.props);
    }
  }]);

  return Name;
}(PureComponent);

_defineProperty(Name, "propTypes", {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
});

_defineProperty(Name, "defaultProps", {
  name: 'name'
});

export { Name as default };