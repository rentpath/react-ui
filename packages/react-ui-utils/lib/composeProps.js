"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

/**
 * Merges react component props, using regular
 * shallow merging for everything except the
 * className prop, which gets concatenated.
 *
 * @param {object} target The target object.
 * @param {...object} items The source objects.
 * @return {object}
 */
var _default = function _default(target) {
  for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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
    target.className = _classnames.default.apply(void 0, classnames); // eslint-disable-line no-param-reassign
  }

  return target;
};

exports.default = _default;