import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Text } from '../Text'
import Label from './Label'
import controls from './controls'

@themed(/^Field/, {
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
    const id = this._uniqueId || (this._uniqueId = randomId(this.props.name))
    return id
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
      className,
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
      key: inputId,
      type,
      theme,
      disabled,
      onBlur: this.handleInputBlur,
      onFocus: this.handleInputFocus,
      ...rest,
    })

    if (label) {
      props.label = createElement(...parseArgs(label, Label, {
        key: `label-${inputId}`,
        htmlFor: inputId,
        className: theme.Label,
      }))
    }

    if (error) {
      props.error = createElement(...parseArgs(error, Text, {
        key: `error-${inputId}`,
        className: theme.Field_error,
      }))
    } else if (hint) {
      props.hint = createElement(...parseArgs(hint, Text, {
        key: `hint-${inputId}`,
        className: theme.Field_hint,
      }))
    }

    const [
      FieldType,
      fieldProps,
    ] = parseArgs(container, null, {
      className: classNames(
        className,
        theme.Field,
        theme[`Field-${type}`],
        focused && theme['Field-focused'],
        invalid && theme['Field-invalid'],
        disabled && theme['Field-disabled'],
      ),
    })

    if (FieldType) {
      return (
        <FieldType
          {...Object.assign(props, fieldProps)}
        />
      )
    }

    return (
      <div {...fieldProps}>
        {Object.values(props) }
      </div>
    )
  }
}
