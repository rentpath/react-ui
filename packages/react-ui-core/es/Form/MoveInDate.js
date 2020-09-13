import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

var MoveInDate =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MoveInDate, _PureComponent);

  function MoveInDate() {
    _classCallCheck(this, MoveInDate);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoveInDate).apply(this, arguments));
  }

  _createClass(MoveInDate, [{
    key: "render",
    value: function render() {
      return React.createElement(Field, this.props);
    }
  }]);

  return MoveInDate;
}(PureComponent);

_defineProperty(MoveInDate, "propTypes", {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
});

_defineProperty(MoveInDate, "defaultProps", {
  name: 'date',
  type: 'date'
});

export { MoveInDate as default };