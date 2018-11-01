import React from 'react'
import { shallow } from 'enzyme'
import format from 'date-fns/format'
import DatePicker from '../DatePicker'
import Calendar from '../Calendar'
import Input from '../../Form/Input'

const DATE_FORMAT = 'MM-dd-YYYY'

describe('DatePicker', () => {
  const setup = props => (
    shallow(
      <DatePicker
        {...props}
      />
    )
  )

  describe('value', () => {
    it('there is no date set when no `value` passed', () => {
      const wrapper = setup()
      expect(wrapper.state('value')).toBeUndefined()
    })

    it('uses `value` and formats it correctly when passed in and valid', () => {
      const value = '10-10-2025'
      const wrapper = setup({ value })
      expect(wrapper.state('value')).toEqual('10/10/2025')
    })
  })

  describe('readOnly', () => {
    it('passes `false` by default to Input', () => {
      const wrapper = setup()
      expect(wrapper.find(Input).prop('readOnly')).toBe(false)
    })

    it('passes `true` into Input when set', () => {
      const wrapper = setup({ readOnly: true })
      expect(wrapper.find(Input).prop('readOnly')).toBe(true)
    })
  })

  describe('initial state', () => {
    it('hides the calendar by default', () => {
      const wrapper = setup()
      expect(wrapper.state('showCalendar')).toBe(false)
    })

    describe('when `value` is a valid date', () => {
      const values = ['11/11/2025', '9/9/2025', '9-9-2025', '11-11-2025']

      values.forEach(value => {
        it(`formats ${value} to ${DATE_FORMAT} and sets 'isValidDate' to true`, () => {
          const wrapper = setup({ value, dateFormat: DATE_FORMAT })
          const date = format(new Date(value), DATE_FORMAT)

          expect(wrapper.state('value')).toEqual(date)
          expect(wrapper.state('isValidDate')).toBe(true)
        })
      })
    })

    it('does not format the `value` and sets `isValidDate` to false when value is not valid', () => {
      const value = '1/32/2018'
      const wrapper = setup({ value })
      expect(wrapper.state('value')).toEqual(value)
      expect(wrapper.state('isValidDate')).toBe(false)
    })
  })

  describe('onOutsideClick', () => {
    it('sets `showCalendar` to false when not clicked on the target ref', () => {
      const wrapper = setup({ showCalendar: true })
      const contains = jest.fn()
      wrapper.instance().picker = { current: { contains } }
      wrapper.instance().onOutsideClick({})
      expect(wrapper.state('showCalendar')).toBe(false)
      expect(contains).toHaveBeenCalledTimes(1)
    })

    it('does not change the state of `showCalendar` when target ref matches', () => {
      const wrapper = setup({ showCalendar: true })
      const contains = jest.fn().mockReturnValue(true)
      wrapper.instance().picker = { current: { contains } }
      wrapper.instance().onOutsideClick({})
      expect(wrapper.state('showCalendar')).toBe(true)
      expect(contains).toHaveBeenCalledTimes(1)
    })
  })

  describe('dateChange', () => {
    it('calls `handleDateChange` with the parameter passed in when exists', () => {
      const onChange = jest.fn()
      const selectedDate = new Date('11/11/2025')
      const wrapper = setup({ showCalendar: true, onChange })
      wrapper.instance().dateChange(selectedDate)
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith(selectedDate)
    })

    it('does not call `handleDateChange` when the prop does not exist', () => {
      const onChange = jest.fn()
      const wrapper = setup({ showCalendar: true })
      wrapper.instance().dateChange()
      expect(onChange).toHaveBeenCalledTimes(0)
    })

    it('sets `showCalendar` to true, `isValidDate` to true and formats the value', () => {
      const onChange = jest.fn()
      const selectedDate = new Date('11/11/2025')
      const wrapper = setup({ showCalendar: true, onChange })
      wrapper.instance().dateChange(selectedDate)

      expect(wrapper.state('showCalendar')).toBe(false)
      expect(wrapper.state('isValidDate')).toBe(true)
      expect(wrapper.state('value')).toEqual(format(selectedDate, wrapper.instance().props.dateFormat))
    })
  })

  describe('handleCalendarVisibility', () => {
    it('toggles `showCalendar` to true when false', () => {
      const wrapper = setup()
      expect(wrapper.state('showCalendar')).toBe(false)
      wrapper.instance().handleCalendarVisibility()
      expect(wrapper.state('showCalendar')).toBe(true)
    })

    it('toggles `showCalendar` to false when true', () => {
      const wrapper = setup({ showCalendar: true })
      expect(wrapper.state('showCalendar')).toBe(true)
      wrapper.instance().handleCalendarVisibility()
      expect(wrapper.state('showCalendar')).toBe(false)
    })
  })

  describe('validateTextField', () => {
    it('calls `dateChange` if the date is invalid, passes the data regex and is not disabled', () => {
      const value = '11-11-2025'
      const event = { target: { value } }
      const wrapper = setup({ showCalendar: true })
      const spy = jest.fn()

      wrapper.instance().dateChange = spy
      wrapper.instance().validateTextField(event)
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('does not do anything if the date is valid', () => {
      const event = { target: { value: null } }
      const wrapper = setup({ isValidDate: true })
      const spy = jest.fn()

      wrapper.instance().dateChange = spy
      wrapper.instance().validateTextField(event)
      expect(spy).toHaveBeenCalledTimes(0)
    })

    it('does not do anything if the date does not pass the valid regex check', () => {
      const value = 'f00/11/200'
      const event = { target: { value } }
      const wrapper = setup({ isValidDate: false })
      const spy = jest.fn()

      wrapper.instance().dateChange = spy
      wrapper.instance().validateTextField(event)
      expect(spy).toHaveBeenCalledTimes(0)
    })
  })

  describe('handleChange', () => {
    describe('when the value passes the regex `dateFormat` check', () => {
      it('calls `validateTextField`', () => {
        const value = '11/11/2025'
        const event = { target: { value } }
        const wrapper = setup()
        const spy = jest.fn()

        wrapper.instance().validateTextField = spy
        wrapper.instance().handleChange(event)
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith(event)
      })
    })

    describe('when the value does not pass the regex `dateFormat` check', () => {
      it('hides the calendar, sets the value and the date to invalid', () => {
        const value = '11-11-2025'
        const event = { target: { value } }
        const wrapper = setup({ showCalendar: true })
        const spy = jest.fn()

        wrapper.instance().validateTextField = spy
        wrapper.setState({
          isValidDate: true,
        }, () => {
          wrapper.instance().handleChange(event)
        })

        expect(spy).toHaveBeenCalledTimes(0)
        expect(wrapper.state('showCalendar')).toBe(false)
        expect(wrapper.state('isValidDate')).toBe(false)
        expect(wrapper.state('value')).toEqual(value)
      })
    })
  })

  describe('Input component', () => {
    it('passes extra props through', () => {
      const wrapper = setup({ 'data-foo': 'bar' })
      expect(wrapper.find(Input).prop('data-foo')).toEqual('bar')
    })

    it('has static props passed and are not overwritten by custom ones', () => {
      const wrapper = setup({
        value: '11-11-2025',
        onFocus: jest.fn(),
        onBlur: jest.fn(),
        onChange: jest.fn(),
      })
      const input = wrapper.find(Input)

      expect(input.prop('value')).toEqual('11/11/2025')
      expect(input.prop('onFocus')).toEqual(wrapper.instance().handleCalendarVisibility)
      expect(input.prop('onChange')).toEqual(wrapper.instance().handleChange)
      expect(input.prop('onBlur')).toEqual(wrapper.instance().validateTextField)
    })
  })

  describe('Calendar component', () => {
    describe('render', () => {
      it('does not show the compoennt if `showCalendar` is false', () => {
        const wrapper = setup({ showCalendar: false })
        expect(wrapper.find(Calendar)).toHaveLength(0)
      })

      it('shows the component if `showCalendar` is true', () => {
        const wrapper = setup({ showCalendar: true })
        expect(wrapper.find(Calendar)).toHaveLength(1)
      })
    })

    describe('isValidDate', () => {
      it('passes `undefined` if date is invalid', () => {
        const wrapper = setup({ showCalendar: true })

        wrapper.setState({ isValidDate: false }, () => {
          expect(wrapper.find(Calendar).prop('value')).toBeUndefined()
        })
      })

      it('passes a date object if valid', () => {
        const value = '11/11/2025'
        const wrapper = setup({ showCalendar: true, value })

        wrapper.setState({ isValidDate: true }, () => {
          expect(wrapper.find(Calendar).prop('value')).toEqual(new Date(value))
        })
      })
    })

    it('passes correct props through', () => {
      const minDate = new Date('11/10/2025')
      const maxDate = new Date('11/11/2025')
      const prevButtonLabel = '< Previous'
      const nextButtonLabel = 'Next >'
      const wrapper = setup({
        showCalendar: true,
        minDate,
        maxDate,
        prevButtonLabel,
        nextButtonLabel,
      })
      const cal = wrapper.find(Calendar)

      expect(cal.prop('minDate')).toEqual(minDate)
      expect(cal.prop('maxDate')).toEqual(maxDate)
      expect(cal.prop('prevButtonLabel')).toEqual(prevButtonLabel)
      expect(cal.prop('nextButtonLabel')).toEqual(nextButtonLabel)
      expect(cal.prop('dateChange')).toEqual(wrapper.instance().dateChange)
    })
  })
})
