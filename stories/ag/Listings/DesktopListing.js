import React from 'react'
import { action } from '@storybook/addon-actions'
import { DesktopListing } from 'react-ui-ag/src'
import { boolean } from '@storybook/addon-knobs'
import ratingTheme from '../../theme/core/RatingBar.css'
import baseListing from './baseListing'

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
    className: ratingTheme.themedRating_starAgDesktop,
    theme: ratingTheme,
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
    />
  )
}
