import React from 'react'
import { shallow, mount } from 'enzyme'
import FilterCard from '../FilterCard'
import theme from './mocks/theme'
import ThemedBathroomFilterCard from '../BathroomFilterCard'

const BathroomFilterCard = ThemedBathroomFilterCard.WrappedComponent

describe('ag/Filters/BathroomFilterCard', () => {
  it('has a default data-tid', () => {
    const wrapper = shallow(<BathroomFilterCard />)
    expect(wrapper.find('[data-tid="bathroom-filter-card"]')).toHaveLength(1)
  })

  it('allows data-tid to be overriden', () => {
    const wrapper = shallow(
      <BathroomFilterCard
        data-tid="bathroom-filter-card-test"
      />
    )
    expect(wrapper.find('[data-tid="bathroom-filter-card-test"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="bathroom-filter-card"]')).toHaveLength(0)
  })

  it('allows fields / radio buttons to be overriden', () => {
    const props = {
      theme,
      fields: [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<BathroomFilterCard {...props} />)
    expect(wrapper.find('[data-tid="bathroom-filter-card-radiogroup"]').prop('fields'))
      .toEqual(props.fields)
  })

  it('changes state value if radio button is checked', () => {
    const wrapper = mount(<BathroomFilterCard />)
    expect(wrapper.state('value')).toBeFalsy()
    const radioButtonInput =
      wrapper.find('[data-tid="bathroom-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.state('value')).toEqual(radioButtonInput.prop('value'))
  })

  it('applies noValue classname if no value is checked', () => {
    const wrapper = mount(<BathroomFilterCard theme={theme} />)
    expect(wrapper.find(FilterCard).hasClass('BathroomFilterCard-noValue')).toBeTruthy()
    const radioButtonInput =
      wrapper.find('[data-tid="bathroom-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.find(FilterCard).hasClass('BathroomFilterCard-noValue')).toBeFalsy()
  })

  it('removes noValue classname if a radio button is checked', () => {
    const wrapper = mount(<BathroomFilterCard theme={theme} />)
    expect(wrapper.find(FilterCard).hasClass('BathroomFilterCard-noValue')).toBeTruthy()
    const radioButtonInput =
      wrapper.find('[data-tid="bathroom-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.find(FilterCard).hasClass('BathroomFilterCard-noValue')).toBeFalsy()
  })
})
