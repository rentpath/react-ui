import React from 'react'
import { shallow, mount } from 'enzyme'
import { ToggleButton } from '@rentpath/react-ui-core'
import ThemedSingleFamilyMobileMapListing from '../SingleFamilyMobileMapListing'

const SingleFamilyMobileMapListing = ThemedSingleFamilyMobileMapListing.WrappedComponent

const baseListing = {
  bedrooms: '3 Bedrooms',
  address: '123 fake address',
  price: '$1170+',
  availability: 'Available now',
  photos: [
    {
      path: '',
      caption: '',
    },
    {
      path: '',
      caption: '',
    },
  ],
}

const props = {
  server: '',
  dimensions: '280-120',
  listing: baseListing,
  onClick: () => { },
  navigation: {
    next: {
      children: 'Next',
    },
    previous: {
      children: 'Previous',
    },
  },
  ctaButton: {
    children: '404-378-1428',
    onClick: () => { },
    className: 'phone',
  },
  favoriteButton: {
    onClick: () => { },
    children: '♥',
  },
  banner: '$ Coupon',
}

describe('ag/Listing/SingleFamilyMobileMapListing', () => {
  it('fires ctaButton click action on favorite button click', () => {
    const ctaClick = jest.fn()
    const wrapper = shallow(
      <SingleFamilyMobileMapListing
        {...props}
        ctaButton={{ onClick: ctaClick }}
      />
    )
    wrapper.find('[data-tid="cta-button"]').simulate('click')
    expect(ctaClick).toHaveBeenCalled()
  })

  it('fires favoriteButton click action on favorite button click', () => {
    const favoriteClick = jest.fn()
    const wrapper = shallow(
      <SingleFamilyMobileMapListing
        {...props}
        favoriteButton={{ onClick: favoriteClick }}
      />
    )
    wrapper.find(ToggleButton).simulate('click')
    expect(favoriteClick).toHaveBeenCalled()
  })

  it('does not fire cardClick on favorite button click', () => {
    const cardClick = jest.fn()
    const wrapper = mount(
      <SingleFamilyMobileMapListing
        {...props}
        onClick={cardClick}
      />
    )
    wrapper.find(ToggleButton).simulate('click')
    expect(cardClick).not.toHaveBeenCalled()
  })

  it('does not fire cardClick on carousel nav click', () => {
    const cardClick = jest.fn()
    const wrapper = mount(
      <SingleFamilyMobileMapListing
        {...props}
        onClick={cardClick}
      />
    )

    wrapper.find('[data-tid="carousel-navigation-next"]').at(0).simulate('click')
    expect(cardClick).not.toHaveBeenCalled()
  })

  it('does not fire cardClick on cta click', () => {
    const cardClick = jest.fn()
    const wrapper = mount(
      <SingleFamilyMobileMapListing
        {...props}
        onClick={cardClick}
      />
    )
    wrapper.find('[data-tid="cta-button"]').at(0).simulate('click')
    expect(cardClick).not.toHaveBeenCalled()
  })

  it('fires onClick on card click', () => {
    const cardClick = jest.fn()
    const wrapper = mount(
      <SingleFamilyMobileMapListing
        {...props}
        onClick={cardClick}
      />
    )
    wrapper.simulate('click')
    expect(cardClick).toHaveBeenCalled()
  })

  it('populates components from listing object prop', () => {
    const wrapper = mount(<SingleFamilyMobileMapListing {...props} />)
    expect(wrapper.find('[data-tid="bedroom"]').at(0).text()).toEqual(baseListing.bedrooms)
  })
})
