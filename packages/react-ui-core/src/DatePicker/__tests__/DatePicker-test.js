import React from 'react'
import { shallow } from 'enzyme'
import addDays from 'date-fns/add_days'
import DatePicker from '../DatePicker'

describe('DatePicker', () => {
  it('calendar should be hidden by default', () => {
    const datepicker = shallow(<DatePicker />)
    expect(datepicker.state().showCalendar).toBeFalsy()
  })

  it('input should be readOnly by default', () => {
    const datepicker = shallow(<DatePicker />)
    const input = datepicker.find('input')

    expect(input.props().readOnly).toBeTruthy()

    input.simulate('change', { target: { value: '10/10/2010' } })
    expect(input.props().value).not.toBe('10/10/2010')
  })

  it('if passed enableTextInput, input should accept typed text', () => {
    const datepicker = shallow(<DatePicker dateFormat="MM/DD/YYYY" enableTextInput />)
    const input = datepicker.find('input')

    expect(input.props().readOnly).toBeFalsy()

    input.simulate('change', { target: { value: '10/10/2010' } })

    expect(datepicker.find('input').prop('value')).toBe('10/10/2010')
  })

  it('if passed enableTextInput, state should only change on valid date', () => {
    const startDate = new Date('2020-01-04T06:00:00.000Z')
    const datepicker = shallow(<DatePicker dateFormat="MM/DD/YYYY" startDate={startDate} enableTextInput />)
    const input = datepicker.find('input')

    input.simulate('change', { target: { value: '10/10/201a' } })
    expect(datepicker.state().selectedDate).toBe(startDate)

    input.simulate('change', { target: { value: '10/10/2020' } })
    expect(datepicker.state().selectedDate).toBe('10/10/2020')

    input.simulate('change', { target: { value: 'ZZ/10/2020' } })
    expect(datepicker.state().selectedDate).toBe('10/10/2020')
  })

  it('if passed enableTextInput, should respect mindate & maxdate', () => {
    const startDate = new Date('2020-01-04T06:00:00.000Z')
    const datepicker = shallow(
      <DatePicker
        dateFormat="MM/DD/YYYY"
        startDate={startDate}
        minDate={startDate}
        maxDate={addDays(startDate, 10)}
        enableTextInput
      />
    )
    const input = datepicker.find('input')

    input.simulate('change', { target: { value: '01/10/2020' } })
    expect(datepicker.state().selectedDate).toBe('01/10/2020')

    input.simulate('change', { target: { value: '01/15/2020' } })
    expect(datepicker.state().selectedDate).toBe('01/10/2020')

    input.simulate('change', { target: { value: '01/03/2020' } })
    expect(datepicker.state().selectedDate).toBe('01/10/2020')
  })

  it('selecting a date updates date state and hides component', () => {
    const datepicker = shallow(<DatePicker />)
    datepicker.instance().dateChange('Thu Dec 01 2019 00:00:00 GMT+0000 (GMT)')
    expect(datepicker.state().selectedDate).toEqual('Thu Dec 01 2019 00:00:00 GMT+0000 (GMT)')
    expect(datepicker.state().showCalendar).toBeFalsy()
  })

  it('handleCalendarVisibility updates visibility of component', () => {
    const datepicker = shallow(<DatePicker />)
    datepicker.instance().handleCalendarVisibility()
    expect(datepicker.state().showCalendar).toBeTruthy()

    datepicker.instance().handleCalendarVisibility()
    expect(datepicker.state().showCalendar).toBeFalsy()
  })
})
