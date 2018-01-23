import React from 'react'
import { action } from '@storybook/addon-actions'
import { MobileMapListing } from 'react-ui-ag/src'

const baseListing = {
  bedrooms: '1-3 Beds',
  bathrooms: '2 Bathrooms',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  unitLevelAvailability: '• 8 units left',
  rating: {
    score: 4,
    label: '20',
    fillColor: 'yellow',
    backgroundFillColor: '#ffffff',
    uniqueId: '123',
  },
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
}

const props = {
  server: 'https://image.rent.com/',
  dimensions: '280-120',
  listing: baseListing,
  onClick: () => action('click')('listing cell click'),
  ctaButtons: [
    {
      children: '404-378-1428',
      onClick: action('Phone CTA action'),
      className: 'phone',
    },
    {
      children: 'send an email',
      onClick: action('contact CTA action'),
      className: 'contact',
    },
  ],
  favoriteButton: {
    onClick: action('favorite toggle action'),
    children: '♥',
  },
  banner: '$ Coupon',
}

export const ExampleMobileMapListing = (
  <MobileMapListing {...props} />
)
