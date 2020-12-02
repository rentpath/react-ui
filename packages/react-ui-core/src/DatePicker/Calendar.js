import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import autobind from 'autobind-decorator'
import clsx from 'clsx'
import isEqual from 'date-fns/isEqual'
import format from 'date-fns/format'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'
import startOfMonth from 'date-fns/startOfMonth'
import getDay from 'date-fns/getDay'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'
import getMonth from 'date-fns/getMonth'
import getDate from 'date-fns/getDate'

@themed(/^Calendar/, { pure: true })
export default class Calendar extends PureComponent {
  static propTypes = {
    value: PropTypes.object,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    prevButtonLabel: PropTypes.string,
    nextButtonLabel: PropTypes.string,
    dateChange: PropTypes.func,
    dateFormat: PropTypes.string,
    theme: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    dateFormat: 'MM/dd/yyyy',
    value: new Date(),
    minDate: new Date(),
    prevButtonLabel: String.fromCharCode(8592),
    nextButtonLabel: String.fromCharCode(8594),
    theme: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      date: this.props.value,
      selectedDate: this.props.value,
    }
  }

  get daysOfWeek() {
    const daysOfWeek = []
    const monthStart = startOfMonth(this.state.date)
    const dow = getDay(startOfMonth(this.state.date))
    const firstDate = subDays(monthStart, dow)

    for (let i = 0; i <= 6; i += 1) {
      daysOfWeek.push(<span key={`dow-${i}`}>{format(addDays(firstDate, i), 'EEEEEE')}</span>)
    }

    return daysOfWeek
  }

  get daysOfMonth() {
    const days = []

    // NOTE: consitently create 5 rows so the calendar pads shorter months
    for (let i = 0; i <= 5; i += 1) {
      days.push(
        <div key={`date-row-${i}`}>
          {this.days(i)}
        </div>
      )
    }

    return days
  }

  @autobind
  nextMonth() {
    const { date } = this.state
    this.setState({ date: addMonths(date, 1) })
  }

  @autobind
  previousMonth() {
    const { date } = this.state
    this.setState({ date: subMonths(date, 1) })
  }

  @autobind
  handleDateSelected(evt) {
    const { minDate, maxDate } = this.props
    const selectedDate = new Date(evt.target.dataset.date)
    const notBeforeMin = !isBefore(selectedDate, minDate)
    const notAfterMax = maxDate ? !isAfter(selectedDate, maxDate) : true

    // If date is within acceptable range, set state. Otherwise, do nothing.
    if (notBeforeMin && notAfterMax) {
      const date = new Date(selectedDate)
      this.setState({ selectedDate: date })
      this.props.dateChange(date)
    }
  }

  days(row) {
    const {
      dateFormat,
      theme,
    } = this.props

    const daysOfMonth = []
    const monthStart = startOfMonth(this.state.date)
    const month = getMonth(this.state.date)
    const startDate = new Date(this.state.selectedDate)
    const dow = getDay(startOfMonth(this.state.date))
    const firstDate = subDays(monthStart, dow)
    const indexStart = row * 7

    for (let i = indexStart; i < (indexStart + 7); i += 1) {
      const currentDate = addDays(firstDate, i)
      const disabled = this.isBeforeMinDate(currentDate) || this.isAfterMaxDate(currentDate)
      const active = isEqual(currentDate, startDate)
      const currentMonth = month === getMonth(currentDate)

      daysOfMonth.push(
        <button
          className={clsx(
            theme.Calendar_Date,
            !currentMonth && theme['Calendar_Date-notCurrentMonth'],
            active && theme['Calendar_Date-active'],
            disabled && theme['Calendar_Date-disabled']
          )}
          data-date={format(currentDate, dateFormat)}
          disabled={disabled}
          key={currentDate.toString()}
          onClick={this.handleDateSelected}
          type="button"
        >
          {getDate(currentDate)}
        </button>
      )
    }

    return daysOfMonth
  }

  isBeforeMinDate(date) {
    const { minDate } = this.props
    return minDate ? isBefore(date, minDate) : false
  }

  isAfterMaxDate(date) {
    const { maxDate } = this.props
    return maxDate ? isAfter(date, maxDate) : false
  }

  render() {
    const {
      className,
      theme,
      prevButtonLabel,
      nextButtonLabel,
    } = this.props

    return (
      <div
        className={clsx(
          theme.Calendar,
          className,
        )}
        style={{ display: 'inline-block' }}
        data-tid="calendar"
      >
        <div className={theme.Calendar_Controls}>
          <button
            type="button"
            data-tid="calendar-previous"
            className={clsx(
              theme.Calendar_Navigation,
              theme['Calendar_Navigation-previous'],
            )}
            onClick={this.previousMonth}
          >
            <span>
              {prevButtonLabel}
            </span>
          </button>
          <div
            data-tid="calendar-month"
            className={theme.Calendar_Month}
          >
            {format(this.state.date, 'MMMM yyyy')}
          </div>
          <button
            type="button"
            data-tid="calendar-next"
            className={clsx(
              theme.Calendar_Navigation,
              theme['Calendar_Navigation-next'],
            )}
            onClick={this.nextMonth}
          >
            <span>
              {nextButtonLabel}
            </span>
          </button>
        </div>
        <div className={theme.Calendar_DaysOfWeek}>
          {this.daysOfWeek}
        </div>
        <div data-tid="calendar-dates" className={theme.Calendar_Dates}>
          {this.daysOfMonth}
        </div>
      </div>
    )
  }
}
