import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'
import { parseArgs, randomId } from 'react-ui-utils'
import { Text } from 'react-ui-text'
import Label from './Label'
import controls from './controls'

@themed('Field', {
  pure: true,
})

export default class Field extends Component {
  static propTypes = {
    /**
     * The input id.
     */
    id: PropTypes.string,

    /**
     * The type of input to render, e.g. "text" or "select".
     */
    type: PropTypes.string,

    /**
     * The input name.
     */
    name: PropTypes.string,

    /**
     * The theme to apply.
     */
    theme: PropTypes.object,

    /**
     * Additional child nodes to render
     */
    children: PropTypes.node,

    /**
     * The input classname.
     */
    className: PropTypes.string,

    /**
     * Callback for input blur.
     */
    onBlur: PropTypes.func,

    /**
     * Callback for input focus.
     */
    onFocus: PropTypes.func,

    /**
     * Invalidates the field if set to true.
     */
    invalid: PropTypes.bool,

    /**
     * Disables the field if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * Configures the wrapping div element.
     */
    container: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
    ]),

    /**
     * Adds/configures a label element.
     */
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),

    /**
     * Configures the input element.
     */
    input: PropTypes.oneOfType([
      PropTypes.func,
    ]),

    /**
     * Adds/configures a error element.
     */
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),

    /**
     * Adds/configures a hint element.
     */
    hint: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    theme: {},
  }

  state = {
    focused: false,
  }

  get uniqueId() {
    return this._uniqueId || (this._uniqueId = randomId(this.props.name))
  }

  handleInputFocus = event => {
    if (this.props.disabled) {
      return
    }

    this.setState({
      focused: true,
    })

    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  handleInputBlur = event => {
    this.setState({
      focused: false,
    })

    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  render() {
    const {
      id,
      type,
      theme,
      label,
      input,
      error,
      hint,
      onBlur, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      disabled,
      container,
      children,
      ...rest
    } = this.props

    const {
      focused,
    } = this.state

    const inputId = id || this.uniqueId
    const invalid = rest.invalid || !!error

    // define all possible elements,
    // the order is important.
    const props = {
      children,
      label: null,
      input: null,
      error: null,
      hint: null,
    }

    props.input = createElement(input || controls[type] || controls.text, {
      id: inputId,
      ref: el => { this.input = el },
      type,
      theme,
      disabled,
      onBlur: this.handleInputBlur,
      onFocus: this.handleInputFocus,
      ...rest,
    })

    if (label) {
      props.label = createElement(...parseArgs(label, Label, {
        htmlFor: inputId,
        className: theme.Label,
      }))
    }

    if (error) {
      props.error = createElement(...parseArgs(error, Text, {
        className: theme.Field_error,
      }))
    } else if (hint) {
      props.hint = createElement(...parseArgs(hint, Text, {
        className: theme.Field_hint,
      }))
    }

    const [
      FieldType,
      fieldProps,
    ] = parseArgs(container, null, {
      className: classNames(
        theme.Field,
        theme[`Field-${type}`],
        focused && theme['Field-focused'],
        invalid && theme['Field-invalid'],
        disabled && theme['Field-disabled'],
      ),
    })

    return FieldType ? (
      <FieldType
        {...Object.assign(props, fieldProps)}
      />
    ) : (
      <div
        {...fieldProps}
        children={Object.values(props)}
      />
    )
  }
}
