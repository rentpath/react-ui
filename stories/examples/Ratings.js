import React from 'react'
import { RatingBar, RatingItem }  from 'react-ui-core/src'
import { RatingBarTheme } from '../theme'

export const DefaultRatings = (
  <RatingBar
    max={5}
    rating={2.35}
    total= {10}
    backgroundColor={'royalblue'}
    theme={RatingBarTheme}
  />
)

export const FullRatings = (
  <RatingBar
    max={5}
    rating={5}
    total= {15}
    backgroundColor={'red'}
    theme={RatingBarTheme}
  />
)

export const FourRatings = (
  <RatingBar
    max={5}
    rating={4}
    total= {200}
    backgroundColor={'yellow'}
    theme={RatingBarTheme}
  />
)

export const ThreeRatings = (
  <RatingBar
    max={5}
    rating={3}
    total= {27}
    backgroundColor={'green'}
    theme={RatingBarTheme}
  />
)

export const TwoRatings = (
  <RatingBar
    max={5}
    rating={2}
    total= {403}
    backgroundColor={'brown'}
    theme={RatingBarTheme}
  />
)

export const OneRatings = (
  <RatingBar
    max={5}
    rating={1}
    total= {1}
    backgroundColor={'pink'}
    theme={RatingBarTheme}
  />
)

export const ManyRatings = (
  <RatingBar
    max={63}
    rating={34}
    total= {150}
    backgroundColor={'gold'}
    theme={RatingBarTheme}
  />
)

export const Partial1 = (
  <RatingBar
    max={5}
    rating={3.5}
    total= {150}
    backgroundColor={'royalblue'}
    theme={RatingBarTheme}
  />
)

export const Partial2 = (
  <RatingBar
    max={5}
    rating={4.4}
    total= {150}
    backgroundColor={'royalblue'}
    theme={RatingBarTheme}
  />
)

export const Partial3 = (
  <RatingBar
    max={5}
    rating={0.75}
    total= {150}
    backgroundColor={'royalblue'}
    theme={RatingBarTheme}
  />
)
