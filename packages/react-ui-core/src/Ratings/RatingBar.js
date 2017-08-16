import React, { Component } from 'react'
import RatingItem from './RatingItem'
import styles from './RatingBar.css'



export default class RatingBar extends Component {
  render() {
    const { max, rating, backgroundColor, total } = this.props
    const ratingItems = []
    let currentRating = rating
    while (ratingItems.length < max) {
      const ratingValue = currentRating - 1 > 0 ?
        1 : currentRating
      currentRating -= 1
      const val = ratingValue < 0 ? 0 : ratingValue
      ratingItems.push(
        <RatingItem
          width={`${val * 100}%`}
          index={currentRating}
          backgroundColor={backgroundColor}
        />)
    }
    return (
      <div>
      <div className="rating-bar">
        {ratingItems}
      </div>
      <div className="OverallRatings">
      <div className={styles.label}>
        (<span>{total}</span> {'Ratings'})
      </div>
      </div>
      </div>
    )
  }
}
