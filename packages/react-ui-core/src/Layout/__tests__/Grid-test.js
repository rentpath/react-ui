import React from 'react'
import { shallow } from 'enzyme'
import { Col } from '../Grid'

describe('Grid', () => {
  describe('Col', () => {
    const setup = (props = {}) => (
      shallow(<Col {...props} />)
    )

    it('renders a Column element', () => {
      const wrapper = setup()
      expect(wrapper.find('Col').length).toBe(1)
    })

    it('passes through props', () => {
      const props = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      }
      const wrapper = setup(props)
      expect(wrapper.props()).toMatchObject(props)
    })

    it('with sm=0 adds a global className', () => {
      const props = { sm: 0 }
      const wrapper = setup(props)
      expect(wrapper.prop('className')).toBe('hideOnLarge')
    })

    it('with xs=0 adds a global className', () => {
      const props = { xs: 0 }
      const wrapper = setup(props)
      expect(wrapper.prop('className')).toBe('hideOnSmall')
    })
  })
})
