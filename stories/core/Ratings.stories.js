import React from 'react'
import { RatingBar } from 'react-ui-core/src'
import { Square, Circle } from './SampleRatingItem'
import StoryBookTheme from '../theme/Storybook.css'
import coreStory from './coreStory'

coreStory('Ratings', module)
  .add('Ratings', () => (
    <RatingBar
      uniqueId="DefaultRatings"
      score={2.35}
      fillColor="royalblue"
      className={StoryBookTheme['Story-padding']}
    />
  ))
  .add('Square Rating', () => (
    <RatingBar
      uniqueId="SquareRatings"
      RatingItem={Square}
      score={5}
      label="15"
      fillColor="royalblue"
      className={StoryBookTheme['Story-padding']}
    />
  ))
  .add('Circle Rating', () => (
    <RatingBar
      uniqueId="CircleRatings"
      RatingItem={Circle}
      score={4}
      label="200 Rated"
      fillColor="royalblue"
      className={StoryBookTheme['Story-padding']}
    />
  ))
  .add('3 Ratings', () => (
    <RatingBar
      uniqueId="ThreeRatings"
      RatingItem={Square}
      score={3}
      label="27 Awesome"
      fillColor="royalblue"
      className={StoryBookTheme['Story-padding']}
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
      className={StoryBookTheme['Story-padding']}
    />
  ))
  .add('Partial Rating', () => (
    <RatingBar
      uniqueId="Partial1"
      score={3.5}
      label="150"
      fillColor="royalblue"
      className={StoryBookTheme['Story-padding']}
    />
  ))
  .add('Two Color Rating', () => (
    <RatingBar
      uniqueId="PartialTwoColor"
      score={3.5}
      label="150"
      fillColor="yellow"
      backgroundFillColor="royalblue"
      className={StoryBookTheme['Story-padding']}
    />
  ))
