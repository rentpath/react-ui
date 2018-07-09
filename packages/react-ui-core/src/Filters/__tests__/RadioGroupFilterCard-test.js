import React from 'react'
import { mount, shallow } from 'enzyme'
import FilterCard from '../FilterCard'
import theme from './mocks/theme'
import ThemedRadioGroupFilterCard from '../RadioGroupFilterCard'

const RadioGroupFilterCard = ThemedRadioGroupFilterCard.WrappedComponent

describe('ag/Filters/RadioGroupFilterCard', () => {
  const props = {
    title: 'cool title',
    description: 'awesome description',
    fields: [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Three', value: '3' },
      { label: 'Two', value: '4' },
    ],
    theme,
  }
  it('renders a radiogroup', () => {
    const wrapper = shallow(<RadioGroupFilterCard {...props} />)
    expect(wrapper.find('[name="radio-group-filter-card-radio-group"]')).toHaveLength(1)
  })

  it('changes the state value if a radio button is checked', () => {
    const wrapper = mount(<RadioGroupFilterCard {...props} />)
    expect(wrapper.state('value')).toBeFalsy()
    const radioButtonInput =
      wrapper.find('[name="radio-group-filter-card-radio-group"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.state('value')).toEqual(radioButtonInput.prop('value'))
  })

  it('applies the noValue className by default if no value is checked', () => {
    const wrapper = shallow(<RadioGroupFilterCard {...props} />)
    expect(wrapper.state('value')).toBeFalsy()
    expect(wrapper.prop('className')).toContain('RadioGroupFilterCard-noValue')
  })

  it('does not apply the noValue className by default if a value is checked', () => {
    const checkedProps = {
      theme,
      fields: [
        { label: 'One', checked: true, value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<RadioGroupFilterCard {...checkedProps} />)
    expect(wrapper.state('value')).toEqual('One')
    expect(wrapper.prop('className')).not.toContain('RadioGroupFilterCard-noValue')
  })

  it('removes the noValue className when a value is checked', () => {
    const wrapper = mount(<RadioGroupFilterCard {...props} />)
    expect(wrapper.find(FilterCard).hasClass('RadioGroupFilterCard-noValue')).toBeTruthy()
    const radioButtonInput =
      wrapper.find('[name="radio-group-filter-card-radio-group"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.find(FilterCard).hasClass('RadioGroupFilterCard-noValue')).toBeFalsy()
  })

  it('allows the fields to be overriden', () => {
    const overrideFieldsProps = {
      theme,
      fields: [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<RadioGroupFilterCard {...overrideFieldsProps} />)
    expect(wrapper.find('[name="radio-group-filter-card-radio-group"]').prop('fields'))
      .toEqual(overrideFieldsProps.fields)
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<RadioGroupFilterCard />)
    expect(wrapper.find('[data-tid="radio-group-filter-card"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<RadioGroupFilterCard data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="radio-group-filter-card"]')).toHaveLength(0)
  })
})
