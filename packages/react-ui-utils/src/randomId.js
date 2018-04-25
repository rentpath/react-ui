/**
 * Generates a random string.
 *
 * @return {string}
 */
const randomStr = () => (
  (Math.random() + 1).toString(36).substring(2, 7)
)

/**
 * Generates a random number.
 *
 * @return {number}
 */
const randomNumber = () => (
  Math.floor(Math.random() * 0xFFFF)
)

/**
 * Generates a random alphanumeric ID.
 *
 * @param {string} [prefix] An optional prefix.
 * @return {string}
 */
export default prefix => (
  `${prefix || randomStr()}-${randomNumber()}`.replace(/[^a-z0-9-_]/gi, '')
)
