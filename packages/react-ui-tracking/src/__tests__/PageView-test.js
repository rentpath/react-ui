import React from 'react'
import { shallow } from 'enzyme'
import PageView from '../PageView'

describe('PageView', () => {
  describe('componentDidMount', () => {
    it('triggers a tracker pageView', () => {
      const instance = shallow(<PageView />).instance()
      const tracker = instance.tracker
      tracker.pageView = jest.fn()

      instance.componentDidMount()

      expect(tracker.pageView.mock.calls.length).toBe(1)
    })
  })

  describe('componentDidUpdate', () => {
    it('triggers a tracker pageView', () => {
      const instance = shallow(<PageView />).instance()
      const tracker = instance.tracker
      tracker.pageView = jest.fn()

      instance.componentDidUpdate()

      expect(tracker.pageView.mock.calls.length).toBe(1)
    })
  })
})
