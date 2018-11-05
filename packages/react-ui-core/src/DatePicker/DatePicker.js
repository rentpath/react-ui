import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import isAfter from 'date-fns/isAfter'
import isBefore from 'date-fns/isBefore'
import format from 'date-fns/format'
import Input from '../Form/Input'
import Calendar from './Calendar'

const VALID_DT_REGEX = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export default class DatePicker extends PureComponent {
  static propTypes = {
    dateFormat: PropTypes.string,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    prevButtonLabel: PropTypes.string,
    nextButtonLabel: PropTypes.string,
    onChange: PropTypes.func,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    showCalendar: PropTypes.bool,
  }

  static defaultProps = {
    dateFormat: 'MM/dd/YYYY',
    readOnly: false,
    showCalendar: false,
  }

  constructor(props) {
    super(props)

    this.picker = React.createRef()
    this.outsideHandler = null
    this.formatRegex = new RegExp(props.dateFormat.replace('/', '\\/').replace(/[mdy]/ig, '\\d'))

    const value = props.value
    const isValidDate = VALID_DT_REGEX.test(value)

    this.state = {
      showCalendar: props.showCalendar,
      value: isValidDate ? format(new Date(value), props.dateFormat) : value,
      isValidDate,
    }
  }

  componentDidUpdate() {
    if (this.state.showCalendar && !this.outsideHandler) {
      document.removeEventListener('click', this.onOutsideClick, false)
      this.outsideHandler = document.addEventListener('click', this.onOutsideClick, false)
    } else if (this.outsideHandler) {
      document.removeEventListener(this.outsideHandler, this.onOutsideClick, false)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick, false)
  }

  @autobind
  onOutsideClick(event) {
    if (!this.picker.current.contains(event.target) && this.state.showCalendar) {
      this.setState({ showCalendar: false })
    }
  }

  @autobind
  dateChange(selectedDate) {
    const { onChange, dateFormat } = this.props

    if (onChange) onChange(selectedDate)

    this.setState({
      showCalendar: false,
      isValidDate: true,
      value: format(selectedDate, dateFormat),
    })
  }

  @autobind
  handleCalendarVisibility() {
    const { showCalendar } = this.state
    this.setState({
      showCalendar: !showCalendar,
    })
  }

  @autobind
  validateTextField(e) {
    const value = e.target.value
    const { minDate, maxDate } = this.props

    if (VALID_DT_REGEX.test(value) && !this.state.isValidDate) {
      const date = new Date(value)
      const isDisabled = isBefore(date, new Date(minDate)) || isAfter(date, new Date(maxDate))

      if (!isDisabled) { this.dateChange(date) }
    }
  }

  @autobind
  handleChange(e) {
    const value = e.target.value

    if (this.formatRegex.test(value)) {
      this.validateTextField(e)
    } else {
      this.setState({
        showCalendar: false,
        isValidDate: false,
        value,
      })
    }
  }

  render() {
    const {
      prevButtonLabel,
      nextButtonLabel,
      showCalendar: _,
      minDate,
      maxDate,
      dateFormat,
      ...rest
    } = this.props

    const {
      value,
      isValidDate,
      showCalendar,
    } = this.state

    return (
      <div ref={this.picker}>
        <Input
          {...rest}
          onFocus={this.handleCalendarVisibility}
          value={value}
          onChange={this.handleChange}
          onBlur={this.validateTextField}
        />

        {showCalendar && (
          <Calendar
            value={isValidDate ? new Date(value) : undefined}
            dateChange={this.dateChange}
            minDate={minDate}
            maxDate={maxDate}
            prevButtonLabel={prevButtonLabel}
            nextButtonLabel={nextButtonLabel}
          />
        )}
      </div>
    )
  }
}
