import React from 'react'
import { shallow, mount } from 'enzyme'
import { omit } from 'lodash'
import { Button, ToggleButton, ListingComponents } from '@rentpath/react-ui-core'
import ThemedSingleFamilyDesktopListing from '../Listing'
import theme from './mocks/theme'

const SingleFamilyDesktopListing = ThemedSingleFamilyDesktopListing.WrappedComponent

const baseListing = {
  banners: [],
  bedrooms: '1-3 Beds',
  bathrooms: '2 Baths',
  unitLevelAvailability: '12 Units Available',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  phone: '678-907-1428',
  rating: {
    score: 4,
    label: '20',
  },
  photos: [
    {
      path: '',
      caption: '',
    },
    {
      path: '',
      caption: '',
    },
    {
      path: '',
      caption: '',
    },
  ],
  singleFamily: true,
}

const ratingsProp = {
  className: theme.themedRating_star,
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
  ratings: ratingsProp,
  ctaButtons: [
    {
      children: 'Check Availability',
      onClick: () => { },
      className: 'contact',
    },
  ],
  favoriteButton: {
    onClick: () => { },
    children: '♥',
  },
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '280-120',
  },
  lazyLoad: false,
}

describe('ag/Listings/SingleFamilyDesktopListing', () => {
  describe('ctaButtons', () => {
    let wrapper
    let ctaClick
    let cardClick

    beforeEach(() => {
      ctaClick = jest.fn()
      cardClick = jest.fn()
      wrapper = shallow(
        <SingleFamilyDesktopListing
          {...props}
          ctaButtons={[{ children: 'foo', onClick: ctaClick }, { children: 'bar', onClick: ctaClick }]}
          onClick={cardClick}
          isActive
        />
      )
    })

    it('does not render a cta button if there is no text to display in the button', () => {
      wrapper = shallow(
        <SingleFamilyDesktopListing
          {...props}
          ctaButtons={[{ onClick: ctaClick }, { children: 'bar', onClick: ctaClick }]}
          onClick={cardClick}
          isActive
        />
      )
      expect(wrapper.find(Button).length).toEqual(1)
    })

    it('handle an array of cta buttons', () => {
      expect(wrapper.find(Button)).toHaveLength(2)
    })

    it('fire cta buttons on click action on click', () => {
      wrapper.find('[data-tid="cta-button"]').at(0).simulate('click')
      wrapper.find('[data-tid="cta-button"]').at(1).simulate('click')
      expect(ctaClick.mock.calls).toHaveLength(2)
    })

    it('fires cta buttons on click action when isActive is false', () => {
      wrapper = shallow(
        <SingleFamilyDesktopListing
          {...props}
          ctaButtons={[{ children: 'foo', onClick: ctaClick }, { children: 'bar', onClick: ctaClick }]}
          onClick={cardClick}
          isActive={false}
        />)
      wrapper.find('[data-tid="cta-button"]').at(0).simulate('click')
      wrapper.find('[data-tid="cta-button"]').at(1).simulate('click')
      expect(cardClick.mock.calls).toHaveLength(2)
    })
  })

  it('fires favoriteButton click action on favorite button click', () => {
    const favoriteClick = jest.fn()
    const wrapper = mount(
      <SingleFamilyDesktopListing
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
      <SingleFamilyDesktopListing
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
      <SingleFamilyDesktopListing
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
      <SingleFamilyDesktopListing
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
      <SingleFamilyDesktopListing
        {...props}
        index={0}
        onClick={cardClick}
      />
    )
    wrapper.simulate('click')
    expect(cardClick).toHaveBeenCalled()
    expect(cardClick.mock.calls).toEqual([[0, baseListing]])
  })

  it('sets the favorite button to favorited when the listing has isFavorited as true', () => {
    const favoritedProps = {
      ...props,
      listing: {
        ...props.listing,
        isFavorited: true,
      },
    }
    const wrapper = shallow(<SingleFamilyDesktopListing {...favoritedProps} />)
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
    const wrapper = shallow(<SingleFamilyDesktopListing {...favoritedProps} />)
    expect(wrapper.find(ToggleButton).prop('value')).toBeFalsy()
  })

  describe('photos', () => {
    it('renders a component with a PhotoCarousel if active', () => {
      const wrapper = shallow(<SingleFamilyDesktopListing {...props} />)

      expect(wrapper.find(ListingComponents.Photos)).toHaveLength(1)
      expect(wrapper.find(ListingComponents.Photo)).toHaveLength(1)
    })

    it('renders a component with one background image if inactive', () => {
      const wrapper = shallow(<SingleFamilyDesktopListing {...props} isActive={false} />)

      expect(wrapper.find(ListingComponents.Photos)).toHaveLength(0)
      expect(wrapper.find(ListingComponents.Photo)).toHaveLength(1)
    })

    it('renders a photo component even without a listing photos array', () => {
      const omittedPhotoProps = omit(props, 'photos')
      const wrapper = shallow(<SingleFamilyDesktopListing
        {...omittedPhotoProps} isActive={false}
      />)

      expect(wrapper.find(ListingComponents.Photos)).toHaveLength(0)
      expect(wrapper.find(ListingComponents.Photo)).toHaveLength(1)
    })
  })
})
