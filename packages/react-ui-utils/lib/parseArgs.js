"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _composeProps = _interopRequireDefault(require("./composeProps"));

/**
 * Parses a value to extract an arguments array
 * suitable for calling React.createElement()
 *
 * @param {any} value The value to parse
 * @param {function} [component] Default component
 * @param {object} [props] Default props
 * @return {array}
 */
var _default = function _default(value, component, props) {
  var args = [];

  if (typeof value === 'function') {
    args.push(value, props);
  } else if ((0, _typeof2.default)(value) === 'object') {
    args.push(component, props ? (0, _composeProps.default)(props, value) : value);
  } else if (value) {
    args.push(component, props, value);
  } else {
    args.push(component, props);
  }

  return args;
};

exports.default = _default;