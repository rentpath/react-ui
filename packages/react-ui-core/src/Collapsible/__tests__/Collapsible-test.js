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
  it('renders div elements', () => {
    const { wrapper } = setup({ theme })
    expect(wrapper.find('div').length).toBe(3)
  })
  it('contains show more', () => {
    const { wrapper } = setup({ theme })
    expect(wrapper.find('button').text()).toContain('more')
  })
  it('expands on click and contains show less', () => {
    const { wrapper } = setup({ theme })
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button').text()).toContain('less')
  })
  it('contracts on second click and contains show more', () => {
    const { wrapper } = setup({ theme })
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button').text()).toContain('less')
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button').text()).toContain('more')
  })
})
