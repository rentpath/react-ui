import classNames from 'classnames'

/**
 * Merges react component props, using regular
 * shallow merging for everything except the
 * className prop, which gets concatenated.
 *
 * @param {object} target The target object.
 * @param {...object} items The source objects.
 * @return {object}
 */
export default (target, ...items) => {
  if (!items.length) {
    return target
  }

  const classnames = []

  if (target.className) {
    classnames.push(target.className)
  }

  items.reduce((acc, props) => {
    if (!props) {
      return acc
    }
    if (props.className) {
      classnames.push(props.className)
    }
    return Object.assign(acc, props)
  }, target)

  if (classnames.length > 1) {
    target.className = classNames(...classnames) // eslint-disable-line no-param-reassign
  }

  return target
}
