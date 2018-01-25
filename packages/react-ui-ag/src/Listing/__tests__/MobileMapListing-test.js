import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button, RatingBar, ToggleButton } from '@rentpath/react-ui-core'
import ThemedMobileMapListing from '../MobileMapListing'

const MobileMapListing = ThemedMobileMapListing.WrappedComponent

const baseListing = {
  bedrooms: '1-3 Bedrooms',
  bathrooms: '2 Bathrooms',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  rating: {
    score: 4,
    label: '20',
    fillColor: 'yellow',
    backgroundFillColor: '#ffffff',
    uniqueId: '123',
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
  ctaButtons: [
    {
      children: '404-378-1428',
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
  banner: '$ Coupon',
}

describe('ag/Listing/MobileMapListing', () => {
  describe('ctaButtons', () => {
    let wrapper
    let ctaClick
    let cardClick

    beforeEach(() => {
      ctaClick = jest.fn()
      cardClick = jest.fn()
      wrapper = shallow(
        <MobileMapListing
          {...props}
          ctaButtons={[{ onClick: ctaClick }, { onClick: ctaClick }]}
          onClick={cardClick}
        />
      )
    })

    it('handle an array of cta buttons', () => {
      expect(wrapper.find(Button)).toHaveLength(2)
    })

    it('fire cta buttons on click action on click', () => {
      wrapper.find('[data-tid="cta-button"]').at(0).simulate('click')
      wrapper.find('[data-tid="cta-button"]').at(1).simulate('click')
      expect(ctaClick.mock.calls).toHaveLength(2)
    })
  })

  it('fires favoriteButton click action on favorite button click', () => {
    const favoriteClick = jest.fn()
    const wrapper = shallow(
      <MobileMapListing
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
      <MobileMapListing
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
      <MobileMapListing
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
      <MobileMapListing
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
      <MobileMapListing
        {...props}
        onClick={cardClick}
      />
    )
    wrapper.simulate('click')
    expect(cardClick).toHaveBeenCalled()
  })

  it('populates components from listing object prop', () => {
    const wrapper = mount(<MobileMapListing {...props} />)
    expect(wrapper.find('[data-tid="bedroom"]').at(0).text()).toEqual(baseListing.bedrooms)
    expect(wrapper.find(RatingBar).props().score).toEqual(4)
  })
})
