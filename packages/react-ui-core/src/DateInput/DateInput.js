import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-basic-datepicker'

export default class DateInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string,
  }

  static defaultProps = {
    placeholderText: 'Date',
    className: 'DatePicker',
  }

  render() {
    const { onChange, className, name, ...rest } = this.props

    return (
      <DatePicker
        handleDateChange={onChange}
        datepickerName={name}
        datepickerClassName={className}
        {...rest}
      />
    )
  }
}
