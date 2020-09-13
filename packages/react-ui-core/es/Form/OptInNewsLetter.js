import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

var OptInNewsLetter =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OptInNewsLetter, _PureComponent);

  function OptInNewsLetter() {
    _classCallCheck(this, OptInNewsLetter);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptInNewsLetter).apply(this, arguments));
  }

  _createClass(OptInNewsLetter, [{
    key: "render",
    value: function render() {
      return React.createElement(Checkbox, this.props);
    }
  }]);

  return OptInNewsLetter;
}(PureComponent);

_defineProperty(OptInNewsLetter, "propTypes", {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
});

_defineProperty(OptInNewsLetter, "defaultProps", {
  name: 'opt-in-newsletter',
  label: 'Simplify my search with helpful tips and rental recommendations.'
});

export { OptInNewsLetter as default };