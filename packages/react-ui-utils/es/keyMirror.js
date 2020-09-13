/**
 * Converts an array to an object where
 * keys mirror their values.
 *
 * @param {array} keys The key/values to use.
 * @return {object}
 */
export default (function (keys) {
  return keys.reduce(function (acc, key) {
    acc[key] = key; // eslint-disable-line no-param-reassign

    return acc;
  }, {});
});