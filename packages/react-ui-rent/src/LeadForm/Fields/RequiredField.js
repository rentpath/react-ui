import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { Field } from '@rentpath/react-ui-core'

@themed(/^RequiredField/)

export default class RequiredField extends Component {
  static propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
  }

  constructor(props) {
    super(props)
    this.inputChange = this.inputChange.bind(this)
    this.state = { labelVisible: true }
  }

  get fieldLabel() {
    const { placeholder, theme } = this.props

    if (this.state.labelVisible) {
      return {
        text: placeholder,
        className: theme.RequiredField_Label,
      }
    }

    return null
  }

  inputChange(event) {
    if (event.target.value) {
      if (this.state.labelVisible) {
        this.setState({ labelVisible: false })
      }
    } else {
      this.setState({ labelVisible: true })
    }
    if (this.props.onChange &&
      typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  }

  render() {
    const {
      theme,
      placeholder,
      ...props
    } = this.props

    return (
      <Field
        className={theme.RequiredField}
        onChange={this.inputChange}
        label={this.fieldLabel}
        {...props}
      />
    )
  }
}
