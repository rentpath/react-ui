import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import {
  Col,
} from '../Grid'

describe('Grid', () => {
  describe('Col', () => {
    const setup = (props = {}) => (
      shallow(<Col {...props} />)
    )

    it('renders a Column element', () => {
      const wrapper = setup()
      expect(wrapper.find('Col').length).to.equal(1)
    })

    it('passes through props', () => {
      const props = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      }
      const wrapper = setup(props)
      expect(wrapper.props()).to.include(props)
    })

    context('large', () => {
      it('prop maps to sm, md, lg', () => {
        const props = { small: 8, large: 12 }
        const wrapper = setup(props)
        expect(wrapper.prop('sm')).to.eql(props.large)
        expect(wrapper.prop('md')).to.eql(props.large)
        expect(wrapper.prop('lg')).to.eql(props.large)
      })

      it('with large=0 adds a global className', () => {
        const props = { large: 0 }
        const wrapper = setup(props)
        expect(wrapper.prop('className')).to.eql('hideOnLarge')
      })
    })
    context('small', () => {
      it('prop maps to xs', () => {
        const props = { small: 8, large: 12 }
        const wrapper = setup(props)
        expect(wrapper.prop('xs')).to.eql(props.small)
      })
      it('with small=0 adds a global className', () => {
        const props = { small: 0, large: 10 }
        const wrapper = setup(props)
        expect(wrapper.prop('className')).to.eql('hideOnSmall')
      })
    })
  })
})
