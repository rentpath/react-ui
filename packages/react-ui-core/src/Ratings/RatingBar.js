import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { randomId } from '@rentpath/react-ui-utils'
import Star from './Star'

export default class RatingBar extends Component {
  static propTypes = {
    theme: PropTypes.object,
    ratingScale: PropTypes.number,
    rating: PropTypes.number,
    total: PropTypes.string,
    RatingItem: PropTypes.func,
  }
  static defaultProps = {
    theme: {},
    RatingItem: Star,
  }

  get ratingItems() {
    const {
      ratingScale,
      rating,
      RatingItem,
      ...props
    } = this.props

    return [...Array(ratingScale).keys()].map(index => (
      <RatingItem
        key={index}
        id={randomId('rating-item')}
        width={`${(rating - index) * 100}%`}
        {...props}
      />
    ))
  }

  render() {
    const {
      total,
      theme,
    } = this.props
    return (
      <div className={theme.ratingbar}>
        <div className={theme.ratingcomp}>{this.ratingItems}</div>
        { total && <div className={theme.label}>{total}</div> }
      </div>
    )
  }
}
