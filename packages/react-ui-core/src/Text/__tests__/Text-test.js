import React from 'react'
import { shallow } from 'enzyme'
import ThemedText from '../Text'

const Text = ThemedText.WrappedComponent

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

  it('has a default data-tid', () => {
    const wrapper = shallow(<Text>Test Text</Text>)
    expect(wrapper.find('[data-tid="text"]')).toHaveLength(1)
  })
  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<Text data-tid="foo">Test Text</Text>)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="text"]')).toHaveLength(0)
  })
})
