import React from 'react'
import { shallow, mount } from 'enzyme'
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

  it('does not fire a cardClick when a nested button is clicked', () => {
    const cardClick = jest.fn()
    const wrapper = mount(
      <ListingCell listing={listing} onClick={cardClick}>
        <button data-tid="fake-button" />
      </ListingCell>
    )
    wrapper.find('button[data-tid="fake-button"]').simulate('click')
    expect(cardClick).not.toHaveBeenCalled()
    wrapper.simulate('click')
    expect(cardClick).toHaveBeenCalled()
    expect(cardClick.mock.calls[0][0]).toEqual(listing)
  })

  it('fires a card click on a button click if isActive is false', () => {
    const cardClick = jest.fn()
    const wrapper = mount(
      <ListingCell listing={listing} onClick={cardClick} isActive={false}>
        <button data-tid="fake-button" />
      </ListingCell>
    )
    wrapper.find('button[data-tid="fake-button"]').simulate('click')
    expect(cardClick).toHaveBeenCalled()
    expect(cardClick.mock.calls[0][0]).toEqual(listing)
  })
})
