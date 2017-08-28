import React from 'react'
import renderer from 'react-test-renderer'
import RatingBar from '../RatingBar'

it('renders correctly', () => {
  const tree = renderer.create(
    <RatingBar
      ratingScale={5}
      rating={3}
      total= {'20 Ratings'}
      color="royalblue"
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('does not render anything when rating scale is 0 no matter what the rating might be', () => {
  const tree = renderer.create(
    <RatingBar
      ratingScale={0}
      rating={2.35}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('only renders rating count', () => {
  const tree = renderer.create(
    <RatingBar
      ratingScale={0}
      rating={4}
      total= {'20 Ratings'}
      color="royalblue"
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders partial ratings', () => {
  const tree = renderer.create(
    <RatingBar
      ratingScale={5}
      rating={2.35}
      total= {'20 Ratings'}
      color="royalblue"
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
