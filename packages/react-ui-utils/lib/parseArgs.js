'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _composeProps = require('./composeProps');

var _composeProps2 = _interopRequireDefault(_composeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses a value to extract an arguments array
 * suitable for calling React.createElement()
 *
 * @param {any} value The value to parse
 * @param {function} [component] Default component
 * @param {object} [props] Default props
 * @return {array}
 */
exports.default = function (value, component, props) {
  var args = [];

  if (typeof value === 'function') {
    args.push(value, props);
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    args.push(component, props ? (0, _composeProps2.default)(props, value) : value);
  } else if (value) {
    args.push(component, props, value);
  } else {
    args.push(component, props);
  }

  return args;
};