import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ThemedSelect from '../Select'
import theme from './mocks/theme'

const Select = ThemedSelect.WrappedComponent

describe('Form/Select', () => {
  it('renders a select element', () => {
    const wrapper = shallow(<Select />)
    expect(wrapper.find('select').length).to.equal(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Select id="foo" />)
    expect(wrapper.find('select').prop('id')).to.equal('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Select theme={theme} />)
    expect(wrapper.find('select').prop('className')).to.equal('Select')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<Select theme={theme} className="MySelect" />)
    const className = wrapper.find('select').prop('className')
    expect(className).to.include('Select')
    expect(className).to.include('MySelect')
  })

  it('renders option elements', () => {
    const options = [{ label: 'Low', value: 'low' }, { label: 'High', value: 'high' }]
    const wrapper = shallow(<Select options={options} />)
    const opts = wrapper.find('option')
    expect(opts.at(0).prop('value')).to.equal('low')
    expect(opts.at(0).text()).to.equal('Low')
    expect(opts.at(1).prop('value')).to.equal('high')
    expect(opts.at(1).text()).to.equal('High')
  })
})
