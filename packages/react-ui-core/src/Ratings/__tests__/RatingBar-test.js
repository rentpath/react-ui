import React from 'react'
import { mount } from 'enzyme'
import theme from './mocks/theme'
import ThemedRatingBar from '../RatingBar'

const RatingBar = ThemedRatingBar.WrappedComponent

describe('RatingBar', () => {
  it('has a default maxScore', () => {
    const wrapper = mount(<RatingBar />)
    expect(wrapper.find('svg').length).toBe(5)
  })

  it('renders empty Ratings when rating is not provided', () => {
    const wrapper = mount(<RatingBar maxScore={5} />)
    expect(wrapper.find('svg').length).toBe(5)
  })

  describe('classNames', () => {
    it('renders a "blue" className when color blue is passed', () => {
      const wrapper = mount(<RatingBar maxScore={1} theme={theme} color="blue" />)
      expect(wrapper.find('.RatingBar_Item-blue').length).toBe(1)
    })

    it('does not render a "red" className when color does not exist in theme', () => {
      const wrapper = mount(<RatingBar maxScore={1} theme={theme} color="red" />)
      expect(wrapper.find('.RatingBar_Item-red').length).toBe(0)
    })
  })

  describe('ratings', () => {
    it('fills 1 of 5 rating items', () => {
      const wrapper = mount(<RatingBar maxScore={5} score={1} />)
      const gradient = wrapper.find('LinearGradient')
      expect(gradient.at(0).prop('width')).toBe('100%')
      expect(gradient.at(1).prop('width')).toBe('0%')
      expect(gradient.at(2).prop('width')).toBe('0%')
      expect(gradient.at(3).prop('width')).toBe('0%')
      expect(gradient.at(4).prop('width')).toBe('0%')
    })

    it('fills 3.5 of 5 rating items', () => {
      const wrapper = mount(<RatingBar maxScore={5} score={3.5} />)
      const gradient = wrapper.find('LinearGradient')
      expect(gradient.at(0).prop('width')).toBe('100%')
      expect(gradient.at(1).prop('width')).toBe('100%')
      expect(gradient.at(2).prop('width')).toBe('100%')
      expect(gradient.at(3).prop('width')).toBe('50%')
      expect(gradient.at(4).prop('width')).toBe('0%')
    })

    it('fills max when total is more than maxScore', () => {
      const wrapper = mount(<RatingBar maxScore={5} score={10} />)
      const gradient = wrapper.find('LinearGradient')
      expect(gradient.at(0).prop('width')).toBe('100%')
      expect(gradient.at(1).prop('width')).toBe('100%')
      expect(gradient.at(2).prop('width')).toBe('100%')
      expect(gradient.at(3).prop('width')).toBe('100%')
      expect(gradient.at(4).prop('width')).toBe('100%')
    })
  })
})
