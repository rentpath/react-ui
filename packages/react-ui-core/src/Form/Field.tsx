import * as React from 'react'
import * as classNames from 'classnames'
import PropTypes from 'prop-types'
import themed from 'react-themed'

import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import { Text } from '../Text'
import Label from './Label'
import controls from './controls'

interface Props {
  /**
   * The input id.
   */
  id?: string,

  /**
   * The type of input to render, e.g. "text" or "select".
   */
  type?: string,

  /**
   * The input name.
   */
  name?: string,

  /**
   * The theme to apply.
   */
  theme?: React.CSSProperties,

  /**
   * Additional child nodes to render
   */
  children?: React.ReactNode,

  /**
   * The input classname.
   */
  className?: string,

  /**
   * Callback for input blur.
   */
  onBlur?: Function,

  /**
   * Callback for input focus.
   */
  onFocus?: Function,

  /**
   * Invalidates the field if set to true.
   */
  invalid?: boolean,

  /**
   * Disables the field if set to true.
   */
  disabled?: boolean,

  /**
   * Configures the wrapping div element.
   */
  container?: object | Function,

  /**
   * Adds/configures a label element.
   */
  label?: string | object | Function,

  /**
   * Configures the input element.
   */
  input?: Function,

  /**
   * Adds/configures a error element.
   */
  error?: string | object | Function,

  /**
   * Adds/configures a hint element.
   */
  hint?: string | object | Function,

  /**
   * Additional props.
   */
  [propName: string]: any
}

interface State {
  focused: boolean
}

@themed('Field', {
  pure: true,
})
export default class Field extends React.Component<Props, State> {

  static defaultProps = {
    theme: {},
  }

  state = {
    focused: false,
  }

  _uniqueId: string = undefined
  input: React.ReactNode

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

    props.input = React.createElement(input || controls[type] || controls.text, ({
      id: inputId,
      ref: el => { this.input = el },
      type,
      theme,
      disabled,
      onBlur: this.handleInputBlur,
      onFocus: this.handleInputFocus,
      ...rest,
    } as any))

    if (label) {
      props.label = React.createElement.apply(React, parseArgs(label, Label, {
        htmlFor: inputId,
        className: theme.Label,
      }))
    }

    if (error) {
      props.error = React.createElement.apply(React, parseArgs(error, Text, {
        className: theme.Field_error,
      }))
    } else if (hint) {
      props.hint = React.createElement.apply(React, parseArgs(hint, Text, {
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
