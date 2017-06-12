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
<<<<<<< 9df21285badbdbc2a7cf1a7e98e86e5be8f59fec
 * @return {string}
=======
 * @return {string{
>>>>>>> Add utility functions
 */
export default prefix => (
  `${prefix || randomStr()}-${Math.floor(Math.random() * 0xFFFF)}`.replace(/[^a-z0-9-_]/gi)
)
