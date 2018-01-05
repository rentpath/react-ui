import React from 'react'
import RatingBar from '../RatingBar'
import { Square, Circle } from './SampleRatingItem'
import coreStory from '../.storybook/coreStory'

coreStory('Rating Bar', module)
  .add('Ratings', () => (
    <RatingBar
      uniqueId="default"
      score={2.35}
      fillColor="royalblue"
    />
  ))
  .add('Square Rating', () => (
    <RatingBar
      uniqueId="square"
      RatingItem={Square}
      score={5}
      label="15"
      fillColor="royalblue"
    />
  ))
  .add('Circle Rating', () => (
    <RatingBar
      uniqueId="circle"
      RatingItem={Circle}
      score={4}
      label="200 Rated"
      fillColor="royalblue"
    />
  ))
  .add('3 Ratings', () => (
    <RatingBar
      uniqueId="three"
      score={3}
      label="27 Awesome"
      fillColor="royalblue"
    />
  ))
  .add('Max score of 10', () => (
    <RatingBar
      uniqueId="maxScore"
      maxScore={10}
      score={7}
      label="7 out of 10"
      fillColor="royalblue"
    />
  ))
  .add('Partial Rating', () => (
    <RatingBar
      uniqueId="partial"
      score={3.5}
      label="3.5 partial rating"
      fillColor="royalblue"
    />
  ))
  .add('Two Color Rating', () => (
    <RatingBar
      uniqueId="twoColor"
      score={3.5}
      fillColor="yellow"
      backgroundFillColor="royalblue"
    />
  ))
