import React from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import { action } from '@storybook/addon-actions'
import { RatingFilterCard } from 'react-ui-ag/src'

const InlineRatingFilterCardComponent = ({ theme }) => (
  <RatingFilterCard
    className={theme.InlineCard}
    applyButton={{
      onClick: value => action('click')(`apply(${value})`),
      name: 'Apply filter',
    }}
  />
)
InlineRatingFilterCardComponent.propTypes = {
  theme: PropTypes.object,
}
const ThemedInlineRatingFilterCard = themed(['InlineCard'])(InlineRatingFilterCardComponent)
const InlineRatingFilterCard = <ThemedInlineRatingFilterCard />

export { InlineRatingFilterCard }
