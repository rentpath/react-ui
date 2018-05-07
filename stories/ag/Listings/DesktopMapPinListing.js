import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { action } from '@storybook/addon-actions'
import { DesktopMapPinListing } from 'react-ui-ag/src'
import { boolean } from '@storybook/addon-knobs'

const baseListing = {
  bedrooms: '1-3 Beds',
  bathrooms: '2 Bathrooms',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  address: '3921 Tugaloo River Drive Northside Park Washington Parkway',
  neighborhood: '(Hoodstown, Place of Crazy Coolness)',
  unitLevelAvailability: '• 8 units left',
  availability: 'Available Now',
  banner: '$ Coupon',
  rating: {
    score: 4,
    label: '20',
  },
  photo: {
    url: 'https://image.rent.com/imgr/2576db62ffa153ebef00317a5c68a368/100-100/',
    title: 'test 1',
  },
  phone: '(404)378-1428',
}

const props = {
  listing: baseListing,
  onClick: () => action('click')('listing cell click'),
  favoriteButton: {
    onClick: (listing, value) => action('click')('favorite toggled to ', value),
    children: '♥',
  },
}

const ExampleDesktopMapPinListingComponent = ({ theme }) => {
  const listing = {
    ...baseListing,
    isFavorited: boolean('listing.isFavorited', false),
  }

  const ctaButtons = [
    {
      children: 'Contact Property',
      onClick: () => action('click')('contact CTA action'),
      className: theme.DesktopMapPinListing_CtaButtonContact,
    },
    {
      valueLocation: 'phone',
      onClick: () => action('click')('Phone CTA action'),
      className: theme.DesktopMapPinListing_CtaButtonPhone,
    },
  ]

  return (
    <DesktopMapPinListing
      {...props}
      listing={listing}
      ctaButtons={ctaButtons}
    />
  )
}

ExampleDesktopMapPinListingComponent.propTypes = {
  theme: PropTypes.object,
}

ExampleDesktopMapPinListingComponent.defaultProps = {
  theme: {},
}

const ThemedExampleDesktopMapPinListing = themed(/^DesktopMapPinListing/)(ExampleDesktopMapPinListingComponent)
const ExampleDesktopMapPinListing = <ThemedExampleDesktopMapPinListing />
export { ExampleDesktopMapPinListing }
