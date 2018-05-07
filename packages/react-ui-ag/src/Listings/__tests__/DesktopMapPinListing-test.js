import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button, ToggleButton } from '@rentpath/react-ui-core'
import ThemedDesktopMapPinListing from '../DesktopMapPinListing'
import theme from './mocks/theme'

const DesktopMapPinListing = ThemedDesktopMapPinListing.WrappedComponent

const baseListing = {
  bedrooms: '1-3 Bedrooms',
  bathrooms: '2 Bathrooms',
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
        <DesktopMapPinListing
          {...props}
          ctaButtons={[{ children: 'foo', onClick: ctaClick }, { children: 'bar', onClick: ctaClick }]}
          onClick={cardClick}
        />
      )
    })

    it('does not render a cta button if there is no text to display in the button', () => {
      wrapper = shallow(
        <DesktopMapPinListing
          {...props}
          ctaButtons={[{ onClick: ctaClick }, { children: 'bar', onClick: ctaClick }]}
          onClick={cardClick}
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
  })

  it('fires favoriteButton click action on favorite button click', () => {
    const favoriteClick = jest.fn()
    const wrapper = mount(
      <DesktopMapPinListing
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
      <DesktopMapPinListing
        {...props}
        onClick={cardClick}
      />
    )
    wrapper.find(ToggleButton).simulate('click')
    expect(cardClick).not.toHaveBeenCalled()
  })

  it('does not fire cardClick on cta click', () => {
    const cardClick = jest.fn()
    const wrapper = mount(
      <DesktopMapPinListing
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
      <DesktopMapPinListing
        {...props}
        index={0}
        onClick={cardClick}
      />
    )
    wrapper.simulate('click')
    expect(cardClick).toHaveBeenCalled()
    expect(cardClick.mock.calls).toEqual([[0, baseListing]])
  })

  it('populates components from listing object prop', () => {
    const wrapper = mount(<DesktopMapPinListing {...props} />)
    expect(wrapper.find('div[data-tid="propertyname"]').text()).toEqual(baseListing.name)
  })

  it('sets the favorite button to favorited when the listing has isFavorited as true', () => {
    const favoritedProps = {
      ...props,
      listing: {
        ...props.listing,
        isFavorited: true,
      },
    }
    const wrapper = shallow(<DesktopMapPinListing {...favoritedProps} />)
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
    const wrapper = shallow(<DesktopMapPinListing {...favoritedProps} />)
    expect(wrapper.find(ToggleButton).prop('value')).toBeFalsy()
  })
})
