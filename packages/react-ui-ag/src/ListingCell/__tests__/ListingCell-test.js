import React from 'react'
import { mount, shallow } from 'enzyme'
import ThemedListingCell from '../ListingCell'

const defaultProps = {
  onCardClick: () => { },
  onFavoriteClick: () => { },
  listingDetails: {
    listingId: 1,
    rating: 4,
    numRatings: 10,
    price: '$2000+',
    title: 'Cool Apartment',
    bedroomText: '3 bedrooms',
    availableText: 'find me',
  },
  viewType: 'map',
  ctaSection: [
    {
      children: '404-378-1428',
      onClick: () => { },
      type: 'phone',
    },
    {
      children: 'send an email',
      onClick: () => { },
      type: 'contact',
    },
  ],
}

const ListingCell = ThemedListingCell.WrappedComponent

describe('ag/ListingCell/ListingCell', () => {
  describe('ratings', () => {
    it('passes a custom rating item to Ratings component', () => {
      const wrapper = mount(
        <ListingCell
          {...defaultProps}
          RatingItem={() => <div data-tid="test-item" />}
        />
      )
      expect(wrapper.find('[data-tid="test-item"]')).toHaveLength(5)
    })

    it('highlights correct number of rating items', () => {
      const wrapper = mount(<ListingCell {...defaultProps} />)
      const ratingItems = (wrapper.find('Star'))
      ratingItems.forEach((item, i) => {
        if (i < 4) {
          expect(item.props().width).toEqual('100%')
        } else {
          expect(item.props().width).toEqual('0%')
        }
      })
    })
  })

  describe('CTA buttons', () => {
    describe('multiple CTAs', () => {
      const wrapper = shallow(<ListingCell {...defaultProps} />)
      it('should generate buttons from an array of objects', () => {
        expect(wrapper.find('Themed(Button)')).toHaveLength(2)
      })

      it('should render ratings if more than one CTA is passed in', () => {
        expect(wrapper.find('Themed(RatingBar)')).toHaveLength(1)
      })
    })

    describe('single CTA', () => {
      const onClick = jest.fn()
      const wrapper = mount(
        <ListingCell
          {...defaultProps}
          ctaSection={{
            children: 'send an email',
            onClick,
            type: 'contact',
          }}
        />
      )
      it('should generate buttons from a single object', () => {
        expect(wrapper.find('Button')).toHaveLength(1)
      })

      it('should fire onClick on ctaSection click', () => {
        wrapper.find('Button').simulate('click')
        expect(onClick).toHaveBeenCalled()
      })

      it('renders availabilty if only one CTA is passed in', () => {
        const details = wrapper.find('Text')
        expect(details.at(4).text()).toEqual('find me')
      })

      it('does not render rating bar if only one CTA is passed in', () => {
        expect(wrapper.find('RatingBar')).toHaveLength(0)
      })

      it('should use a component if passed', () => {
        wrapper.setProps({ ctaSection: () => <div data-tid="test-item" /> })
        expect(wrapper.find('[data-tid="test-item"]')).toHaveLength(1)
      })
    })
  })

  it('should fire onFavoriteClick on favorite click', () => {
    const favClick = jest.fn()
    const wrapper = mount(<ListingCell {...defaultProps} onFavoriteClick={favClick} />)
    const favHeart = (wrapper.find('[data-tid="favorite-heart"]')).at(1)
    favHeart.simulate('click')
    expect(favClick).toHaveBeenCalled()
  })
})
