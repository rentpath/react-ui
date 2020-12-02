import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import themed from '@rentpath/react-themed'

@themed(/^Textarea/, { pure: true })
export default class Textarea extends Component {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    variant: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      className,
      variant,
      ...props
    } = this.props

    return (
      <textarea
        {...props}
        className={clsx(
          className,
          theme.Textarea,
          variant && theme[`Textarea-${variant}`],
        )}
      />
    )
  }
}
