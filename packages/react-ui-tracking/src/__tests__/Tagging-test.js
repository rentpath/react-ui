import React from 'react'
import { shallow } from 'enzyme'
import Tagging from '../Tagging'

describe('Tagging', () => {
  describe('componentDidMount', () => {
    it('registers the component instance', () => {
      const instance = shallow(<Tagging />).instance()
      const tracker = instance.tracker
      tracker.register = jest.fn()

      instance.componentDidMount()

      expect(tracker.register.mock.calls.length).toBe(1)
    })

    it('triggers a tracker update', () => {
      const instance = shallow(<Tagging />).instance()
      const tracker = instance.tracker
      tracker.update = jest.fn()

      instance.componentDidMount()

      expect(tracker.update.mock.calls.length).toBe(1)
    })
  })

  describe('componentDidUpdate', () => {
    it('triggers a tracker update', () => {
      const instance = shallow(<Tagging />).instance()
      const tracker = instance.tracker
      tracker.update = jest.fn()

      instance.componentDidUpdate()

      expect(tracker.update.mock.calls.length).toBe(1)
    })
  })

  describe('componentWillUnmount', () => {
    it('unregisters the component instance', () => {
      const instance = shallow(<Tagging />).instance()
      const tracker = instance.tracker
      tracker.unregister = jest.fn()

      instance.componentWillUnmount()

      expect(tracker.unregister.mock.calls.length).toBe(1)
    })

    it('triggers a tracker update', () => {
      const instance = shallow(<Tagging />).instance()
      const tracker = instance.tracker
      tracker.update = jest.fn()

      instance.componentWillUnmount()

      expect(tracker.update.mock.calls.length).toBe(1)
    })
  })

  describe('render', () => {
    it('returns null', () => {
      const wrapper = shallow(<Tagging />)
      expect(wrapper.html()).toBe(null)
    })
  })
})
