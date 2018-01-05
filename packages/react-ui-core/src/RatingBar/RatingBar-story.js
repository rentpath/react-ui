import React from 'react'
import RatingBar from '../RatingBar'
import { Square, Circle } from './SampleRatingItem'
import coreStory from '../.storybook/coreStory'

coreStory('RatingBar', module)
  .add('Ratings', () => (
    <RatingBar
      uniqueId="default"
      score={4}
    />
  ))
  .add('Square Rating', () => (
    <RatingBar
      uniqueId="square"
      RatingItem={Square}
      score={3}
    />
  ))
  .add('Circle Rating', () => (
    <RatingBar
      uniqueId="circle"
      RatingItem={Circle}
      score={4}
    />
  ))
  .add('Labeled', () => (
    <RatingBar
      uniqueId="three"
      score={3}
      label="3 out of 5"
    />
  ))
  .add('Max score of 10', () => (
    <RatingBar
      uniqueId="maxScore"
      maxScore={10}
      score={7}
      label="7 out of 10"
    />
  ))
  .add('Partial Rating', () => (
    <RatingBar
      uniqueId="partial"
      score={3.5}
    />
  ))
  .add('Color filled', () => (
    <RatingBar
      uniqueId="colorFilled"
      score={3.5}
      fillColor="royalblue"
    />
  ))
  .add('Two Color Rating', () => (
    <RatingBar
      uniqueId="twoColor"
      score={3.5}
      fillColor="gold"
      backgroundFillColor="black"
    />
  ))
