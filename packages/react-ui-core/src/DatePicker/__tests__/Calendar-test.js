import React from 'react'
import { shallow } from 'enzyme'
import { format, getDaysInMonth } from 'date-fns'
import Calendar from '../Calendar'

describe('Calendar', () => {
  it('initialises with todays date if startDate prop is not defined', () => {
    const calendar = shallow(<Calendar />)
    const dateFormat = 'DD-MM-YYYY'
    const todaysDate = format(new Date(), dateFormat)
    expect(format(calendar.state().date, dateFormat)).toEqual(todaysDate)
  })

  it('date can be formatted by prop', () => {
    const calendar = shallow(<Calendar dateFormat="YYYY-MM-DD" />)
    expect(format(calendar.state().date, 'YYYY-MM-DD')).toEqual(format(new Date(), 'YYYY-MM-DD'))
  })

  it('initialises with startDate prop if defined', () => {
    const date = new Date(2010, 0, 10)
    const calendar = shallow(<Calendar startDate={date} />)
    expect(calendar.state().date).toEqual(date)
  })

  it('displays the correct ashallow of days', () => {
    const date = new Date(2016, 11)
    const calendar = shallow(<Calendar startDate={date} />)
    expect(getDaysInMonth(calendar.state().date)).toEqual(31)
  })

  it('can move to the next month', () => {
    const date = new Date(2016, 10)
    const calendar = shallow(<Calendar startDate={date} />)
    calendar.instance().nextMonth(date)
    expect(calendar.state().date).toEqual(new Date(2016, 11))
  })

  it('can move to the previous month', () => {
    const date = new Date(2016, 10)
    const calendar = shallow(<Calendar startDate={date} />)
    calendar.instance().previousMonth(date)
    expect(calendar.state().date).toEqual(new Date(2016, 9))
  })

  it('selecting a date updates state if current or future date', () => {
    const eventDate = 'Thu Dec 01 2019 00:00:00'
    const node = {
      target: {
        dataset: {
          date: eventDate,
        },
      },
    }

    const startDate = new Date(2016, 1, 1)
    const calendar = shallow(<Calendar dateChange={jest.fn()} startDate={startDate} />)

    calendar.instance().handleDateSelected(node)
    expect(calendar.state().selectedDate).toEqual(new Date(eventDate))
  })

  it('selecting a date does not update state if < minDate', () => {
    const node = {
      target: {
        dataset: {
          date: 'Thu Dec 01 2012 00:00:00 GMT+0000 (GMT)',
        },
      },
    }

    const date = new Date(2017, 2, 2)
    const calendar = shallow(<Calendar startDate={date} dateChange={jest.fn()} />)

    calendar.instance().handleDateSelected(node)
    expect(calendar.state().selectedDate).toEqual(date)
  })

  it('selecting a date does not update state if > maxDate', () => {
    const node = {
      target: {
        dataset: {
          date: 'Dec 01 2018 00:00:00',
        },
      },
    }

    const startDate = new Date(2017, 1, 1)
    const maxDate = new Date(2018, 10, 30)
    const calendar = shallow(
      <Calendar
        startDate={startDate}
        dateChange={jest.fn()}
        maxDate={maxDate}
      />
    )

    calendar.instance().handleDateSelected(node)
    expect(calendar.state().selectedDate).toEqual(startDate)
  })

  it('calendar prevButton and nextButton props are set to arrows by default, accepts alternate labels', () => {
    const calendar = shallow(<Calendar />)
    expect(calendar.find('.react-datepicker-next').text()).toBe('→')
    expect(calendar.find('.react-datepicker-previous').text()).toBe('←')

    const calendar2 = shallow(<Calendar nextButtonLabel={'next'} prevButtonLabel={'prev'} />)
    expect(calendar2.find('.react-datepicker-next').text()).toBe('next')
    expect(calendar2.find('.react-datepicker-previous').text()).toBe('prev')
  })
})
