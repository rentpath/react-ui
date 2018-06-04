import React from 'react'
import { action } from '@storybook/addon-actions'
import { MobileListing } from 'react-ui-ag/src'
import { boolean } from '@storybook/addon-knobs'
import ratingTheme from '../../theme/core/RatingBar.css'
import baseListing from './baseListing'

const props = {
  listing: baseListing,
  sponsoredText: 'Sponsored',
  onClick: () => action('click')('listing cell click'),
  favoriteButton: {
    onClick: (listing, value) => action('click')('favorite toggled to ', value),
    children: '♥',
  },
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '351-160',
  },
  ratings: {
    className: ratingTheme.themedRating_starAgMobile,
    theme: ratingTheme,
  },
  ctaButtons: [
    {
      children: 'Check Availability',
      onClick: () => action('click')('contact CTA action'),
    },
    {
      children: 'Contact Property',
      onClick: () => action('click')('coupon CTA action'),
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
    },
  ],
}

export const ExampleMobileListing = () => {
  const isActive = boolean('isActive', true)
  const listing = {
    ...baseListing,
    isFavorited: boolean('listing.isFavorited', false),
    sponsored: true,
  }
  return (
    <MobileListing
      {...props}
      listing={listing}
      isActive={isActive}
    />
  )
}

export const ExampleMobileListingSingleFamily = () => {
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
