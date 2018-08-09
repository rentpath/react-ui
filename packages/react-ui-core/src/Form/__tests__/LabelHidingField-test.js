import React from 'react'
import { shallow, mount } from 'enzyme'
import theme from './mocks/theme'
import Field from '../Field'
import Password from '../Password'
import ThemedLabelHidingField from '../LabelHidingField'

const LabelHidingField = ThemedLabelHidingField.WrappedComponent

describe('LabelHidingField', () => {
  it('defaults the node to Field', () => {
    const wrapper = shallow(<LabelHidingField />)
    expect(wrapper.find(Field)).toHaveLength(1)
  })

  it('allows an override of the node', () => {
    const wrapper = shallow(<LabelHidingField nodeType={Password} />)
    expect(wrapper.find(Field)).toHaveLength(0)
    expect(wrapper.find(Password)).toHaveLength(1)
  })

  it('renders the label if there is no value', () => {
    const wrapper = shallow(<LabelHidingField theme={theme} label="foo bar" />)
    expect(wrapper.find(Field).prop('label')).toEqual({ text: 'foo bar', className: 'LabelHidingField_Label' })
  })

  it('does not render the label if there is a value', () => {
    const wrapper = shallow(<LabelHidingField label="foo bar" value="there is a value" />)
    expect(wrapper.find(Field).prop('label')).toBeNull()
  })

  it('hides/shows the label after rendering if a value is entered/cleared', () => {
    const wrapper = mount(<LabelHidingField theme={theme} label="foo bar" />)
    wrapper.find('input').simulate('change', { target: { value: 'test' } })
    expect(wrapper.find('label')).toHaveLength(0)
    wrapper.find('input').simulate('change', { target: { value: '' } })
    expect(wrapper.find(Field).prop('label')).toEqual({ text: 'foo bar', className: 'LabelHidingField_Label' })
  })
})
