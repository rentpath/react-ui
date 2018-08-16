import React from 'react'
import { shallow } from 'enzyme'
import ThemedInput from '../Input'
import theme from './mocks/theme'

const Input = ThemedInput.WrappedComponent

describe('Form/Input', () => {
  it('renders an input element', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('renders a text input by default', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.prop('type')).toBe('text')
  })

  it('passes through props', () => {
    const wrapper = shallow(<Input id="foo" />)
    expect(wrapper.prop('id')).toBe('foo')
  })

  it('applies a custom classname', () => {
    const wrapper = shallow(<Input className="foo" />)
    expect(wrapper.prop('className')).toBe('foo')
  })

  it('applies a theme classname', () => {
    const wrapper = shallow(<Input theme={theme} />)
    expect(wrapper.prop('className')).toContain('Input')
  })

  it('applies a theme classname based on input type', () => {
    const wrapper = shallow(<Input theme={theme} />)
    expect(wrapper.prop('className')).toContain('Input-text')
  })

  it('applies a `block` theme classname', () => {
    const wrapper = shallow(<Input block theme={theme} />)
    expect(wrapper.prop('className')).toContain('Input-block')
  })

  it('applies a `invalid` theme classname', () => {
    const wrapper = shallow(<Input invalid theme={theme} />)
    expect(wrapper.prop('className')).toContain('Input-invalid')
  })

  it('applies a `variant` theme classname', () => {
    const wrapper = shallow(<Input variant="primary" theme={theme} />)
    expect(wrapper.prop('className')).toContain('Input-primary')
  })

  describe('input mask', () => {
    it('uses an InputMask component when `mask` is defined', () => {
      const wrapper = shallow(<Input theme={theme} mask="somemask..." />)
      expect(wrapper.find('InputElement')).toHaveLength(1)
    })

    it('uses the default input when `mask` is undefined', () => {
      const wrapper = shallow(<Input theme={theme} />)
      expect(wrapper.find('InputElement')).toHaveLength(0)
    })
  })

  describe('`defaultValue` or `value` props', () => {
    describe('defaultValue', () => {
      it('is used before `value`', () => {
        const wrapper = shallow(<Input theme={theme} defaultValue="foo" value="bar" />)
        expect(wrapper.state('value')).toEqual('foo')
      })

      it('does not get used when value / property prop is updated', () => {
        const wrapper = shallow(<Input theme={theme} defaultValue="foo" value="bar" />)
        wrapper.setProps({ value: 'test' })
        expect(wrapper.state('value')).toEqual('test')
      })
    })

    describe('value', () => {
      it('uses `value` when no `defaultValue` passed', () => {
        const wrapper = shallow(<Input theme={theme} value="bar" />)
        expect(wrapper.state('value')).toEqual('bar')
      })

      it('uses custom `property` as the value', () => {
        const wrapper = shallow(<Input theme={theme} property="checked" checked="bar" />)
        expect(wrapper.state('checked')).toEqual('bar')
        expect(wrapper.state('value')).toBeUndefined()
      })
    })
  })
})
