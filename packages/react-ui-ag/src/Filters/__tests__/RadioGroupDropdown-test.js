import React from 'react'
import { mount, shallow } from 'enzyme'
import theme from './mocks/theme'
import ThemedRadioGroupDropdown,
{ RadioGroupDropdownAnchorText }
  from '../RadioGroupDropdown'
import RadioGroupDropdownFilterCardWrapper from '../RadioGroupDropdownFilterCardWrapper'

const RadioGroupDropdown = ThemedRadioGroupDropdown.WrappedComponent

describe('ag/Filters/RadioGroupDropdown', () => {
  const props = {
    anchorText: <RadioGroupDropdownAnchorText defaultText="Fubar" />,
    fields: [
      { anchorLabel: 'Foo!', label: 'Foo', value: 'o' },
      { anchorLabel: 'Bar!', label: 'Bar', value: 'r' },
      { anchorLabel: 'Baz!', label: 'Baz', value: 'z' },
    ],
    theme,
  }
  it('changes the text of the dropdown anchor when the apply button is pressed', () => {
    const wrapper = mount(<RadioGroupDropdown {...props} />)
    wrapper.find('button[data-tid="dropdown-anchor"]').simulate('click')
    wrapper.find('[data-tid="radio-group-filter-card-radio-group"] input')
      .at(1).simulate('change')
    wrapper.find('button[data-tid="apply-button"]').simulate('click')
    expect(wrapper.find('button[data-tid="dropdown-anchor"]').text()).toContain('Bar!')
  })

  it('removes anchorLabel from labels', () => {
    const wrapper = shallow(<RadioGroupDropdown {...props} />)
    expect(
      wrapper.find(RadioGroupDropdownFilterCardWrapper).props().fields.filter(f => f.anchorLabel)
    ).toHaveLength(0)
  })
})
