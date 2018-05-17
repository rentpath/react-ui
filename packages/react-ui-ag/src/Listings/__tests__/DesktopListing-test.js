import React from 'react'
import { mount } from 'enzyme'
import { ListingComponents } from '@rentpath/react-ui-core'
import ThemedDesktopListing from '../DesktopListing'
import theme from './mocks/theme'

const DesktopListing = ThemedDesktopListing.WrappedComponent

const baseListing = {
  banners: ['New Construction', 'Sponsored'],
  bedrooms: '1-3 Beds',
  bathrooms: '2 Baths',
  unitLevelAvailability: '12 Units Available',
  lastUpdated: '3hrs ago',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  phone: '(404) 770-5555',
  rating: {
    score: 4,
    label: '20',
    count: 41,
    reviews: 2,
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
  location: {
    addressLine1: '3921 Tugaloo River Drive Northside Park Washington Parkway',
    city: 'Great Town',
    latitude: 33.8362,
    longitude: -84.3426,
    state: 'Wyoming',
    zip: '65548',
  },
  url: '/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/',
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
    {
      children: '$ Coupon',
      onClick: () => { },
      className: 'coupon',
      'data-tid': 'coupon-button',
      'data-tag_item': 'coupon',
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

const singleFamilyProps = {
  ...props,
  listing: {
    ...props.listing,
    banners: [],
    singleFamily: true,
  },
  ctaButtons: [
    {
      children: 'Check Availability',
      onClick: () => { },
      className: 'contact',
    },
  ],
}

describe('DesktopListing', () => {
  it('passes through custom props', () => {
    const wrapper = mount(
      <DesktopListing
        {...props}
        isActive
        data-tid="foo"
      />
    )
    expect(wrapper.find('Listing').prop('data-tid')).toEqual('foo')
  })

  describe('render listing info', () => {
    describe('components render', () => {
      it('renders Price component', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper.find(ListingComponents.Price).exists()).toBeTruthy()
      })

      it('renders Bedroom component', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper.find(ListingComponents.Bedroom).exists()).toBeTruthy()
      })

      it('renders Bathroom component', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper.find(ListingComponents.Bathroom).exists()).toBeTruthy()
      })

      it('renders UnitLevelAvailability component', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper
          .find(ListingComponents.UnitLevelAvailability).exists())
          .toBeTruthy()
      })

      it('renders lastUpdated div', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper.find('.LastUpdated').at(0).text())
          .toEqual(baseListing.lastUpdated)
      })

      it('renders PropertyName component', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper
          .find(ListingComponents.PropertyName).exists())
          .toBeTruthy()
      })

      it('renders Ratings component', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper
          .find(ListingComponents.Ratings).exists())
          .toBeTruthy()
      })

      it('renders phone div', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper.find('.Phone').at(0).text())
          .toEqual(baseListing.phone)
      })

      it('renders ApartmentComplex structured data', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper
          .find('[itemType="https://schema.org/ApartmentComplex"]').exists())
          .toBeTruthy()
      })

      it('renders the structured Address info', () => {
        const wrapper = mount(<DesktopListing {...props} />)
        expect(wrapper
          .find('[itemProp="streetAddress"]').exists())
          .toBeTruthy()
      })
    })

    describe('single family components render', () => {
      it('renders Price component', () => {
        const wrapper = mount(<DesktopListing {...singleFamilyProps} />)
        expect(wrapper.find(ListingComponents.Price).exists()).toBeTruthy()
      })

      it('renders Bedroom component', () => {
        const wrapper = mount(<DesktopListing {...singleFamilyProps} />)
        expect(wrapper.find(ListingComponents.Bedroom).exists()).toBeTruthy()
      })

      it('renders Bathroom component', () => {
        const wrapper = mount(<DesktopListing {...singleFamilyProps} />)
        expect(wrapper.find(ListingComponents.Bathroom).exists()).toBeTruthy()
      })

      it('renders Availability component', () => {
        const wrapper = mount(<DesktopListing {...singleFamilyProps} />)
        expect(wrapper
          .find(ListingComponents.Availability).exists())
          .toBeTruthy()
      })

      it('renders Address component', () => {
        const wrapper = mount(<DesktopListing {...singleFamilyProps} />)
        expect(wrapper
          .find(ListingComponents.Address).exists())
          .toBeTruthy()
      })
    })
  })
})
