'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generates a random string.
 *
 * @return {string}
 */
var randomStr = function randomStr() {
  return (Math.random() + 1).toString(36).substring(2, 7);
};

/**
 * Generates a random number.
 *
 * @return {number}
 */
var randomNumber = function randomNumber() {
  return Math.floor(Math.random() * 0xFFFF);
};

/**
 * Generates a random alphanumeric ID.
 *
 * @param {string} [prefix] An optional prefix.
 * @return {string}
 */

exports.default = function (prefix) {
  return ((prefix || randomStr()) + '-' + randomNumber()).replace(/[^a-z0-9-_]/gi, '');
};