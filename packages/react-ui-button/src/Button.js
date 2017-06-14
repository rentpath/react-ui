import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Button extends PureComponent {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      ...props
    } = this.props

    return (
      <button
        {...props}
        className={classNames(
          className,
          theme.Button,
          theme[`Button-${color}`],
          theme[`Button-${size}`],
        )}
      />
    )
  }
}
