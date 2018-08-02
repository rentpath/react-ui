import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ListingCell, ListingComponents, Button } from 'react-ui-core/src'
import ratingTheme from '../theme/core/RatingBar.css'

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
  },
  phone: '555-867-5309',
}

const ratingProps = {
  score: 4,
  label: '20',
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
        <ListingComponents.Ratings {...ratingProps} />
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
      label: text('listing.rating.label', baseListing.rating.label),
    },
    photos: [
      {
        path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/d13b78bff171be4a68ff576e036251ab/fc5b7d16d7ce9c82787883e3a9bc6c30',
        caption: 'test 1',
      },
      {
        path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/d13b78bff171be4a68ff576e036251ab/d56984e959a3feb1235f85ee202a0fc6',
        caption: null,
      },
      {
        path: 'c_fill,w_393,h_160,q_30,fl_progressive:semi,dpr_1.0/d13b78bff171be4a68ff576e036251ab/fd972eb03a0463c484580349ad5177b7',
        caption: null,
      },
    ],
    hasCoupon: boolean('coupon', true),
  }

  const sideBySideRatingProps = {
    ...ratingProps,
    theme: ratingTheme,
    className: ratingTheme.themedRating_star,
  }

  return (
    <ListingCell listing={listing} onClick={() => action('click')('card click')}>
      <div className={theme.SideBySideListingCell_BedBath}>
        <ListingComponents.Bedroom />
        <ListingComponents.Bathroom />
      </div>
      <ListingComponents.Ratings {...sideBySideRatingProps} />
      {listing.hasCoupon && <div>Coupon!</div>}
      <Button onClick={() => action('click')('button click')}>Click me!</Button>
      <ListingComponents.Photos server="https://rentpath-res.cloudinary.com/" showNav />
    </ListingCell>
  )
}
SideBySideListingCell.propTypes = {
  theme: PropTypes.object,
}

const ThemedSideBySideListingCellComponent = themed(['SideBySideListingCell_BedBath'])(SideBySideListingCell)
export const ThemedListingCell = <ThemedSideBySideListingCellComponent />
