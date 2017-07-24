import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../Icon'
import * as pathD from './mocks/pathd'

describe('Icon', () => {
  it('renders a Icon', () => {
    const wrapper = shallow(<Icon pathD={pathD.ARROW}/>)
    expect(wrapper.find('svg')).toHaveLength(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Icon color="red" pathD={pathD.SETTINGS}/>)
    expect(wrapper.find('svg').prop('fill')).toBe('red')
  })

  it('passes through props', () => {
    const wrapper = shallow(<Icon color="blue" pathD={pathD.SEARCH}/>)
    wrapper.find('svg').simulate('click')
    expect(wrapper.find('svg').prop('fill')).toBe('blue')
  })
})
