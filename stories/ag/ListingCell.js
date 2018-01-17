import React from 'react'
import { ListingCell, SingleFamilyListingCell } from 'react-ui-ag/src'
import { action } from '@storybook/addon-actions'
import Star from './StarRatingItem'

export const DefaultListingCell = (
  <ListingCell
    onCardClick={action('card click action')}
    onFavoriteClick={action('on favorite click')}
    listingDetails={{
      listingId: 1,
      rating: 4,
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

export const ListingCellSingleFamily = (
  <SingleFamilyListingCell
    onCardClick={action('card click action')}
    onFavoriteClick={action('on favorite click')}
    listingDetails={{
      listingId: 1,
      price: '$800',
      title: '3921 Tugaloo River Drive Northside Park North East',
      bedroomText: '4 beds',
      availableText: 'Available now',
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
