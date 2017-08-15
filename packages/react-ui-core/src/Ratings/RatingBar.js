import React, { Component } from 'react'
import RatingItem from './RatingItem'


export default class RatingBar extends Component {
  render() {
    const { max, rating, clipPath, itemWidth, itemHeight, backgroundColor, fillColor } = this.props
    console.log('clipPath', clipPath)
    const ratingItems = []
    let currentRating = rating
    console.log('currentRating', currentRating)
    // use loop that supports index and pass to RatingItem
    while (ratingItems.length < max) {
      const ratingValue = currentRating - 1 > 0 ?
        1 : currentRating
      currentRating -= 1
      console.log('ratingvalue', ratingValue)
      const val = ratingValue < 0 ? 0 : ratingValue
      ratingItems.push(
        <RatingItem
          width={`${val * 100}%`}
          // index={`some_id${Math.random().toFixed(3)}`}
          index={currentRating}
        />)
    }
    return (
      <div className="rating-bar">
        {ratingItems}
      </div>
    )
  }
}
