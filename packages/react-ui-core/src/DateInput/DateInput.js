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
    className: 'DatePicker',
  }

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  componentDidMount() {
    /* has to be done here so DatePicker doesn't render SSR */
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({ visible: true })
    /* eslint-enable react/no-did-mount-set-state */
  }

  render() {
    const { onChange, className, name, ...rest } = this.props

    if (!this.state.visible) return null

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
