import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isAfter from 'date-fns/is_after'
import isBefore from 'date-fns/is_before'
import isValid from 'date-fns/is_valid'
import format from 'date-fns/format'
import Calendar from './Calendar'

function noop() {
  return null
}

function hasOpenHandler(props) {
  return props.externalOpenHandler && props.externalOpenHandler.subscribe && typeof props.externalOpenHandler.subscribe === 'function'
}

export default class DatePicker extends Component {
  static propTypes = {
    dateFormat: PropTypes.string,
    startDate: PropTypes.object,
    datepickerName: PropTypes.string,
    datepickerId: PropTypes.string,
    datepickerClassName: PropTypes.string,
    enableTextInput: PropTypes.bool,
    prevButtonLabel: PropTypes.string,
    nextButtonLabel: PropTypes.string,
    handleDateChange: PropTypes.func,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
  }

  static defaultProps = {
    dateFormat: 'DD-MM-YYYY',
    startDate: new Date(),
    datepickerName: 'react-simple-datepicker',
    datepickerId: 'react-simple-datepicker',
    datepickerClassName: 'react-simple-datepicker-input',
    enableTextInput: false,
    prevButtonLabel: String.fromCharCode(8592),
    nextButtonLabel: String.fromCharCode(8594),
  }

  constructor(props) {
    super(props)
    this.onOutsideClick = this.onOutsideClick.bind(this)
    this.handleCalendarVisibility = this.handleCalendarVisibility.bind(this)
    this.dateChange = this.dateChange.bind(this)
    this.outsideHandler = null
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      showCalendar: false,
      selectedDate: this.props.startDate,
      textInput: '',
      usingExternalOpenHandler: hasOpenHandler(this.props),
    }
  }

  componentWillMount() {
    const _this = this

    if (hasOpenHandler(_this.props)) {
      _this.props.externalOpenHandler.subscribe(() => {
        _this.handleCalendarVisibility()
      })
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

  onOutsideClick(event) {
    if (!this.mainNode.contains(event.target) && this.state.showCalendar) {
      this.setState({ showCalendar: false })
    }
  }

  dateChange(selectedDate) {
    if (this.props.handleDateChange) this.props.handleDateChange(selectedDate)
    this.setState({
      selectedDate,
      showCalendar: false,
      textInput: format(selectedDate, this.props.dateFormat),
    })
  }

  handleCalendarVisibility() {
    this.setState({
      showCalendar: !this.state.showCalendar,
    })
  }

  handleChange(e) {
    const text = e.target.value
    this.setState({
      textInput: text,
    })
    const dateRegex = /\d{2}\/\d{2}\/\d{4}/

    // check length first to avoid doing excessive regex checks
    if (text.length === 10 && dateRegex.test(text)) {
      const theDate = new Date(text)
      const isDisabled = !isValid(theDate) ||
        isBefore(theDate, new Date(this.props.minDate)) ||
        isAfter(theDate, new Date(this.props.maxDate))

      if (!isDisabled) { this.dateChange(text) }
    }
  }

  render() {
    const open = this.state.usingExternalOpenHandler ? noop : this.handleCalendarVisibility
    return (
      <div
        ref={node => {
          this.mainNode = node
        }}
      >
        <input
          name={this.props.datepickerName}
          className={this.props.datepickerClassName}
          id={this.props.datepickerId} onFocus={open}
          value={this.props.enableTextInput ?
            this.state.textInput :
            format(this.state.selectedDate, this.props.dateFormat)}
          readOnly={!this.props.enableTextInput}
          onChange={this.props.enableTextInput ? this.handleChange : null}
        />

        {this.state.showCalendar &&
          <Calendar
            startDate={this.state.selectedDate}
            dateChange={this.dateChange}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            prevButtonLabel={this.props.prevButtonLabel}
            nextButtonLabel={this.props.nextButtonLabel}
          />}
      </div>
    )
  }
}
