import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ListingCell, ListingComponents } from 'react-ui-core/src'

const baseListing = {
  bedrooms: '1-3 Bedrooms',
  bathrooms: '2 Bathrooms',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1 MILLION DOLLARS',
  rating: {
    score: 4,
    label: '20',
    fillColor: 'yellow',
    backgroundFillColor: '#ffffff',
    uniqueId: '123',
  },
}

export const DefaultListingCell = (
  <ListingCell listing={baseListing}>
    <ListingComponents.Bedroom />
    <div>
      <ListingComponents.Bathroom />
      <div>
        <ListingComponents.Bedroom />
      </div>
      <div>
        <ListingComponents.Bathroom />
        <h1>hello</h1>
        <ListingComponents.Ratings />
        <ListingComponents.Price />
      </div>
    </div>
  </ListingCell>
)

const SideBySideListingCell = ({ theme }) => {
  const options = {
    1: '1 Star',
    2: '2 Stars',
    3: '3 Stars',
    4: '4 Stars',
    5: '5 Stars',
  }

  const listing = {
    ...baseListing,
    bedrooms: text('listing.bedrooms', baseListing.bedrooms),
    bathrooms: text('listing.bathrooms', baseListing.bathrooms),
    rating: {
      ...baseListing.rating,
      score: parseInt(select('listing.rating.score', options, baseListing.rating.score.toString()), 10),
      fillColor: text('listing.rating.fillColor', baseListing.rating.fillColor),
      label: text('listing.rating.label', baseListing.rating.label),
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
    hasCoupon: boolean('coupon', true),
  }

  return (
    <ListingCell listing={listing} onClick={() => action('click')('click')}>
      <div className={theme.SideBySideListingCell_BedBath}>
        <ListingComponents.Bedroom />
        <ListingComponents.Bathroom />
      </div>
      <ListingComponents.Ratings />
      {listing.hasCoupon && <div>Coupon!</div>}
      <ListingComponents.Photos server="https://image.rent.com/" dimensions="400-200" showNav />
    </ListingCell>
  )
}
SideBySideListingCell.propTypes = {
  theme: PropTypes.object,
}

const ThemedSideBySideListingCellComponent = themed(['SideBySideListingCell_BedBath'])(SideBySideListingCell)
export const ThemedListingCell = <ThemedSideBySideListingCellComponent />