import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'
import serializeForm from 'form-serialize'

@themed(['Form'], { pure: true })
export default class Form extends Component {
  static propTypes = {
    /**
     * className to apply
     */
    className: PropTypes.string,
    /**
     * The theme to apply.
     */
    theme: PropTypes.object,

    /**
     * The form action.
     */
    action: PropTypes.string,

    /**
     * The form method.
     */
    method: PropTypes.string,

    /**
     * Enables browser validation when false.
     */
    noValidate: PropTypes.bool,

    /**
     * Submit callback.
     */
    onSubmit: PropTypes.func,

    /**
     * Serializes form data when true.
     */
    serialize: PropTypes.bool,
  }

  static defaultProps = {
    theme: {},
    action: '#',
    method: 'POST',
    noValidate: true,
  }

  onSubmit = event => {
    const { onSubmit, serialize } = this.props
    event.preventDefault()

    if (onSubmit) {
      if (serialize) {
        onSubmit(event, serializeForm(event.target, { hash: true }))
      } else {
        onSubmit(event)
      }
    }
  }

  render() {
    const {
      theme,
      serialize,
      className,
      ...props
    } = this.props

    return (
      <form
        data-tid="form"
        {...props}
        onSubmit={this.onSubmit}
        className={classNames(
          className,
          theme.Form,
        )}
      />
    )
  }
}
