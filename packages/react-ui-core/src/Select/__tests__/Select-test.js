import React from 'react'
import { shallow } from 'enzyme'
import ThemedSelect from '../Select'
import theme from './mocks/theme'

const Select = ThemedSelect.WrappedComponent

describe('Form/Select', () => {
  it('renders a select element', () => {
    const wrapper = shallow(<Select />)
    expect(wrapper.find('select').length).toBe(1)
  })

  it('passes through props', () => {
    const wrapper = shallow(<Select id="foo" />)
    expect(wrapper.find('select').prop('id')).toBe('foo')
  })

  it('applies a theme className', () => {
    const wrapper = shallow(<Select theme={theme} />)
    expect(wrapper.find('select').prop('className')).toBe('Select')
  })

  it('composes classNames', () => {
    const wrapper = shallow(<Select theme={theme} className="MySelect" />)
    const className = wrapper.find('select').prop('className')
    expect(className).toContain('Select')
    expect(className).toContain('MySelect')
  })

  it('renders option elements', () => {
    const options = [{ label: 'Low', value: 'low' }, { label: 'High', value: 'high' }]
    const wrapper = shallow(<Select options={options} />)
    const opts = wrapper.find('option')
    expect(opts.at(0).prop('value')).toBe('low')
    expect(opts.at(0).text()).toBe('Low')
    expect(opts.at(1).prop('value')).toBe('high')
    expect(opts.at(1).text()).toBe('High')
  })
})
