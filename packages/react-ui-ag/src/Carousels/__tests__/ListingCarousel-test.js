import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import theme from './mocks/theme'
import ThemedListingCarousel from '../ListingCarousel'
import { MobileMapListing } from '../../Listings'

const ListingCarousel = ThemedListingCarousel.WrappedComponent
const onClick = jest.fn()

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
      label: '20',
      uniqueId: '123',
    },
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
    rating: {
      score: 1,
      label: '43,423',
      uniqueId: '234',
    },
    phone: '972-555-8921',
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
    rating: {
      score: 3,
      label: '234',
      uniqueId: '345',
    },
    phone: '800-555-5555',
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
    rating: {
      score: 2,
      label: '567',
      uniqueId: '5678',
    },
    phone: '678-777-9311',
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
    rating: {
      score: 2,
      label: '567',
      uniqueId: '5678',
    },
    phone: '555-867-5309',
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
  ratings: {
    fillColor: 'yellow',
    backgroundFillColor: '#ffffff',
  },
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
    expect(wrapper.state('selectedIndex')).toEqual(0)
  })

  it('updates the selectedIndex when next card is clicked on', () => {
    const wrapper = mount(<ListingCarousel selectedIndex={1} {...props} />)

    expect(wrapper.state('selectedIndex')).toEqual(1)
    wrapper.find(MobileMapListing).at(2).simulate('click')
    expect(wrapper.state('selectedIndex')).toEqual(2)
  })

  it('only passes onClick events to the selected listing', () => {
    const wrapper = mount(
      <ListingCarousel
        selectedIndex={0} {...props}
      />)

    expect(wrapper.state('selectedIndex')).toEqual(0)
    wrapper.find(MobileMapListing).at(1).simulate('click')
    expect(onClick.mock.calls.length).toEqual(0)
  })
})
