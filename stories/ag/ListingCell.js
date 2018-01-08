import React from 'react'
// import PropTypes from 'prop-types'
import themed from 'react-themed'
import { ListingCell } from 'react-ui-ag/src'

export const DefaultListingCell = (
  <ListingCell
    onCardClick={() => console.log('on card click')}
    listingDetails={{
      listingId: 1,
      avgOverallRating: 4.2,
      numRatings: 10,
      price: 2000,
      title: 'Cool Apartment',
      bedroomText: '3 bedrooms',
    }}
  />
)
