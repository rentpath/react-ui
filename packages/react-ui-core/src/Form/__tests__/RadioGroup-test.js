import React from 'react'
import { shallow, mount } from 'enzyme'
import ThemedRadioGroup from '../RadioGroup'
import RadioButton from '../RadioButton'
import theme from './mocks/theme'

const RadioGroup = ThemedRadioGroup.WrappedComponent

describe('Form/RadioGroup', () => {
  it('renders RadioButtons', () => {
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: false, value: 'Two' },
      ],
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioGroup {...props} />)
    expect(wrapper.find(RadioButton)).toHaveLength(2)
  })

  it('renders null if no fields are passed', () => {
    const props = {
      name: 'fooRadioGroup',
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioGroup {...props} />)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders null if null fields are passed', () => {
    const props = {
      name: 'fooRadioGroup',
      fields: null,
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioGroup {...props} />)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('sets the value upon creation', () => {
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: true, value: 'Two' },
      ],
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioGroup {...props} />)
    expect(wrapper.state('value')).toEqual('Two')
  })

  it('changes the value when clicking on another radio button', () => {
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: true, value: 'Two' },
      ],
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = mount(<RadioGroup {...props} />)
    expect(wrapper.state('value')).toEqual('Two')
    wrapper.find('input[value="One"]').simulate('change')
    expect(wrapper.state('value')).toEqual('One')
    expect(wrapper.find('input[value="One"]').props()).toHaveProperty('checked', true)
  })

  it('changes the value when the fields change', () => {
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: true, value: 'Two' },
      ],
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioGroup {...props} />)
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
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: true, value: 'Two' },
      ],
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioGroup {...props} />)
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
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: true, value: 'Two' },
      ],
      theme,
      onChange: event => {
        const { value } = event.target
        return value
      },
    }
    const wrapper = shallow(<RadioGroup {...props} />)
    const initialKey = wrapper.find(RadioButton).first().key()
    wrapper.setProps({
      className: 'newClassNameOfDoom',
    })
    expect(wrapper.find(RadioButton).first().key()).toEqual(initialKey)
  })

  it('unselects the radio button when using allowUnselect', () => {
    const spyOnChange = jest.fn()
    const spyOnUnselect = jest.fn()
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: true, value: 'Two' },
      ],
      theme,
      onChange: spyOnChange,
      onUnselect: spyOnUnselect,
      allowUnselect: true,
    }
    const wrapper = mount(<RadioGroup {...props} />)
    expect(wrapper.state('value')).toEqual('Two')
    wrapper.find('input[value="Two"]').simulate('click')
    expect(wrapper.state('value')).toEqual(null)
    expect(wrapper.find('input[value="Two"]').props()).not.toHaveProperty('checked', true)
    expect(wrapper.find('input[value="One"]').props()).not.toHaveProperty('checked', true)
    expect(spyOnChange).not.toBeCalled()
    expect(spyOnUnselect).toBeCalled()
  })

  it('does not unselect the radio button when allowUnselect is false', () => {
    const spyOnChange = jest.fn()
    const spyOnUnselect = jest.fn()
    const props = {
      name: 'fooRadioGroup',
      fields: [
        { label: 'One', checked: false, value: 'One' },
        { label: 'Two', checked: true, value: 'Two' },
      ],
      theme,
      onChange: spyOnChange,
      onUnselect: spyOnUnselect,
      allowUnselect: false,
    }
    const wrapper = mount(<RadioGroup {...props} />)
    expect(wrapper.state('value')).toEqual('Two')
    wrapper.find('input[value="Two"]').simulate('click')
    expect(wrapper.state('value')).toEqual('Two')
    expect(wrapper.find('input[value="Two"]').props()).toHaveProperty('checked', true)
    expect(wrapper.find('input[value="One"]').props()).not.toHaveProperty('checked', true)
    expect(spyOnChange).not.toBeCalled()
    expect(spyOnUnselect).not.toBeCalled()
  })
})
