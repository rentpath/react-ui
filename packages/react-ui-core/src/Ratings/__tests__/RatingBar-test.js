import React from 'react'
import { mount } from 'enzyme'
import RatingBar from '../RatingBar'

describe('RatingBar', () => {
  it('component renders correctly', () => {
    const wrapper = mount(<RatingBar />)
    expect(wrapper.find('svg').length).toBe(1)
  })

  it('renders a empty Ratings when rating is not provided', () => {
    const wrapper = mount(<RatingBar ratingScale={5} />)
    expect(wrapper.find('svg').length).toBe(5)
  })

  it('does not render when ratingScale is 0', () => {
    const wrapper = mount(<RatingBar ratingScale={0} />)
    expect(wrapper.find('svg').length).toBe(0)
  })

  it('renders 1 out of 5 Ratings', () => {
    const wrapper = mount(<RatingBar ratingScale={5} rating={1} />)
    const gradient = wrapper.find('LinearGradient')
    expect(gradient.at(0).prop('width')).toBe('100%')
    expect(gradient.at(1).prop('width')).toBe('0%')
    expect(gradient.at(2).prop('width')).toBe('-100%')
    expect(gradient.at(3).prop('width')).toBe('-200%')
    expect(gradient.at(4).prop('width')).toBe('-300%')
  })

  it('renders partial Ratings', () => {
    const wrapper = mount(<RatingBar ratingScale={5} rating={3.5} />)
    const gradient = wrapper.find('LinearGradient')
    expect(gradient.at(0).prop('width')).toBe('350%')
    expect(gradient.at(1).prop('width')).toBe('250%')
    expect(gradient.at(2).prop('width')).toBe('150%')
    expect(gradient.at(3).prop('width')).toBe('50%')
    expect(gradient.at(4).prop('width')).toBe('-50%')
  })

  it('renders total ratings', () => {
    const wrapper = mount(<RatingBar ratingScale={5} rating={1} total="10" />)
    expect(wrapper.find('RatingBar').prop('total')).toBe('10')
  })
})
