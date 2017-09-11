import React from 'react'
import { shallow, mount } from 'enzyme'
import Counter from '../Counter'

const theme = {}

describe('Counter', () => {
  it('renders a Counter', () => {
    const wrapper = mount(<Counter theme={theme} />)
    expect(wrapper.find('span')).toHaveLength(5)
  })

  it('passes through props', () => {
    const wrapper = shallow(
      <Counter
        theme={theme}
        count={3}
      />,
    )
    expect(wrapper.state('count')).toEqual(3)
  })

  it('passes through default count state', () => {
    const wrapper = shallow(<Counter theme={theme} />)
    expect(wrapper.state('count')).toEqual(0)
  })

  describe('onClick', () => {
    it('maintains count between min and max', () => {
      const wrapper = shallow(<Counter min={1} count={1} max={3} />)
      const decrementer = wrapper.find('span').at(0)
      const incrementer = wrapper.find('span').at(3)
      decrementer.simulate('click')
      expect(wrapper.state('count')).toEqual(1)
      incrementer.simulate('click')
      expect(wrapper.state('count')).toEqual(2)
      incrementer.simulate('click')
      expect(wrapper.state('count')).toEqual(3)
      incrementer.simulate('click')
      expect(wrapper.state('count')).toEqual(3)
    })

    it('calls decrement callback', () => {
      const onClick = jest.fn()
      const wrapper = shallow(
        <Counter
          id="foo"
          theme={theme}
          count={2}
          onClick={onClick}
        />,
      )
      wrapper.find('span').at(0).simulate('click')
      expect(onClick).toHaveBeenCalledWith(1)
      expect(wrapper.state('count')).toEqual(1)
    })
    it('calls increment callback', () => {
      const onClick = jest.fn()
      const wrapper = shallow(
        <Counter
          id="foo"
          theme={theme}
          count={2}
          onClick={onClick}
        />,
      )
      wrapper.find('span').at(3).simulate('click')
      expect(onClick).toHaveBeenCalledWith(3)
      expect(wrapper.state('count')).toEqual(3)
    })
  })
})
