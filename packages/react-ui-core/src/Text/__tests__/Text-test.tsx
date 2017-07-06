import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Text from '../Text'

describe('Text', () => {
  const theme = { Text: 'Text' }

  it('renders a div element', () => {
    const wrapper = shallow(<Text />)
    expect(wrapper.find('div').length).to.equal(1)
  })

  it('renders a custom tag', () => {
    const wrapper = shallow(<Text tag="span" />)
    expect(wrapper.find('span').length).to.equal(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Text id="foo" />)
    expect(wrapper.find('div').prop('id')).to.equal('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Text theme={theme} />)
    expect(wrapper.find('div').prop('className')).to.equal('Text')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<Text theme={theme} className="MyText" />)
    const className = wrapper.find('div').prop('className')
    expect(className).to.include('Text')
    expect(className).to.include('MyText')
  })
})
