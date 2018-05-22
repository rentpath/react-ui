import React from 'react'
import { mount } from 'enzyme'
import { ListingComponents, ToggleButton } from '@rentpath/react-ui-core'
import ThemedMobileListing from '../MobileListing'
import theme from './mocks/theme'

const MobileListing = ThemedMobileListing.WrappedComponent

const baseListing = {
  banners: ['$ Coupon'],
  bedrooms: '1-3 Beds',
  bathrooms: '2 Bathrooms',
  unitLevelAvailability: '• 8 units left',
  availability: 'Available Now',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  address: '3921 Tugaloo River Drive Northside Park Washington Parkway',
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
      valueLocation: 'phone',
      onClick: () => { },
      className: 'phone',
    },
    {
      children: 'send an email',
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

describe('MobileListing', () => {
  it('passes through custom props', () => {
    const wrapper = mount(
      <MobileListing
        {...props}
        data-tid="foo"
      />
    )
    expect(wrapper.find('Listing').prop('data-tid')).toEqual('foo')
  })

  describe('render listing info', () => {
    describe('components render', () => {
      it('renders Price component', () => {
        const wrapper = mount(<MobileListing {...props} />)
        expect(wrapper.find(ListingComponents.Price).exists()).toBeTruthy()
      })

      it('renders PropertyName component', () => {
        const wrapper = mount(<MobileListing {...props} />)
        expect(wrapper
          .find(ListingComponents.PropertyName).exists())
          .toBeTruthy()
      })

      it('renders Bedroom component', () => {
        const wrapper = mount(<MobileListing {...props} />)
        expect(wrapper.find(ListingComponents.Bedroom).exists()).toBeTruthy()
      })

      it('renders UnitLevelAvailability component', () => {
        const wrapper = mount(<MobileListing {...props} />)
        expect(wrapper
          .find(ListingComponents.UnitLevelAvailability).exists())
          .toBeTruthy()
      })

      it('renders Ratings component', () => {
        const wrapper = mount(<MobileListing {...props} />)
        expect(wrapper
          .find(ListingComponents.Ratings).exists())
          .toBeTruthy()
      })
    })

    describe('single family components render', () => {
      it('renders Price component', () => {
        const wrapper = mount(<MobileListing {...singleFamilyProps} />)
        expect(wrapper.find(ListingComponents.Price).exists()).toBeTruthy()
      })

      it('renders Address component', () => {
        const wrapper = mount(<MobileListing {...singleFamilyProps} />)
        expect(wrapper
          .find(ListingComponents.Address).exists())
          .toBeTruthy()
      })

      it('renders Bedroom component', () => {
        const wrapper = mount(<MobileListing {...singleFamilyProps} />)
        expect(wrapper.find(ListingComponents.Bedroom).exists()).toBeTruthy()
      })

      it('renders Availability component', () => {
        const wrapper = mount(<MobileListing {...singleFamilyProps} />)
        expect(wrapper
          .find(ListingComponents.Availability).exists())
          .toBeTruthy()
      })
    })
  })

  describe('ctaButtons', () => {
    let wrapper
    let ctaClick
    let cardClick

    beforeEach(() => {
      ctaClick = jest.fn()
      cardClick = jest.fn()
      wrapper = mount(
        <MobileListing
          {...props}
          ctaButtons={[{ children: 'foo', onClick: ctaClick }, { children: 'bar', onClick: ctaClick }]}
          onClick={cardClick}
        />
      )
    })

    it('fire cta buttons on click action on click', () => {
      wrapper.find('[data-tid="cta-button"]').at(0).simulate('click')
      wrapper.find('[data-tid="cta-button"]').at(1).simulate('click')
      expect(ctaClick.mock.calls).toHaveLength(2)
    })
  })

  describe('events', () => {
    it('fires favoriteButton click action on favorite button click', () => {
      const favoriteClick = jest.fn()
      const wrapper = mount(
        <MobileListing
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
        <MobileListing
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
        <MobileListing
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
        <MobileListing
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
        <MobileListing
          {...props}
          index={0}
          onClick={cardClick}
        />
      )
      wrapper.simulate('click')
      expect(cardClick).toHaveBeenCalled()
      expect(cardClick.mock.calls).toEqual([[0, baseListing]])
    })
  })
})
