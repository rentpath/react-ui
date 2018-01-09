import React from 'react'
// import PropTypes from 'prop-types'
import themed from 'react-themed'
import { ListingCell } from 'react-ui-ag/src'
import { Button, Text } from 'react-ui-core/src'

// const ctaProps = { children: 'test', onClick: () => console.log('it works!') }
// const ctaButton = props => <Text {...props} {...ctaProps} />

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
    viewType="map"
    ctaSection={[
      {
        children: '404-378-1428',
        onClick: () => console.log('it works!'),
        type: 'phone'
      },
      {
        children: 'send an email',
        onClick: () => console.log('it works!'),
        type: 'email'
      },
    ]}
  />
)
