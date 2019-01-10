import React, { PureComponent, createElement } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import themed from 'react-themed'
import { parseArgs, randomId } from '@rentpath/react-ui-utils'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import isEqual from 'lodash/isEqual'
import RadioButton from './RadioButton'
import Label from './Label'
import { Text } from '../Text'

@themed(/^(RadioGroup|Field|Label)/)
export default class RadioGroup extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    orientation: PropTypes.string,
    hideInputElement: PropTypes.bool,
    theme: PropTypes.object,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
    hint: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
    ]),
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
      ]),
      checked: PropTypes.bool,
      value: PropTypes.string,
    })),
    invalid: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    allowUnselect: PropTypes.bool,
    onChange: PropTypes.func,
    onUnselect: PropTypes.func,
    variant: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    children: PropTypes.node,
  }

  static defaultProps = {
    theme: {},
    fields: [],
    allowUnselect: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.currentlyCheckedValue(props.defaultValue || props.value),
    }
    this.generateRandomId()
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.fields, nextProps.fields)) {
      this.generateRandomId()
    }

    if ((!isEqual(this.state.value, nextProps.value) && this.props.value !== nextProps.value) ||
      !isEqual(nextProps.fields, this.props.fields)
    ) {
      this.setState({
        value: this.currentlyCheckedValue(nextProps.value, nextProps.fields),
      })
    }
  }

  get uniqueId() {
    const id = this._uniqueId || (this._uniqueId = randomId(this.props.name))
    return id
  }

  get fields() {
    return this.props.fields || []
  }

  generateRandomId() {
    this.id = randomId('radiogroup')
  }

  currentlyCheckedValue(value, fields = this.fields) {
    return value || ((fields || []).find(f => f.checked) || {}).value
  }

  @autobind
  handleValueChange(event) {
    this.setState({
      value: event.target.value,
    })

    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  @autobind
  handleClick(event) {
    const { allowUnselect, onUnselect } = this.props

    // Check if value was already selected, should we unselect it?
    if (allowUnselect && this.state.value === event.target.value) {
      this.setState({ value: null })

      if (onUnselect) onUnselect(event)
    }
  }

  renderRadioButton(index, fieldProps) {
    const props = pick(this.props, ['name', 'hideInputElement', 'orientation'])

    return (
      <RadioButton
        data-tid="radiogroup-radiobutton"
        key={`${this.id}-${index}`}
        checked={this.state.value === fieldProps.value}
        onChange={this.handleValueChange}
        onClick={this.handleClick}
        {...omit(fieldProps, 'checked')}
        {...props}
      />
    )
  }

  render() {
    const {
      className,
      theme,
      name,
      label,
      error,
      hint,
      disabled,
      required,
      fields,
      hideInputElement,
      onChange,
      allowUnselect,
      onUnselect,
      variant,
      children,
      ...rest
    } = this.props

    const id = rest.id || this.uniqueId
    const invalid = rest.invalid || !!error

    const props = {
      label: null,
      error: null,
      hint: null,
    }

    if (!this.fields.length) return null

    if (label) {
      props.label = createElement(...parseArgs(label, Label, {
        key: `label-${id}`,
        className: theme.Label,
      }))
    }

    if (error) {
      props.error = createElement(...parseArgs(error, Text, {
        key: `error-${id}`,
        className: theme.Field_error,
      }))
    } else if (hint) {
      props.hint = createElement(...parseArgs(hint, Text, {
        key: `hint-${id}`,
        className: theme.Field_hint,
      }))
    }

    return (
      <div
        className={classnames(
          className,
          theme.RadioGroup,
          theme[`Field-${this.props.name}`],
          invalid && theme['Field-invalid'],
          disabled && theme['Field-disabled'],
          required && theme['Field-required'],
        )}
        role="group"
        {...rest}
      >
        {this.fields.map((field, index) => this.renderRadioButton(index, field))}
        {Object.values(props) }
      </div>
    )
  }
}
