import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import themed from 'react-themed'
import { randomId } from '@rentpath/react-ui-utils'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import isEqual from 'lodash/isEqual'
import RadioButton from './RadioButton'

@themed('*')
export default class RadioGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    orientation: PropTypes.string,
    hideInputElement: PropTypes.bool,
    theme: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.func,
      ]),
      checked: PropTypes.bool,
      value: PropTypes.string,
    })),
    allowUnselect: PropTypes.bool,
    onChange: PropTypes.func,
    onUnselect: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    fields: [],
    allowUnselect: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.currentlyCheckedValue(),
    }
    this.generateRandomId()
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.fields, nextProps.fields)) {
      this.generateRandomId()

      this.setState({
        value: this.currentlyCheckedValue(nextProps.fields || []),
      })
    }
  }

  get fields() {
    return this.props.fields || []
  }

  currentlyCheckedValue(fields = this.fields) {
    return (fields.find(f => f.checked) || {}).value
  }

  generateRandomId() {
    this.id = randomId('radiogroup')
  }

  handleValueChange = event => {
    this.setState({
      value: event.target.value,
    })

    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  handleClick = event => {
    // Check if value was already selected, should we unselect it?
    if (this.props.allowUnselect && this.state.value === event.target.value) {
      this.setState({ value: null })
      if (this.props.onUnselect) {
        this.props.onUnselect(event)
      }
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
      fields,
      hideInputElement,
      onChange,
      allowUnselect,
      onUnselect,
      ...props
    } = this.props

    if (!this.fields.length) return null

    return (
      <div
        className={classnames(
          className,
          theme.RadioGroup,
        )}
        {...props}
      >
        {this.fields.map((field, index) =>
          this.renderRadioButton(index, field)
        )}
      </div>
    )
  }
}
