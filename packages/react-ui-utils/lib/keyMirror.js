"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Converts an array to an object where
 * keys mirror their values.
 *
 * @param {array} keys The key/values to use.
 * @return {object}
 */
var _default = function _default(keys) {
  return keys.reduce(function (acc, key) {
    acc[key] = key; // eslint-disable-line no-param-reassign

    return acc;
  }, {});
};

exports.default = _default;