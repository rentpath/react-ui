import React from 'react'
// import PropTypes from 'prop-types'
// import themed from 'react-themed'
import { ListingCell } from 'react-ui-ag/src'
import { action } from '@storybook/addon-actions'
import Star from './StarRatingItem'

export const DefaultListingCell = (
  <ListingCell
    onCardClick={action('card click action')}
    listingDetails={{
      listingId: 1,
      avgOverallRating: 4.2,
      numRatings: 10,
      price: '$2000+',
      title: 'Cool Apartment',
      bedroomText: '3 bedrooms',
    }}
    RatingItem={Star}
    viewType="map"
    ctaSection={[
      {
        children: '404-378-1428',
        onClick: action('Phone CTA action'),
        type: 'phone',
      },
      {
        children: 'send an email',
        onClick: action('contact CTA action'),
        type: 'contact',
      },
    ]}
  />
)

export const SingleFamilyListingCell = (
  <ListingCell
    onCardClick={action('card click action')}
    listingDetails={{
      listingId: 1,
      price: '$800',
      title: '3921 Tugaloo River Drive Northside Park North East',
      bedroomText: '4 beds',
      available: true,
    }}
    viewType="map"
    ctaSection={
      {
        children: '404-378-1428',
        onClick: action('contact CTA action'),
        type: 'phone',
      }
    }
  />
)