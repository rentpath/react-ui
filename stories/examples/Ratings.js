import React from 'react'
import { RatingBar } from 'react-ui-core/src'
import { Square, Circle } from '../SampleRatingItem'
import { RatingBarTheme } from '../theme'

export const DefaultRatings = (
  <RatingBar
    ratingScale={5}
    rating={2.35}
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const SquareRatings = (
  <RatingBar
    RatingItem={Square}
    ratingScale={5}
    rating={5}
    total="15"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const CircleRatings = (
  <RatingBar
    RatingItem={Circle}
    ratingScale={5}
    rating={4}
    total="200 Rated"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const ThreeRatings = (
  <RatingBar
    RatingItem={Square}
    ratingScale={5}
    rating={3}
    total="27 Awesome"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const TwoRatings = (
  <RatingBar
    RatingItem={Square}
    ratingScale={5}
    rating={2}
    total="403"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const OneRatings = (
  <RatingBar
    RatingItem={Circle}
    ratingScale={5}
    rating={1}
    total="3333"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const ManyRatings = (
  <RatingBar
    RatingItem={Square}
    ratingScale={63}
    rating={34}
    total="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial1 = (
  <RatingBar
    ratingScale={5}
    rating={3.5}
    total="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial2 = (
  <RatingBar
    ratingScale={5}
    rating={4.4}
    total="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial3 = (
  <RatingBar
    ratingScale={5}
    rating={0.75}
    total="150"
    color="royalblue"
    theme={RatingBarTheme}
  />
)
