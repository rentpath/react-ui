import React from 'react'
import { RatingBar } from 'react-ui-core/src'
import { Square, Circle } from '../SampleRatingItem'
import { RatingBarTheme } from '../theme'

export const DefaultRatings = (
  <RatingBar
    uniqueId="DefaultRatings"
    score={2.35}
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const SquareRatings = (
  <RatingBar
    uniqueId="SquareRatings"
    RatingItem={Square}
    score={5}
    label="15"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const CircleRatings = (
  <RatingBar
    uniqueId="CircleRatings"
    RatingItem={Circle}
    score={4}
    label="200 Rated"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const ThreeRatings = (
  <RatingBar
    uniqueId="ThreeRatings"
    RatingItem={Square}
    score={3}
    label="27 Awesome"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const TwoRatings = (
  <RatingBar
    uniqueId="TwoRatings"
    RatingItem={Square}
    score={2}
    label="403"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const OneRatings = (
  <RatingBar
    uniqueId="OneRatings"
    RatingItem={Circle}
    score={1}
    label="3333"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const ManyRatings = (
  <RatingBar
    uniqueId="ManyRatings"
    RatingItem={Square}
    maxScore={63}
    score={34}
    label="150"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial1 = (
  <RatingBar
    uniqueId="Partial1"
    score={3.5}
    label="150"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial2 = (
  <RatingBar
    uniqueId="Partial2"
    score={4.4}
    label="150"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const Partial3 = (
  <RatingBar
    uniqueId="Partial3"
    score={0.75}
    label="150"
    fillColor="royalblue"
    theme={RatingBarTheme}
  />
)

export const PartialTwoColor = (
  <RatingBar
    uniqueId="PartialTwoColor"
    score={3.5}
    label="150"
    fillColor="yellow"
    backgroundFillColor="royalblue"
    theme={RatingBarTheme}
  />
)
