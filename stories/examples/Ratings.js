import React from 'react'
import { RatingBar } from 'react-ui-core/src'
import { Square, Circle } from '../SampleRatingItem'
import { RatingBarTheme } from '../theme'

export const DefaultRatings = (
  <RatingBar
    score={2.35}
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const SquareRatings = (
  <RatingBar
    RatingItem={Square}
    score={5}
    label="15"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const CircleRatings = (
  <RatingBar
    RatingItem={Circle}
    score={4}
    label="200 Rated"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const ThreeRatings = (
  <RatingBar
    RatingItem={Square}
    score={3}
    label="27 Awesome"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const TwoRatings = (
  <RatingBar
    RatingItem={Square}
    score={2}
    label="403"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const OneRatings = (
  <RatingBar
    RatingItem={Circle}
    score={1}
    label="3333"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const ManyRatings = (
  <RatingBar
    RatingItem={Square}
    maxScore={63}
    score={34}
    label="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial1 = (
  <RatingBar
    score={3.5}
    label="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial2 = (
  <RatingBar
    score={4.4}
    label="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial3 = (
  <RatingBar
    score={0.75}
    label="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)
