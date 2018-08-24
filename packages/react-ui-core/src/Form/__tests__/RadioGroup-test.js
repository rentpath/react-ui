import React from 'react'
import { shallow, mount } from 'enzyme'
import ThemedRadioGroup from '../RadioGroup'
import RadioButton from '../RadioButton'
import theme from './mocks/theme'

const RadioGroup = ThemedRadioGroup.WrappedComponent

describe('Form/RadioGroup', () => {
  const setup = (props, mountType = shallow) => (
    mountType(
      <RadioGroup
        name="fooRadioGroup"
        fields={[
          { label: 'One', checked: false, value: 'One' },
          { label: 'Two', checked: true, value: 'Two' },
        ]}
        theme={theme}
        onChange={event => event.target.value}
        {...props}
      />
    )
  )

  it('renders RadioButtons', () => {
    const wrapper = setup()
    expect(wrapper.find(RadioButton)).toHaveLength(2)
  })

  it('renders null if no fields are passed', () => {
    const wrapper = setup({ fields: null })
    expect(wrapper.find('RadioButton')).toHaveLength(0)
  })

  it('sets the value upon creation', () => {
    const wrapper = setup()
    expect(wrapper.state('value')).toEqual('Two')
  })

  it('changes the value when clicking on another radio button', () => {
    const wrapper = setup({}, mount)
    expect(wrapper.state('value')).toEqual('Two')
    wrapper.find('input[value="One"]').simulate('change')
    expect(wrapper.state('value')).toEqual('One')
    expect(wrapper.find('input[value="One"]').props()).toHaveProperty('checked', true)
  })

  it('changes the value when the fields change', () => {
    const wrapper = setup()
    expect(wrapper.state('value')).toEqual('Two')
    wrapper.setProps({
      fields: [
        { label: 'Three', checked: true, value: 'Three' },
        { label: 'Four', checked: false, value: 'Four' },
      ],
    })
    expect(wrapper.state('value')).toEqual('Three')
  })

  it('changes the random id when the fields change', () => {
    const wrapper = setup()
    const initialKey = wrapper.find(RadioButton).first().key()
    wrapper.setProps({
      fields: [
        { label: 'Three', checked: true, value: 'Three' },
        { label: 'Four', checked: false, value: 'Four' },
      ],
    })
    expect(wrapper.find(RadioButton).first().key()).not.toEqual(initialKey)
  })

  it('does not change the random id if a non-field prop changes', () => {
    const wrapper = setup()
    const initialKey = wrapper.find(RadioButton).first().key()
    wrapper.setProps({
      className: 'newClassNameOfDoom',
    })
    expect(wrapper.find(RadioButton).first().key()).toEqual(initialKey)
  })

  it('unselects the radio button when using allowUnselect', () => {
    const onChange = jest.fn()
    const onUnselect = jest.fn()
    const wrapper = setup({
      onChange,
      onUnselect,
      allowUnselect: true,
    }, mount)

    expect(wrapper.state('value')).toEqual('Two')
    wrapper.find('input[value="Two"]').simulate('click')
    expect(wrapper.state('value')).toEqual(null)
    expect(wrapper.find('input[value="Two"]').props()).not.toHaveProperty('checked', true)
    expect(wrapper.find('input[value="One"]').props()).not.toHaveProperty('checked', true)
    expect(onChange).not.toBeCalled()
    expect(onUnselect).toBeCalled()
  })

  it('does not unselect the radio button when allowUnselect is false', () => {
    const onChange = jest.fn()
    const onUnselect = jest.fn()
    const wrapper = setup({
      onChange,
      onUnselect,
      allowUnselect: false,
    }, mount)
    expect(wrapper.state('value')).toEqual('Two')
    wrapper.find('input[value="Two"]').simulate('click')
    expect(wrapper.state('value')).toEqual('Two')
    expect(wrapper.find('input[value="Two"]').props()).toHaveProperty('checked', true)
    expect(wrapper.find('input[value="One"]').props()).not.toHaveProperty('checked', true)
    expect(onChange).not.toBeCalled()
    expect(onUnselect).not.toBeCalled()
  })

  describe('`defaultValue` or `value` props', () => {
    describe('defaultValue', () => {
      it('is used before `value`', () => {
        const wrapper = setup({ defaultValue: 'foo', value: 'bar' })
        expect(wrapper.state('value')).toEqual('foo')
      })

      it('does not get used when value / property prop is updated', () => {
        const wrapper = setup({ defaultValue: 'foo', value: 'bar' })
        wrapper.setProps({ value: 'test' })
        expect(wrapper.state('value')).toEqual('test')
      })
    })

    describe('value', () => {
      it('uses `value` when no `defaultValue` passed', () => {
        const wrapper = setup({ value: 'bar' })
        expect(wrapper.state('value')).toEqual('bar')
      })

      it('uses the fields `checked` when none passed', () => {
        const wrapper = setup()
        expect(wrapper.state('value')).toEqual('Two')
      })
    })
  })
})
