"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Converts an array to an object where
 * keys mirror their values.
 *
 * @param {array} keys The key/values to use.
 * @return {object}
 */
exports.default = function (keys) {
  return keys.reduce(function (acc, key) {
    acc[key] = key; // eslint-disable-line no-param-reassign
    return acc;
  }, {});
};