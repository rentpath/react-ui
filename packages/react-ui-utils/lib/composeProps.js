'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Merges react component props, using regular
 * shallow merging for everything except the
 * className prop, which gets concatenated.
 *
 * @param {object} target The target object.
 * @param {...object} items The source objects.
 * @return {object}
 */
exports.default = function (target) {
  for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }

  if (!items.length) {
    return target;
  }

  var classnames = [];

  if (target.className) {
    classnames.push(target.className);
  }

  items.reduce(function (acc, props) {
    if (!props) {
      return acc;
    }
    if (props.className) {
      classnames.push(props.className);
    }
    return Object.assign(acc, props);
  }, target);

  if (classnames.length > 1) {
    target.className = _classnames2.default.apply(undefined, classnames); // eslint-disable-line no-param-reassign
  }

  return target;
};