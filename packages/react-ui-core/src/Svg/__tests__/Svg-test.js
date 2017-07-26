import React from 'react'
import { shallow } from 'enzyme'
import Svg from '../Svg'
import * as pathD from './mocks/pathd'

describe('Svg', () => {
  it('renders a Svg', () => {
    const wrapper = shallow(<Svg pathD={pathD.ARROW}/>)
    expect(wrapper.find('svg')).toHaveLength(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Svg fill="red" pathD={pathD.SETTINGS}/>)
    expect(wrapper.find('svg').prop('fill')).toBe('red')
  })

  it('passes through props', () => {
    const wrapper = shallow(<Svg fill="blue" pathD={pathD.SEARCH}/>)
    wrapper.find('svg').simulate('click')
    expect(wrapper.find('svg').prop('fill')).toBe('blue')
  })
})
