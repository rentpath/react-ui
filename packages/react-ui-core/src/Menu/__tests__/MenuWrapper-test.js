import React from 'react'
import { shallow } from 'enzyme'
import MenuWrapper from '../MenuWrapper'
import Menu from '../Menu'

describe('MenuWrapper', () => {
  it('calls the onItemSelect function when Menu onItemSelect is called', () => {
    const onItemSelect = jest.fn()
    const wrapper = shallow(<MenuWrapper onItemSelect={onItemSelect} />)
    wrapper.find(Menu).props().onItemSelect()
    expect(onItemSelect).toHaveBeenCalled()
  })
  it('calls the onSelect function when Menu onItemSelect is called', () => {
    const onSelect = jest.fn()
    const wrapper = shallow(<MenuWrapper onSelect={onSelect} />)
    wrapper.find(Menu).props().onItemSelect()
    expect(onSelect).toHaveBeenCalled()
  })
})
