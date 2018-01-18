import React from 'react'
import { RatingBar } from 'react-ui-core/src'
import { Square, Circle } from './SampleRatingItem'

export const DefaultRatingBar = (
  <RatingBar
    uniqueId="default"
    score={4}
  />
)

export const SquareRatingBar = (
  <RatingBar
    uniqueId="square"
    RatingItem={Square}
    score={3}
  />
)

export const CircleRatingBar = (
  <RatingBar
    uniqueId="circle"
    RatingItem={Circle}
    score={4}
  />
)

export const LabeledRatingBar = (
  <RatingBar
    uniqueId="three"
    score={3}
    label="3 out of 5"
  />
)

export const MaxScoreTenRatingBar = (
  <RatingBar
    uniqueId="maxScore"
    maxScore={10}
    score={7}
    label="7 out of 10"
  />
)

export const PartialRatingBar = (
  <RatingBar
    uniqueId="partial"
    score={3.5}
  />
)

export const ColorFilledRatingBar = (
  <RatingBar
    uniqueId="colorFilled"
    score={3.5}
    fillColor="royalblue"
  />
)

export const TwoColoredRatingBar = (
  <RatingBar
    uniqueId="twoColor"
    score={3.5}
    fillColor="gold"
    backgroundFillColor="black"
  />
)
