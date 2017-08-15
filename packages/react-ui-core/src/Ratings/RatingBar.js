import React, {Component} from 'react'
import RatingItem from './RatingItem'
import styles from './RatingBar.css'

// const RatingBar = React.createClass({
export default class RatingBar extends Component {
  render() {
    const {max, rating, clipPath, itemWidth, itemHeight, backgroundColor, fillColor} = this.props;
    console.log('clipPath',clipPath)
    let ratingItems = [];
    let currentRating = rating
    console.log('currentRating', currentRating)
    while (ratingItems.length < max) {
      const ratingValue = currentRating - 1 > 0 ?
        1 : currentRating
      currentRating = currentRating - 1
      console.log('ratingvalue', ratingValue)
      const val = ratingValue < 0 ? 0 : ratingValue
      ratingItems.push(
        <RatingItem
            width={val*100+'%'}
            // width={(ratingValue || 0)*100}%
            // clipPath={clipPath}
            // height={itemHeight}
            // width={itemWidth}
            // backgroundColor={backgroundColor}
            // fillColor={fillColor}
            />)
    }
    return (
      <div className="rating-bar">
        {ratingItems}
      </div>
    )
  }
}
