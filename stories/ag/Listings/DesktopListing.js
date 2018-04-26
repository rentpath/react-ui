import React from 'react'
import { action } from '@storybook/addon-actions'
import { DesktopListing } from 'react-ui-ag/src'
import { boolean } from '@storybook/addon-knobs'

const baseListing = {
  banners: ['New Construction', 'Sponsored'],
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
  price: '$1170+',
  bedrooms: '1-3 Beds',
  bathrooms: '• 1-2 Baths',
  unitLevelAvailability: '12 Units Available',
  lastUpdated: '3hrs ago',
  availability: 'Available Now',
  name: 'The Grand at Beckwood',
  address: '3921 Tugaloo River Drive Northside Park Washington Parkway',
  rating: {
    score: 4,
    label: '(20)',
    uniqueId: '123',
  },
  phone: '(404) 770-5555',
}

const props = {
  listing: baseListing,
  onClick: () => action('click')('listing cell click'),
  favoriteButton: {
    onClick: (listing, value) => action('click')('favorite toggled to ', value),
    children: '♥',
    className: 'favorite-button',
  },
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '280-120',
    showIndex: true,
  },
  ratings: {
    fillColor: '#d2232a',
    backgroundFillColor: '#ffffff',
  },
  ctaButtons: [
    {
      children: 'Check Availability',
      onClick: () => action('click')('contact CTA action'),
      className: 'contact',
    },
    {
      children: '$ Coupon',
      onClick: () => action('click')('coupon CTA action'),
      className: 'coupon',
      'data-tid': 'coupon-button',
      'data-tag_item': 'coupon',
    },
  ],
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
      onClick: () => action('click')('contact CTA action'),
      className: 'contact',
    },
  ],
}

export const ExampleDesktopListing = () => {
  const isActive = boolean('isActive', true)
  const listing = {
    ...baseListing,
    isFavorited: boolean('listing.isFavorited', false),
  }
  return (
    <DesktopListing
      {...props}
      listing={listing}
      isActive={isActive}
      onImageClick={() => console.log('testing')}
    />
  )
}

export const ExampleSingleFamilyDesktopListing = () => {
  const isActive = boolean('isActive', true)
  const listing = {
    ...singleFamilyProps.listing,
    isFavorited: boolean('listing.isFavorited', false),
  }
  return (
    <DesktopListing
      {...singleFamilyProps}
      listing={listing}
      isActive={isActive}
      onImageClick={() => console.log('testing')}
    />
  )
}
