/**
 * Generates a random string.
 *
 * @return {string}
 */
const randomStr = () => (
  (Math.random() + 1).toString(36).substring(2, 7)
)

/**
 * Generates a random alphanumeric ID.
 *
 * @param {string} [prefix] An optional prefix.
 * @return {string}
 */
export default (prefix?: string) => (
  //`${prefix || randomStr()}-${Math.floor(Math.random() * 0xFFFF)}`.replace(/[^a-z0-9-_]/gi)
  `${prefix || randomStr()}-${Math.floor(Math.random() * 0xFFFF)}`.replace(/[^a-z0-9-_]/gi, '')
)
