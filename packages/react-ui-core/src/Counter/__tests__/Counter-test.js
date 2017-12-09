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

  describe('when props are changed after mount', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Counter
          theme={theme}
          count={3}
        />,
      )
    })

    it('updates the state for counter', () => {
      wrapper.setProps({ count: 10 })
      expect(wrapper.state('count')).toEqual(10)
      expect(wrapper.find('[data-tid="counter-text"]').text()).toEqual('10')
    })
  })

  describe('custom text', () => {
    it('uses the default "count" prop when no texst provided', () => {
      const count = 2
      const wrapper = mount(<Counter theme={theme} count={count} />)
      expect(wrapper.find('.Counter_Text').getDOMNode().innerHTML).toEqual(String(count))
    })

    describe('when text is a function', () => {
      it('generates text using count', () => {
        const text = num => `this is a test for count ${num}`
        const expected = 'this is a test for count 2'
        const wrapper = mount(<Counter theme={theme} count={2} text={text} />)
        expect(wrapper.find('.Counter_Text').getDOMNode().innerHTML).toEqual(expected)
      })

      it('generates text using count after increment / decrement', () => {
        const text = num => `count is ${num}`
        const wrapper = mount(<Counter count={1} theme={theme} text={text} />)
        const decrementer = wrapper.find('.Counter_Decrement > span')
        const incrementer = wrapper.find('.Counter_Increment > span')

        const html = node => (
          node.find('.Counter_Text').getDOMNode().innerHTML
        )

        incrementer.simulate('click')
        expect(html(wrapper)).toEqual('count is 2')
        decrementer.simulate('click')
        expect(html(wrapper)).toEqual('count is 1')
      })
    })
  })

  describe('onClick', () => {
    it('maintains count between min and max', () => {
      const onClick = jest.fn()
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

    it('does not allow clicks to propogate from outer div', () => {
      const onClick = jest.fn()
      const wrapper = mount(
        <Counter
          min={1}
          count={1}
          max={3}
          theme={theme}
          className="wrappingDiv"
          onClick={onClick}
        />
      )
      const outerDiv = wrapper.find('div.wrappingDiv')
      outerDiv.simulate('click')
      expect(wrapper.prop('onClick')).not.toBeCalled()
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
