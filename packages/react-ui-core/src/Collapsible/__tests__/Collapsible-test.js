import React from 'react'
import { mount } from 'enzyme'
import Collapsible from '../Collapsible'

const theme = {}

describe('Collapsible', () => {
  const setup = props => {
    const wrapper = mount(
      <Collapsible theme={theme} {...props} />,
    )
    return {
      wrapper,
    }
  }

  it('removes button without nonshowableItems', () => {
    const { wrapper } = setup({ theme })
    expect(wrapper.find('button').length).toEqual(0)
  })

  describe('with nonshowableItems', () => {
    it('contains show more', () => {
      const { wrapper } = setup({ theme, nonshowableItems: 'foo' })
      expect(wrapper.find('button').text()).toContain('more')
    })
    it('expands on click and contains show less', () => {
      const { wrapper } = setup({ theme, nonshowableItems: 'foo' })
      wrapper.find('button').simulate('click')
      expect(wrapper.find('button').text()).toContain('less')
    })
    it('contracts on second click and contains show more', () => {
      const { wrapper } = setup({ theme, nonshowableItems: 'foo' })
      wrapper.find('button').simulate('click')
      expect(wrapper.find('button').text()).toContain('less')
      wrapper.find('button').simulate('click')
      expect(wrapper.find('button').text()).toContain('more')
    })
  })
})
