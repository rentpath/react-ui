import React from 'react'
import { shallow } from 'enzyme'
import format from 'date-fns/format'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import ThemedCalendar from '../Calendar'

const theme = {
  'Calendar_Date-active': 'Calendar_Date-active',
  'Calendar_Date-disabled': 'Calendar_Date-disabled',
}

const Calendar = ThemedCalendar.WrappedComponent
const DATE_FORMAT = 'MM-dd-yyyy'

describe('Calendar', () => {
  const setup = props => (
    shallow(
      <Calendar
        theme={theme}
        {...props}
      />
    )
  )

  describe('date state', () => {
    it('uses default of today date if no value', () => {
      const wrapper = setup()
      const date = wrapper.state().date
      expect(format(date, DATE_FORMAT)).toEqual(format(new Date(), DATE_FORMAT))
    })

    it('uses `value` prop when passed in', () => {
      const value = new Date('10/10/2018')
      const wrapper = setup({ value })
      const date = wrapper.state().date
      expect(format(date, DATE_FORMAT)).toEqual(format(new Date('10/10/2018'), DATE_FORMAT))
    })
  })

  describe('dateFormat', () => {
    it('uses default `dateFormat` when none passed', () => {
      const wrapper = setup()
      const date = wrapper.state().date
      const dateFormat = wrapper.instance().props.dateFormat
      expect(format(date, dateFormat)).toEqual(format(new Date(), dateFormat))
    })

    it('uses custom `dateFormat` when passed', () => {
      const dateFormat = 'yyyy-MM-dd'
      const wrapper = setup({ dateFormat })
      const date = wrapper.state().date
      expect(format(date, dateFormat)).toEqual(format(new Date(), dateFormat))
    })
  })

  describe('minDate', () => {
    it('uses default of today date if none passed', () => {
      const wrapper = setup()
      const date = wrapper.instance().props.minDate
      expect(format(date, DATE_FORMAT)).toEqual(format(new Date(), DATE_FORMAT))
    })

    it('uses `minDate` prop when passed in', () => {
      const minDate = new Date('10/10/2018')
      const wrapper = setup({ minDate })
      const date = wrapper.instance().props.minDate
      expect(format(date, DATE_FORMAT)).toEqual(format(new Date('10/10/2018'), DATE_FORMAT))
    })
  })

  describe('maxDate', () => {
    it('does not set a default if none passed', () => {
      const wrapper = setup()
      const date = wrapper.instance().props.maxDate
      expect(date).toBeUndefined()
    })

    it('uses `maxDate` prop when passed in', () => {
      const maxDate = new Date('10/10/2025')
      const wrapper = setup({ maxDate })
      const date = wrapper.instance().props.maxDate
      expect(format(date, DATE_FORMAT)).toEqual(format(new Date('10/10/2025'), DATE_FORMAT))
    })
  })

  describe('labels', () => {
    it('uses defaults if none passed', () => {
      const wrapper = setup()
      const { prevButtonLabel, nextButtonLabel } = wrapper.instance().props
      expect(prevButtonLabel).toEqual(String.fromCharCode(8592))
      expect(nextButtonLabel).toEqual(String.fromCharCode(8594))
    })

    it('uses custom labels when passed in', () => {
      const wrapper = setup({
        prevButtonLabel: 'Previous',
        nextButtonLabel: 'Next',
      })
      const { prevButtonLabel, nextButtonLabel } = wrapper.instance().props
      expect(prevButtonLabel).toEqual('Previous')
      expect(nextButtonLabel).toEqual('Next')
    })
  })

  describe('daysOfMonth', () => {
    const disabledCls = theme['Calendar_Date-disabled']
    const activeCls = theme['Calendar_Date-active']

    it('sets the correct active day', () => {
      const value = new Date('11/28/2025')
      const wrapper = setup({ value })
      const active = wrapper.find('[data-date="11/28/2025"]')
      expect(active.prop('className')).toContain(activeCls)
    })

    it('sets the correct disabled min days', () => {
      const minDate = new Date('11/04/2025')
      const value = new Date('11/12/2025')
      const wrapper = setup({ minDate, value })
      const buttons = wrapper.find('[data-tid="calendar-dates"]')

      expect(buttons.childAt(0).prop('className')).toContain(disabledCls)
      expect(buttons.childAt(1).prop('className')).toContain(disabledCls)
      expect(buttons.childAt(2).prop('className')).toContain(disabledCls)
      expect(buttons.childAt(3).prop('className')).not.toContain(disabledCls)

      wrapper.instance().previousMonth()
      wrapper.update()

      const previousMonthButtons = wrapper.find('[data-tid="calendar-dates"]')
      expect(previousMonthButtons.children().last().prop('className')).toContain(disabledCls)
    })

    it('sets the correct disabled max days', () => {
      const value = new Date('11/12/2025')
      const maxDate = new Date('11/28/2025')
      const wrapper = setup({ maxDate, value })
      const buttons = wrapper.find('[data-tid="calendar-dates"]')

      expect(buttons.childAt(27).prop('className')).not.toContain(disabledCls)
      expect(buttons.childAt(28).prop('className')).toContain(disabledCls)
      expect(buttons.childAt(29).prop('className')).toContain(disabledCls)

      wrapper.instance().nextMonth()
      wrapper.update()

      const nextMonthButtons = wrapper.find('[data-tid="calendar-dates"]')
      expect(nextMonthButtons.children().first().prop('className')).toContain(disabledCls)
    })

    it('sets the `data-date` based on the `dateFormat`', () => {
      const value = new Date('11/1/2025')
      const wrapper = setup({ value })
      const dateFormat = wrapper.instance().props.dateFormat
      const button = wrapper.find('[data-tid="calendar-dates"]').childAt(0)
      expect(button.prop('data-date')).toEqual(format(value, dateFormat))
    })
  })

  it('displays the correct amount of days', () => {
    const value = new Date(2016, 11)
    const wrapper = setup({ value })
    expect(getDaysInMonth(wrapper.state().date)).toEqual(31)
  })

  it('can move to the next month', () => {
    const value = new Date(2016, 10)
    const wrapper = setup({ value })
    wrapper.instance().nextMonth(value)
    expect(wrapper.state().date).toEqual(new Date(2016, 11))
  })

  it('can move to the previous month', () => {
    const value = new Date(2016, 10)
    const wrapper = setup({ value })
    wrapper.instance().previousMonth(value)
    expect(wrapper.state().date).toEqual(new Date(2016, 9))
  })

  describe('handleDateSelected', () => {
    const event = date => ({
      target: {
        dataset: { date },
      },
    })

    it('updates state if current or future date', () => {
      const dateChange = jest.fn()
      const targetDate = new Date(2030, 1, 1)
      const e = event(targetDate)
      const value = new Date(2016, 1, 1)
      const wrapper = setup({ value, dateChange })

      wrapper.instance().handleDateSelected(e)
      expect(wrapper.state().selectedDate).toEqual(new Date(targetDate))
      expect(dateChange).toHaveBeenCalledTimes(1)
    })

    it('does not update state if < minDate', () => {
      const dateChange = jest.fn()
      const today = format(new Date(), DATE_FORMAT)
      const targetDate = new Date(2012, 1, 1)
      const e = event(targetDate)
      const wrapper = setup({ dateChange })

      wrapper.instance().handleDateSelected(e)
      expect(format(wrapper.state().selectedDate, DATE_FORMAT)).toEqual(today)
      expect(dateChange).toHaveBeenCalledTimes(0)
    })

    it('does not update state if > maxDate', () => {
      const dateChange = jest.fn()
      const targetDate = new Date(2025, 12, 1)
      const e = event(targetDate)
      const value = new Date(2017, 1, 1)
      const maxDate = new Date(2022, 10, 30)
      const wrapper = setup({ value, maxDate })

      wrapper.instance().handleDateSelected(e)
      expect(wrapper.state().selectedDate).toEqual(value)
      expect(dateChange).toHaveBeenCalledTimes(0)
    })
  })
})
