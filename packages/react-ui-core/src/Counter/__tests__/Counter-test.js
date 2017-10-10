import React from 'react'
import { shallow, mount } from 'enzyme'
import ThemedCounter from '../Counter'
import theme from './mocks/theme'

const Counter = ThemedCounter.WrappedComponent

describe('Counter', () => {
  it('renders a Counter', () => {
    const wrapper = mount(<Counter theme={theme} />)
    expect(wrapper.find('span')).toHaveLength(5)
  })

  it('passes through props', () => {
    const wrapper = mount(
      <Counter
        theme={theme}
        count={3}
      />,
    )
    expect(wrapper.prop('count')).toEqual(3)
  })

  it('passes through default count state', () => {
    const wrapper = mount(<Counter theme={theme} />)
    expect(wrapper.prop('count')).toEqual(0)
  })

  describe('onClick', () => {
    it('maintains count between min and max', () => {
      const wrapper = mount(
        <Counter
          min={1}
          count={1}
          max={3}
          theme={theme}
        />
      )
      const decrementer = wrapper.find('.Counter_Decrement > span')
      const incrementer = wrapper.find('.Counter_Increment > span')

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
