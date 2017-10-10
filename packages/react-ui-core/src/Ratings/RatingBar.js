import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import Star from './Star'

@themed(/^RatingBar/, {
  pure: true,
})

export default class RatingBar extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    color: PropTypes.string,
    className: PropTypes.string,
    maxScore: PropTypes.number,
    score: PropTypes.number,
    label: PropTypes.string,
    RatingItem: PropTypes.func,
  }
  static defaultProps = {
    theme: {},
    maxScore: 5,
    RatingItem: Star,
  }

  get ratingItems() {
    const {
      maxScore,
      score,
      RatingItem,
      theme,
      color,
      ...props
    } = this.props

    return [...Array(maxScore).keys()].map(index => (
      <RatingItem
        key={index}
        className={
          classnames(
            theme.RatingBar_Item,
            theme[`RatingBar_Item-${index}`],
            color && theme[`RatingBar_Item-${color}`]
          )
        }
        id={`rating-item-${index}`}
        width={`${(score - index) * 100}%`}
        {...props}
      />
    ))
  }

  get renderLabel() {
    const { theme, label } = this.props

    return (
      <div className={theme.RatingBar_Label}>
        {label}
      </div>
    )
  }

  render() {
    const {
      theme,
      label,
      className,
    } = this.props

    return (
      <div className={
        classnames(
          theme.RatingBar,
          className,
        )}
      >
        <div className={theme.RatingBar_Items}>
          {this.ratingItems}
        </div>
        {label && this.renderLabel}
      </div>
    )
  }
}
