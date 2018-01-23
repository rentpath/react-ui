import React from 'react'
import { shallow } from 'enzyme'
import ThemedListingCell from '../ListingCell'

const ListingCell = ThemedListingCell.WrappedComponent

describe('ListingCell', () => {
  const listing = {
    bedrooms: 'foo',
    bathrooms: 'bar',
    name: 'bar',
  }

  it('renders children passed into it', () => {
    const wrapper = shallow(
      <ListingCell>
        <div data-tid="child">Foo</div>
      </ListingCell>
    )
    expect(wrapper.find('[data-tid="child"]')).toHaveLength(1)
  })

  it('passes along the provided listing as the context', () => {
    const SampleComponent = () => (
      <div data-tid="child">Foo</div>
    )

    const wrapper = shallow(
      <ListingCell listing={listing}>
        <SampleComponent />
      </ListingCell>
    )
    expect(wrapper.instance().getChildContext()).toEqual(listing)
  })

  it('passes props along to the top level div', () => {
    const wrapper = shallow(
      <ListingCell foo="bar">
        <span data-tid="child">Foo</span>
      </ListingCell>
    )

    expect(wrapper.find('[data-tid="listing-cell"]').props()).toMatchObject({ foo: 'bar' })
  })
})
