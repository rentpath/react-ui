import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from '@rentpath/react-themed'
import InputMask from 'react-input-mask'
import autobind from 'autobind-decorator'

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

    /**
     * Controlled input
     */
    changeEvent: PropTypes.string,

    /**
     * Value of the input
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /**
     * Value of the uncontrolled input
     */
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /**
     * Name of value to use for input field, ex: checked or value
     */
    property: PropTypes.string,

    /**
     * Used to determine if InputMask required
     */
    mask: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
    theme: {},
    property: 'value',
    changeEvent: 'onChange',
  }

  constructor(props) {
    super(props)
    this.state = {
      [props.property]: props.defaultValue || props[props.property] || '',
    }
  }

  componentWillReceiveProps(nextProps) {
    const property = this.props.property

    if (this.value !== nextProps[property]) {
      this.setValue(nextProps[property])
    }
  }

  get controlledProps() {
    if (this.props.defaultValue) return {}

    return {
      [this.props.changeEvent]: this.handleChange,
      [this.props.property]: this.value || '',
    }
  }

  get value() {
    return this.state[this.props.property]
  }

  setValue(value) {
    this.setState({ [this.props.property]: value })
  }

  @autobind
  handleChange(event) {
    const { changeEvent, property } = this.props

    this.setValue(event.target[property])
    if (this.props[changeEvent]) this.props[changeEvent](event)
  }

  render() {
    const {
      theme,
      block,
      invalid,
      variant,
      className,
      changeEvent,
      property,
      value,
      ...props
    } = this.props

    const InputComponent = this.props.mask ? InputMask : 'input'

    return (
      <InputComponent
        className={classnames(
          className,
          theme.Input,
          theme[`Input-${props.type}`],
          block && theme['Input-block'],
          invalid && theme['Input-invalid'],
          variant && theme[`Input-${variant}`],
        )}
        {...props}
        {...this.controlledProps}
      />
    )
  }
}
