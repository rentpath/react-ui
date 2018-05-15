import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import theme from './mocks/theme'
import ThemedListingCarousel from '../ListingCarousel'
import { MobileMapListing } from '../../Listings'

const ListingCarousel = ThemedListingCarousel.WrappedComponent
const onClick = jest.fn()
const DEBOUNCE_WAIT = 550

const listings = [
  {
    bedrooms: '1-3 Bedrooms',
    bathrooms: '2 Bathrooms',
    name: 'Awesome Property! - Also the longest line you\'ve ever seen',
    city: 'Great Town',
    state: 'YA',
    price: '$1 MILLION DOLLARS',
    phone: '404-378-1428',
    unitLevelAvailability: '• 8 units left - Come get you some!',
    rating: {
      score: 4,
      label: '(20)',
      count: 62,
      reviews: 9,
    },
    location: {
      addressLine1: '3921 Tugaloo River Drive Northside Park Washington Parkway',
      city: 'Beckwood',
      latitude: 33.8362,
      longitude: -84.3426,
      state: 'Georgia',
      zip: '30319',
    },
    url: '/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/',
    photos: [
      {
        path: 'imgr/d9551cdeb8152c6ecafd96ccf0c9a5dc/',
        caption: null,
      },
      {
        path: 'imgr/d13b78bff171be4a68ff576e036251ab/',
        caption: null,
      },
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '2-4 Bedrooms',
    bathrooms: '1 Bathroom',
    name: 'Terrible Property',
    city: 'Stupid Town',
    state: 'BZ',
    price: '$0.01 / month',
    phone: '972-555-8921',
    rating: {
      score: 1,
      label: '43,423',
      count: 62,
      reviews: 9,
    },
    location: {
      addressLine1: '3921 Tugaloo River Drive Northside Park Washington Parkway',
      city: 'Beckwood',
      latitude: 33.8362,
      longitude: -84.3426,
      state: 'Georgia',
      zip: '30319',
    },
    url: '/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/',
    photos: [
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
      {
        path: 'imgr/d9551cdeb8152c6ecafd96ccf0c9a5dc/',
        caption: null,
      },
      {
        path: 'imgr/d13b78bff171be4a68ff576e036251ab/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '1-4 Bedrooms',
    bathrooms: '3 Bathrooms',
    name: 'Mediocre Property',
    city: 'Okay Town',
    state: 'GS',
    price: '$100 / month',
    phone: '800-555-5555',
    rating: {
      score: 3,
      label: '234',
      count: 62,
      reviews: 9,
    },
    location: {
      addressLine1: '3921 Tugaloo River Drive Northside Park Washington Parkway',
      city: 'Beckwood',
      latitude: 33.8362,
      longitude: -84.3426,
      state: 'Georgia',
      zip: '30319',
    },
    url: '/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/',
    photos: [
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
      {
        path: 'imgr/d9551cdeb8152c6ecafd96ccf0c9a5dc/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '2 Bedrooms',
    bathrooms: '1-3 Bathrooms',
    name: 'Shrug Property',
    city: 'Hello World Town',
    state: 'HD',
    price: '$20 / day',
    phone: '678-777-9311',
    rating: {
      score: 2,
      label: '567',
      count: 62,
      reviews: 9,
    },
    location: {
      addressLine1: '3921 W Street Road',
      city: 'Vinings',
      latitude: 32.8362,
      longitude: -84.3426,
      state: 'Georgia',
      zip: '30339',
    },
    url: '/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/',
    photos: [
      {
        path: 'imgr/2576db62ffa153ebef00317a5c68a368/',
        caption: 'test 1',
      },
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '2 Bedrooms',
    bathrooms: '1-3 Bathrooms',
    name: 'Shrug Property',
    city: 'Hello World Town',
    state: 'HD',
    price: '$20 / day',
    phone: '555-867-5309',
    rating: {
      score: 2,
      label: '567',
      count: 14,
      reviews: 2,
    },
    location: {
      addressLine1: '3921 Tugaloo River Drive Northside Park Washington Parkway',
      city: 'Beckwood',
      latitude: 33.8362,
      longitude: -83.3426,
      state: 'Georgia',
      zip: '30319',
    },
    url: '/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/',
    photos: [
      {
        path: 'imgr/2576db62ffa153ebef00317a5c68a368/',
        caption: 'test 1',
      },
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
    ],
  },
]

const listingProps = {
  onClick,
  ctaButtons: [
    {
      valueLocation: 'phone',
      onClick: () => () => { },
      className: 'phone',
    },
    {
      children: 'send an email',
      onClick: () => () => { },
      className: 'contact',
    },
  ],
  favoriteButton: {
    onClick: () => { },
    children: '♥',
  },
  banner: '$ Coupon',
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '280-120',
    disableSwipe: true,
  },
  lazyLoad: false,
}

describe('ListingCarousel', () => {
  const props = {
    theme,
    listings,
    listingProps,
  }

  it('applies a className of ListingCarousel', () => {
    const wrapper = shallow(<ListingCarousel {...props} />)
    expect(wrapper.props().className).toBe('ListingCarousel')
  })

  it('maps the listings to the Carousel', () => {
    const snap = renderer.create(<ListingCarousel {...props} />).toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('adds the current index as selectedIndex to state', () => {
    const wrapper = shallow(<ListingCarousel {...props} selectedIndex={1} />)

    expect(wrapper.state('selectedIndex')).toEqual(1)
  })

  it('updates the selectedIndex when previous card is clicked on', () => {
    const wrapper = mount(<ListingCarousel selectedIndex={1} {...props} />)

    expect(wrapper.state('selectedIndex')).toEqual(1)
    wrapper.find(MobileMapListing).at(0).simulate('click')
    setTimeout(() => {
      expect(wrapper.state('selectedIndex')).toEqual(0)
    }, DEBOUNCE_WAIT)
  })

  it('updates the selectedIndex when next card is clicked on', () => {
    const wrapper = mount(<ListingCarousel selectedIndex={1} {...props} />)

    expect(wrapper.state('selectedIndex')).toEqual(1)
    wrapper.find(MobileMapListing).at(2).simulate('click')
    setTimeout(() => {
      expect(wrapper.state('selectedIndex')).toEqual(2)
    }, DEBOUNCE_WAIT)
  })

  it('maps the listings to the Carousel', () => {
    const snap = renderer.create(<ListingCarousel {...props} />).toJSON()
    expect(snap).toMatchSnapshot()
  })

  it('fires onSlide on selected index change', () => {
    const onSlide = jest.fn()
    const wrapper = mount(<ListingCarousel {...props} onSlide={onSlide} />)
    expect(onSlide).not.toHaveBeenCalled()
    wrapper.find(MobileMapListing).at(1).simulate('click')
    setTimeout(() => {
      expect(onSlide).toHaveBeenCalled()
    }, DEBOUNCE_WAIT)
  })

  it('waits half a second to change selected index on click', () => {
    const onSlide = jest.fn()
    const wrapper = mount(<ListingCarousel {...props} onSlide={onSlide} />)
    expect(onSlide).not.toHaveBeenCalled()
    wrapper.find(MobileMapListing).at(1).simulate('click')
    expect(onSlide).not.toHaveBeenCalled()
    setTimeout(() => {
      expect(onSlide).toHaveBeenCalled()
    }, DEBOUNCE_WAIT)
  })

  describe('only passes onClick events to the selected listing', () => {
    it('does not call the handler when card is not selected', () => {
      const wrapper = mount(
        <ListingCarousel
          selectedIndex={0} {...props}
        />)

      expect(wrapper.state('selectedIndex')).toEqual(0)
      wrapper.find(MobileMapListing).at(1).simulate('click')
      setTimeout(() => {
        expect(onClick.mock.calls.length).toEqual(0)
      }, DEBOUNCE_WAIT)
    })

    it('calls the handler when the card is selected', () => {
      const wrapper = mount(
        <ListingCarousel
          selectedIndex={0}
          {...props}
        />)

      wrapper.find(MobileMapListing).at(0).simulate('click')
      setTimeout(() => {
        expect(onClick.mock.calls.length).toEqual(1)
        expect(onClick.mock.calls[0][0]).toEqual(0)
        expect(onClick.mock.calls[0][1]).toEqual(listings[0])
      }, DEBOUNCE_WAIT)
    })
  })
})
