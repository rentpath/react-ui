import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import themed from 'react-themed'

@themed(/^Input/, {
  pure: true,
})

export default class Input extends Component {
  static propTypes = {
    /**
     * The input type, e.g. "text" or "email".
     */
    type: PropTypes.string,

    /**
     * The input theme.
     */
    theme: PropTypes.object,

    /**
     * Indicates the input should be block styled.
     */
    block: PropTypes.bool,

    /**
     * A custom theme variant.
     */
    variant: PropTypes.string,

    /**
     * Indicates the input is invalid.
     */
    invalid: PropTypes.bool,

    /**
     * The input classname.
     */
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
    theme: {},
  }

  render() {
    const {
      theme,
      block,
      invalid,
      variant,
      className,
      ...props
    } = this.props

    return (
      <input
        {...props}
        className={classNames(
          className,
          theme.Input,
          theme[`Input-${props.type}`],
          block && theme['Input-block'],
          invalid && theme['Input-invalid'],
          variant && theme[`Input-${variant}`],
        )}
      />
    )
  }
}
