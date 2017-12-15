import React from 'react'
import { mount, shallow } from 'enzyme'
import FilterCard from '../FilterCard'
import theme from './mocks/theme'
import ThemedPetFilterCard from '../PetFilterCard'

const PetFilterCard = ThemedPetFilterCard.WrappedComponent

describe('ag/Filters/PetFilterCard', () => {
  it('renders a radiogroup', () => {
    const wrapper = shallow(<PetFilterCard />)
    expect(wrapper.find('[data-tid="pet-filter-card-radiogroup"]')).toHaveLength(1)
  })

  it('renders no buttons by default', () => {
    const wrapper = shallow(<PetFilterCard />)
    expect(wrapper.find(FilterCard).prop('onApplyClick')).toBeFalsy()
    expect(wrapper.find(FilterCard).prop('onCancelClick')).toBeFalsy()
  })

  it('changes the state value if a radio button is checked', () => {
    const wrapper = mount(<PetFilterCard />)
    expect(wrapper.state('value')).toBeFalsy()
    const radioButtonInput =
      wrapper.find('[data-tid="pet-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.state('value')).toEqual(radioButtonInput.prop('value'))
  })

  it('applies the noValue className by default if no value is checked', () => {
    const wrapper = shallow(<PetFilterCard theme={theme} />)
    expect(wrapper.state('value')).toBeFalsy()
    expect(wrapper.prop('className')).toContain('PetFilterCard-noValue')
  })

  it('does not apply the noValue className by default if a value is checked', () => {
    const props = {
      theme,
      fields: [
        { label: 'One', checked: true, value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<PetFilterCard {...props} />)
    expect(wrapper.state('value')).toEqual('One')
    expect(wrapper.prop('className')).not.toContain('PetFilterCard-noValue')
  })

  it('removes the noValue className when a value is checked', () => {
    const wrapper = mount(<PetFilterCard theme={theme} />)
    expect(wrapper.find(FilterCard).hasClass('PetFilterCard-noValue')).toBeTruthy()
    const radioButtonInput =
      wrapper.find('[data-tid="pet-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.find(FilterCard).hasClass('PetFilterCard-noValue')).toBeFalsy()
  })

  it('allows the fields to be overriden', () => {
    const props = {
      theme,
      fields: [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<PetFilterCard {...props} />)
    expect(wrapper.find('[data-tid="pet-filter-card-radiogroup"]').prop('fields'))
      .toEqual(props.fields)
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<PetFilterCard />)
    expect(wrapper.find('[data-tid="pet-filter-card"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<PetFilterCard data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="pet-filter-card"]')).toHaveLength(0)
  })
})
