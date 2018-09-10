import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { themed } from 'react-themed-too'
import classNames from 'classnames'

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

    const classnames = classNames(
      className,
      theme.Label,
      variant && theme[`Label-${variant}`]
    )

    return (
      /* eslint-disable jsx-a11y/label-has-for */
      <label
        data-tid="label"
        {...props}
        className={classnames}
      >
        {text}{children}
      </label>
    )
  }
}
