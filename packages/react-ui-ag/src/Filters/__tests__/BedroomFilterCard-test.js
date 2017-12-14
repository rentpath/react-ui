import React from 'react'
import { mount, shallow } from 'enzyme'
import FilterCard from '../FilterCard'
import theme from './mocks/theme'
import ThemedBedroomFilterCard from '../BedroomFilterCard'

const BedroomFilterCard = ThemedBedroomFilterCard.WrappedComponent

describe('ag/Filters/BedroomFilterCard', () => {
  it('renders a radiogroup', () => {
    const wrapper = shallow(<BedroomFilterCard />)
    expect(wrapper.find('[data-tid="bedroom-filter-card-radiogroup"]')).toHaveLength(1)
  })

  it('renders no buttons by default', () => {
    const wrapper = shallow(<BedroomFilterCard />)
    expect(wrapper.find(FilterCard).prop('onApplyClick')).toBeFalsy()
    expect(wrapper.find(FilterCard).prop('onCancelClick')).toBeFalsy()
  })

  it('renders an apply button if onApplyClick is passed', () => {
    const props = { onApplyClick: () => null }
    const wrapper = shallow(<BedroomFilterCard {...props} />)
    expect(wrapper.find(FilterCard).prop('onApplyClick')).toBeTruthy()
  })

  it('renders a cancel button if onCancelClick is passed', () => {
    const props = { onCancelClick: () => null }
    const wrapper = shallow(<BedroomFilterCard {...props} />)
    expect(wrapper.find(FilterCard).prop('onCancelClick')).toBeTruthy()
  })

  it('changes the state value if a radio button is checked', () => {
    const wrapper = mount(<BedroomFilterCard />)
    expect(wrapper.state('value')).toBeFalsy()
    const radioButtonInput =
      wrapper.find('[data-tid="bedroom-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.state('value')).toEqual(radioButtonInput.prop('value'))
  })

  it('applies the noValue className by default if no value is checked', () => {
    const wrapper = shallow(<BedroomFilterCard theme={theme} />)
    expect(wrapper.state('value')).toBeFalsy()
    expect(wrapper.prop('className')).toContain('BedroomFilterCard-noValue')
  })

  it('does not apply the noValue className by default if a value is checked', () => {
    const props = {
      theme,
      fields: [
        { label: 'One', checked: true, value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<BedroomFilterCard {...props} />)
    expect(wrapper.state('value')).toEqual('One')
    expect(wrapper.prop('className')).not.toContain('BedroomFilterCard-noValue')
  })

  it('removes the noValue className when a value is checked', () => {
    const wrapper = mount(<BedroomFilterCard theme={theme} />)
    expect(wrapper.find(FilterCard).hasClass('BedroomFilterCard-noValue')).toBeTruthy()
    const radioButtonInput =
      wrapper.find('[data-tid="bedroom-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.find(FilterCard).hasClass('BedroomFilterCard-noValue')).toBeFalsy()
  })

  it('allows the fields to be overriden', () => {
    const props = {
      theme,
      fields: [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<BedroomFilterCard {...props} />)
    expect(wrapper.find('[data-tid="bedroom-filter-card-radiogroup"]').prop('fields'))
      .toEqual(props.fields)
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<BedroomFilterCard />)
    expect(wrapper.find('[data-tid="bedroom-filter-card"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<BedroomFilterCard data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="bedroom-filter-card"]')).toHaveLength(0)
  })
})
