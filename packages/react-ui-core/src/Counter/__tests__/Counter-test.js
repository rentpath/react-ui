import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../Counter'

const theme = {}
const onClick = (type, counter) => {
  let count = counter
  if (type === 'increment') {
    count += 1
  } else {
    count = count > 1 ? count - 1 : count
  }
  return count
}

describe('Counter', () => {
  it('renders a Counter', () => {
    const wrapper = shallow(<Counter theme={theme} />)
    expect(wrapper.find('.leftUnit')).toHaveLength(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Counter id="foo" theme={theme} />)
    expect(wrapper.prop('id')).toEqual('foo')
  })
  it('passes through props', () => {
    const wrapper = shallow(<Counter id="foo" theme={theme} count={3} />)
    expect(wrapper.state('count')).toEqual(3)
  })

  it('passes through default count state', () => {
    const wrapper = shallow(<Counter id="foo" theme={theme} />)
    expect(wrapper.state('count')).toEqual(1)
  })

  describe('when counter button clicked', () => {
    it('calls a increment callback', () => {
      const wrapper = shallow(
          <Counter
            id='foo'
            theme={theme}
            onClick={onClick}
          />,
      )
      wrapper.find('span').first().simulate('click')
      expect(wrapper.state('count')).toEqual(2)
    })
    it('calls a decrement callback', () => {
      const wrapper = shallow(
          <Counter
            id='foo'
            count={3}
            theme={theme}
            count={2}
            onClick={onClick}
          />,
      )
      wrapper.find('span').last().simulate('click')
      expect(wrapper.state('count')).toEqual(1)
    })
  })
})
