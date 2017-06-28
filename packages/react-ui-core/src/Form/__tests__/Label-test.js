import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ThemedLabel from '../Label'
import theme from './mocks/theme'

const Label = ThemedLabel.WrappedComponent

describe('Form/Label', () => {
  it('renders a label element', () => {
    const wrapper = shallow(<Label />)
    expect(wrapper.find('label').length).to.equal(1)
  })

  it('renders label text', () => {
    const wrapper = shallow(<Label>foo</Label>)
    expect(wrapper.find('label').text()).to.equal('foo')
  })

  it('handles a "text" prop', () => {
    const wrapper = shallow(<Label text="foo" />)
    expect(wrapper.find('label').text()).to.equal('foo')
  })

  it('passes through props', () => {
    const wrapper = shallow(<Label id="label" />)
    expect(wrapper.find('label').prop('id')).to.equal('label')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Label theme={theme} />)
    expect(wrapper.find('label').prop('className')).to.equal('Label')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<Label theme={theme} className="MyLabel" />)
    const className = wrapper.find('label').prop('className')
    expect(className).to.include('Label')
    expect(className).to.include('MyLabel')
  })
})
