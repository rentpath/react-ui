import React from 'react'
import { action } from '@storybook/addon-actions'
import { MobileListing } from 'react-ui-ag/src'
import { boolean } from '@storybook/addon-knobs'
import ratingTheme from '../../theme/core/RatingBar.css'

const baseListing = {
  banners: ['$ Coupon'],
  bedrooms: '1-3 Beds',
  bathrooms: '2 Bathrooms',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  address: '3921 Tugaloo River Drive Northside Park Washington Parkway',
  unitLevelAvailability: '• 8 units left',
  availability: 'Available Now',
  rating: {
    score: 4,
    label: '20',
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
  url: '/apartments/Georgia/Lawrenceville/Sugarloaf-Summit/100029616/',
  phone: '404-378-1428',
}

const props = {
  listing: baseListing,
  onClick: () => action('click')('listing cell click'),
  favoriteButton: {
    onClick: (listing, value) => action('click')('favorite toggled to ', value),
    children: '♥',
  },
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '280-120',
  },
  ratings: {
    className: ratingTheme.themedRating_starAgMobile,
    theme: ratingTheme,
  },
  ctaButtons: [
    {
      valueLocation: 'phone',
      onClick: () => action('click')('Phone CTA action'),
      className: 'phone',
      itemProp: 'telephone',
    },
    {
      children: 'send an email',
      onClick: () => action('click')('contact CTA action'),
      className: 'contact',
    },
  ],
}

const singleFamilyProps = {
  ...props,
  listing: {
    ...props.listing,
    singleFamily: true,
  },
  ctaButtons: [{
    onClick: () => action('click')('More Information action'),
    className: 'phone',
    children: 'More Information',
  }],
}

export const ExampleMobileListing = () => {
  const isActive = boolean('isActive', true)
  const listing = {
    ...baseListing,
    isFavorited: boolean('listing.isFavorited', false),
  }
  return (
    <MobileListing
      {...props}
      listing={listing}
      isActive={isActive}
    />
  )
}

export const ExampleSingleFamilyMobileListing = () => {
  const isActive = boolean('isActive', true)
  const listing = {
    ...singleFamilyProps.listing,
    isFavorited: boolean('listing.isFavorited', false),
  }
  return (
    <MobileListing
      {...singleFamilyProps}
      listing={listing}
      isActive={isActive}
    />
  )
}
