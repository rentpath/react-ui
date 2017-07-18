import React from 'react'
import { shallow } from 'enzyme'
import Text from '../Text'

describe('Text', () => {
  const theme = { Text: 'Text' }

  it('renders a div element', () => {
    const wrapper = shallow(<Text />)
    expect(wrapper.find('div').length).toBe(1)
  })

  it('renders a custom tag', () => {
    const wrapper = shallow(<Text tag="span" />)
    expect(wrapper.find('span').length).toBe(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Text id="foo" />)
    expect(wrapper.find('div').prop('id')).toBe('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Text theme={theme} />)
    expect(wrapper.find('div').prop('className')).toBe('Text')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<Text theme={theme} className="MyText" />)
    const className = wrapper.find('div').prop('className')
    expect(className).toContain('Text')
    expect(className).toContain('MyText')
  })
})
