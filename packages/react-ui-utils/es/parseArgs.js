import _typeof from "@babel/runtime/helpers/typeof";
import compose from './composeProps';
/**
 * Parses a value to extract an arguments array
 * suitable for calling React.createElement()
 *
 * @param {any} value The value to parse
 * @param {function} [component] Default component
 * @param {object} [props] Default props
 * @return {array}
 */

export default (function (value, component, props) {
  var args = [];

  if (typeof value === 'function') {
    args.push(value, props);
  } else if (_typeof(value) === 'object') {
    args.push(component, props ? compose(props, value) : value);
  } else if (value) {
    args.push(component, props, value);
  } else {
    args.push(component, props);
  }

  return args;
});