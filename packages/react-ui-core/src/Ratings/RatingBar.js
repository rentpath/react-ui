import React, { Component } from 'react'
import RatingItem from './RatingItem'
import PropTypes from 'prop-types'




export default class RatingBar extends Component {
  static propTypes= {
    theme: PropTypes.object,
  }
  static defaultProps = {
    theme: {},
  }

  render() {
    const { max, rating, backgroundColor, total, theme } = this.props
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
          theme={theme}
        />)
    }
    return (
      <div className="rating-bar">
      <div className={theme.ratingcomp}>{ratingItems}</div>
      <div className={theme.label}>(<span>{total}</span> {'Ratings'})</div>
      </div>
    )
  }
}
