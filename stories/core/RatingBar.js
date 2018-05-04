import React from 'react'
import { RatingBar } from 'react-ui-core/src'
import theme from '../theme/core/RatingBar.css'

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
