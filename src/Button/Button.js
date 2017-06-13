import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Button extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    styles: PropTypes.object,
  }

  static defaultProps = {
    styles: {},
  }

  render() {
    const {
      size,
      color,
      styles,
      className,
      ...props
    } = this.props

    return (
      <button
        {...props}
        className={classNames(
          className,
          styles.button,
          styles[color],
          styles[size],
        )}
      />
    )
  }
}
