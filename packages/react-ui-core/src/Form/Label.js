import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'

@themed(/^Label/, {
  pure: true,
})
export default class Label extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
    variant: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      text,
      theme,
      className,
      variant,
      children,
      ...props
    } = this.props

    const classNames = clsx(
      className,
      theme.Label,
      variant && theme[`Label-${variant}`]
    )

    return (
      /* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
      <label
        data-tid="label"
        {...props}
        className={classNames}
      >
        {text}
        {children}
      </label>
    )
  }
}
