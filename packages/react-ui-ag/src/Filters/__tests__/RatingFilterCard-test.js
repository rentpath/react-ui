import React from 'react'
import { mount, shallow } from 'enzyme'
import FilterCard from '../FilterCard'
import theme from './mocks/theme'
import ThemedRatingFilterCard from '../RatingFilterCard'

const RatingFilterCard = ThemedRatingFilterCard.WrappedComponent

describe('ag/Filters/RatingFilterCard', () => {
  it('renders a radiogroup', () => {
    const wrapper = shallow(<RatingFilterCard />)
    expect(wrapper.find('[data-tid="rating-filter-card-radiogroup"]')).toHaveLength(1)
  })

  it('renders no buttons by default', () => {
    const wrapper = shallow(<RatingFilterCard />)
    expect(wrapper.find(FilterCard).prop('onApplyClick')).toBeFalsy()
    expect(wrapper.find(FilterCard).prop('onCancelClick')).toBeFalsy()
  })

  it('changes the state value if a radio button is checked', () => {
    const wrapper = mount(
      <RatingFilterCard
        fields={[
          { label: '1+ Stars', value: '1' },
          { label: '2+ Stars', value: '1' },
          { label: '3+ Stars', value: '1' },
          { label: '4+ Stars', value: '1' },
          { label: '5 Stars', value: '1' },
        ]}
      />
    )
    expect(wrapper.state('value')).toBeFalsy()
    const radioButtonInput =
      wrapper.find('[data-tid="rating-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.state('value')).toEqual(radioButtonInput.prop('value'))
  })

  it('applies the noValue className by default if no value is checked', () => {
    const wrapper = shallow(<RatingFilterCard theme={theme} />)
    expect(wrapper.state('value')).toBeFalsy()
    expect(wrapper.prop('className')).toContain('RatingFilterCard-noValue')
  })

  it('does not apply the noValue className by default if a value is checked', () => {
    const props = {
      theme,
      fields: [
        { label: 'One', checked: true, value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<RatingFilterCard {...props} />)
    expect(wrapper.state('value')).toEqual('One')
    expect(wrapper.prop('className')).not.toContain('RatingFilterCard-noValue')
  })

  it('removes the noValue className when a value is checked', () => {
    const wrapper = mount(
      <RatingFilterCard
        theme={theme}
        fields={[
          { label: '1+ Stars', value: '1' },
          { label: '2+ Stars', value: '1' },
          { label: '3+ Stars', value: '1' },
          { label: '4+ Stars', value: '1' },
          { label: '5 Stars', value: '1' },
        ]}
      />
    )
    expect(wrapper.find(FilterCard).hasClass('RatingFilterCard-noValue')).toBeTruthy()
    const radioButtonInput =
      wrapper.find('[data-tid="rating-filter-card-radiogroup"] input').at(2)
    radioButtonInput.simulate('change')
    expect(wrapper.find(FilterCard).hasClass('RatingFilterCard-noValue')).toBeFalsy()
  })

  it('allows the fields to be overriden', () => {
    const props = {
      theme,
      fields: [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
      ],
    }
    const wrapper = shallow(<RatingFilterCard {...props} />)
    expect(wrapper.find('[data-tid="rating-filter-card-radiogroup"]').prop('fields'))
      .toEqual(props.fields)
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<RatingFilterCard />)
    expect(wrapper.find('[data-tid="rating-filter-card"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<RatingFilterCard data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="rating-filter-card"]')).toHaveLength(0)
  })
})
