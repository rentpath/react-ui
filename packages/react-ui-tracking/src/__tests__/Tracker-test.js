import React from 'react'
import { shallow } from 'enzyme'
import Tracker from '../Tracker'

describe('Tracker', () => {
  describe('register', () => {
    it('registers component instances', () => {
      const wrapper = shallow(<Tracker />)
      const component = wrapper.instance()
      const mock = jest.fn()

      component.register(mock)

      expect(component.instances).toContain(mock)
    })
  })

  describe('unregister', () => {
    it('unregisters component instances', () => {
      const wrapper = shallow(<Tracker />)
      const component = wrapper.instance()
      const mock = jest.fn()

      component.register(mock)
      expect(component.instances).toContain(mock)

      component.unregister(mock)
      expect(component.instances).not.toContain(mock)
    })
  })

  describe('instanceProps', () => {
    it('merges props from registered components', () => {
      const wrapper = shallow(<Tracker />)
      const component = wrapper.instance()

      component.register({ props: { foo: 'foo' } })
      component.register({ props: { bar: 'bar' } })

      const props = component.instanceProps()
      expect(props).toEqual({ foo: 'foo', bar: 'bar' })
    })
  })

  describe('render', () => {
    it('renders a single child', () => {
      const wrapper = shallow(<Tracker><span /></Tracker>)
      expect(wrapper.find('span').length).toBe(1)
    })

    it('renders multiple children', () => {
      const wrapper = shallow(<Tracker><span /><span /></Tracker>)
      expect(wrapper.find('span').length).toBe(2)
    })
  })
})
