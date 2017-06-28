import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import themed from 'react-themed'

@themed(/^Button/, {
  pure: true,
})

export default class Button extends Component {
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
