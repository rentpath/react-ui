import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ThemedFieldSet from '../FieldSet'
import theme from './mocks/theme'

const FieldSet = ThemedFieldSet.WrappedComponent

describe('Form/FieldSet', () => {
  it('renders a fieldset element', () => {
    const wrapper = shallow(<FieldSet />)
    expect(wrapper.find('fieldset').length).to.equal(1)
  })

  it('renders a legend element', () => {
    const wrapper = shallow(<FieldSet legend="foo" />)
    expect(wrapper.find('legend').text()).to.equal('foo')
  })

  it('passes through props', () => {
    const wrapper = shallow(<FieldSet id="foo" />)
    expect(wrapper.find('fieldset').prop('id')).to.equal('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<FieldSet theme={theme} />)
    expect(wrapper.find('fieldset').prop('className')).to.equal('FieldSet')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<FieldSet theme={theme} className="MyFieldSet" />)
    const className = wrapper.find('fieldset').prop('className')
    expect(className).to.include('FieldSet')
    expect(className).to.include('MyFieldSet')
  })
})
