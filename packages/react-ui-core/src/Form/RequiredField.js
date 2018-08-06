import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import Field from './Field'

@themed(['RequiredField'])
export default class RequiredField extends Component {
  static propTypes = {
    theme: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      labelVisible: !props.defaultValue && !props.value,
    }
  }

  @autobind
  onChange(event) {
    if (event.target.value) {
      if (this.state.labelVisible) {
        this.setState({ labelVisible: false })
      }
    } else {
      this.setState({ labelVisible: true })
    }
    if (this.props.onChange) {
      this.props.onChange(event)
    }
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

  render() {
    const {
      theme,
      placeholder,
      onChange,
      ...props
    } = this.props

    return (
      <Field
        className={theme.RequiredField}
        onChange={this.onChange}
        label={this.fieldLabel}
        {...props}
      />
    )
  }
}
