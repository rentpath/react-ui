import React from 'react'
import RatingBar from '../RatingBar'
import { Square, Circle } from './SampleRatingItem'
import coreStory from '../.storybook/coreStory'

coreStory('Rating Bar', module)
  .add('Ratings', () => (
    <RatingBar
      uniqueId="DefaultRatings"
      score={2.35}
      fillColor="royalblue"
    />
  ))
  .add('Square Rating', () => (
    <RatingBar
      uniqueId="SquareRatings"
      RatingItem={Square}
      score={5}
      label="15"
      fillColor="royalblue"
    />
  ))
  .add('Circle Rating', () => (
    <RatingBar
      uniqueId="CircleRatings"
      RatingItem={Circle}
      score={4}
      label="200 Rated"
      fillColor="royalblue"
    />
  ))
  .add('3 Ratings', () => (
    <RatingBar
      uniqueId="ThreeRatings"
      RatingItem={Square}
      score={3}
      label="27 Awesome"
      fillColor="royalblue"
    />
  ))
  .add('Many Ratings', () => (
    <RatingBar
      uniqueId="ManyRatings"
      RatingItem={Square}
      maxScore={63}
      score={34}
      label="150"
      fillColor="royalblue"
    />
  ))
  .add('Partial Rating', () => (
    <RatingBar
      uniqueId="Partial1"
      score={3.5}
      label="150"
      fillColor="royalblue"
    />
  ))
  .add('Two Color Rating', () => (
    <RatingBar
      uniqueId="PartialTwoColor"
      score={3.5}
      label="150"
      fillColor="yellow"
      backgroundFillColor="royalblue"
    />
  ))
