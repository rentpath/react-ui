import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import autobind from 'autobind-decorator'
import classnames from 'classnames'
import isEqual from 'date-fns/isEqual'
import format from 'date-fns/format'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter'

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
    dateFormat: 'MM/dd/YYYY',
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

  @autobind
  nextMonth() {
    this.setState({ date: addMonths(this.state.date, 1) })
  }

  @autobind
  previousMonth() {
    this.setState({ date: subMonths(this.state.date, 1) })
  }

  @autobind
  handleDateSelected(evt) {
    const { minDate, maxDate } = this.props
    const selectedDate = evt.target.dataset.date
    const notBeforeMin = !isBefore(selectedDate, minDate)
    const notAfterMax = maxDate ? !isAfter(selectedDate, maxDate) : true

    // If date is within acceptable range, set state. Otherwise, do nothing.
    if (notBeforeMin && notAfterMax) {
      const date = new Date(selectedDate)
      this.setState({ selectedDate: date })
      this.props.dateChange(date)
    }
  }

  daysOfMonth() {
    const { dateFormat, theme } = this.props
    const daysOfMonth = []
    const daysInMonth = getDaysInMonth(this.state.date) + 1
    const minDate = new Date(format(this.props.minDate, dateFormat))
    const maxDate = new Date(format(this.props.maxDate, dateFormat))
    const startDate = new Date(format(this.state.selectedDate, dateFormat))

    for (let dateIndex = 1; dateIndex < daysInMonth; dateIndex += 1) {
      const day = dateIndex < 10 ? `0${dateIndex}` : dateIndex
      const dayFormat = dateFormat.replace(/d+/ig, day)
      const dayDate = new Date(format(this.state.date, dayFormat))
      const isDisabled = isBefore(dayDate, minDate) || isAfter(dayDate, maxDate)
      const isActive = isEqual(dayDate, startDate)

      daysOfMonth.push(
        <button
          type="button"
          key={dayFormat}
          className={classnames(
            theme.Calendar_Date,
            isActive && theme['Calendar_Date-active'],
            isDisabled && theme['Calendar_Date-disabled'],
          )}
          onClick={isDisabled ? null : this.handleDateSelected}
          data-date={format(this.state.date, dayFormat)}
        >
          {dateIndex}
        </button>
      )
    }

    return daysOfMonth
  }

  render() {
    const { className, theme, prevButtonLabel, nextButtonLabel } = this.props
    const days = this.daysOfMonth().map(d => d)

    return (
      <div
        className={classnames(
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
            className={classnames(
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
            {format(this.state.date, 'MMMM YYYY')}
          </div>
          <button
            type="button"
            data-tid="calendar-next"
            className={classnames(
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
        <div data-tid="calendar-dates" className={theme.Calendar_Dates}>
          {days}
        </div>
      </div>
    )
  }
}
