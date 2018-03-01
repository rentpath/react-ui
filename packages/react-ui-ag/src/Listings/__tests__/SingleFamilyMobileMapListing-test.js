import React from 'react'
import { shallow, mount } from 'enzyme'
import { ToggleButton, Button } from '@rentpath/react-ui-core'
import ThemedSingleFamilyMobileMapListing from '../SingleFamilyMobileMapListing'
import theme from './mocks/theme'

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
  listing: baseListing,
  theme,
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
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '280-120',
  },
  lazyLoad: false,
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

    wrapper.find(Button).simulate('click')
    expect(ctaClick).toHaveBeenCalled()
  })

  it('fires cta buttons on click action when isActive is false', () => {
    const ctaClick = jest.fn()
    const cardClick = jest.fn()
    const wrapper = shallow(
      <SingleFamilyMobileMapListing
        {...props}
        ctaButtons={{ onClick: ctaClick }}
        onClick={cardClick}
        isActive={false}
      />)
    wrapper.find('[data-tid="cta-button"]').at(0).simulate('click')
    expect(cardClick.mock.calls).toHaveLength(1)
  })

  it('fires favoriteButton click action on favorite button click', () => {
    const favoriteClick = jest.fn()
    const wrapper = mount(
      <SingleFamilyMobileMapListing
        {...props}
        favoriteButton={{ onClick: favoriteClick }}
      />
    )
    wrapper.find(ToggleButton).simulate('click')
    expect(favoriteClick).toHaveBeenCalledWith(baseListing, true)
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

    wrapper
      .find('[data-tid="carousel"]')
      .find('[className="image-gallery-left-nav"]')
      .simulate('click')
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

  it('adds a inactive theme if the listing is inactive', () => {
    const wrapper = shallow(<SingleFamilyMobileMapListing {...props} isActive={false} />)
    expect(wrapper.hasClass('MobileMapListing-inactive')).toBeTruthy()
  })

  it('adds a active theme if the listing is active', () => {
    const wrapper = shallow(<SingleFamilyMobileMapListing {...props} isActive />)
    expect(wrapper.hasClass('MobileMapListing-active')).toBeTruthy()
  })

  it('sets the favorite button to favorited when the listing has isFavorited as true', () => {
    const favoritedProps = {
      ...props,
      listing: {
        ...props.listing,
        isFavorited: true,
      },
    }
    const wrapper = shallow(<SingleFamilyMobileMapListing {...favoritedProps} />)
    expect(wrapper.find(ToggleButton).prop('value')).toBeTruthy()
  })

  it('sets the favorite button to not favorited when the listing has isFavorited as false', () => {
    const favoritedProps = {
      ...props,
      listing: {
        ...props.listing,
        isFavorited: false,
      },
    }
    const wrapper = shallow(<SingleFamilyMobileMapListing {...favoritedProps} />)
    expect(wrapper.find(ToggleButton).prop('value')).toBeFalsy()
  })
})
