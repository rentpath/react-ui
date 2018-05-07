import React from 'react'
import { shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedRatingBar from '../RatingBar'

const RatingBar = ThemedRatingBar.WrappedComponent

describe('RatingBar', () => {
  it('renders empty Ratings when rating is not provided', () => {
    const wrapper = shallow(<RatingBar maxScore={5} theme={theme} />)
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('ratings', () => {
    it('fills 1 of 5 rating items', () => {
      const wrapper = shallow(<RatingBar score={1} theme={theme} />)
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('fills 3.5 of 5 rating items', () => {
      const wrapper = shallow(<RatingBar score={3.5} theme={theme} />)
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('fills max when total is more than maxScore', () => {
      const wrapper = shallow(<RatingBar score={10} theme={theme} />)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
