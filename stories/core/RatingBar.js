import React from 'react'
import { RatingBar } from 'react-ui-core/src'
import theme from '../theme/core/RatingBar.css'

const handleRatingClick = ({ pageX, currentTarget }) => {
  const getBoundingClientRect = currentTarget.getBoundingClientRect()
  const starValue =
    Math.ceil(((pageX - getBoundingClientRect.left) / getBoundingClientRect.width) * 5)
  // eslint-disable-next-line no-alert
  window.alert(starValue)
}

export const DefaultRatingBar = (
  <RatingBar
    className={theme.themedRating_star}
    score={4}
  />
)

export const CircleRatingBar = (
  <RatingBar
    className={theme.themedRating_circle}
    score={4}
  />
)

export const LabeledRatingBar = (
  <RatingBar
    className={theme.themedRating_star}
    score={3}
    label="3 out of 5"
  />
)

export const MaxScoreTenRatingBar = (
  <RatingBar
    className={theme.themedRating_star10}
    maxScore={10}
    score={7}
    label="7 out of 10"
  />
)

export const PartialRatingBar = (
  <RatingBar
    className={theme.themedRating_star}
    score={3.5}
  />
)

export const HandleRatingClick = (
  <RatingBar
    className={theme.themedRating_star}
    score={0}
    onClick={handleRatingClick}
    label="Click a Star"
  />
)
