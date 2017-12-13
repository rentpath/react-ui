import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import Star from './Star'

@themed(/^(RatingBar|Label)/, {
  pure: true,
})

export default class RatingBar extends PureComponent {
  static propTypes = {
    uniqueId: PropTypes.string.isRequired,
    theme: PropTypes.object,
    fillColor: PropTypes.string,
    className: PropTypes.string,
    maxScore: PropTypes.number,
    score: PropTypes.number,
    label: PropTypes.string,
    RatingItem: PropTypes.func,
  }
  static defaultProps = {
    theme: {},
    score: 0,
    maxScore: 5,
    RatingItem: Star,
    fillColor: 'black',
  }

  get ratingItems() {
    const {
      uniqueId,
      maxScore,
      RatingItem,
      theme,
      className,
      ...props
    } = this.props

    return [...Array(maxScore).keys()].map(index => (
      <RatingItem
        key={index}
        className={
          classnames(
            theme.RatingBar_Item,
            theme[`RatingBar_Item-${index}`],
            this.props.fillColor && theme[`RatingBar_Item-${this.props.fillColor}`]
          )
        }
        uniqueId={`${uniqueId}-rating-item-${index}`}
        width={`${this.fillWidth(index)}%`}
        {...props}
      />
    ))
  }

  get renderLabel() {
    const { theme, label } = this.props

    return (
      <div className={theme.Label}>
        {label}
      </div>
    )
  }

  fillWidth(index) {
    const { score, maxScore } = this.props
    const adjustedScore = score > maxScore ? maxScore : score

    if (adjustedScore > index) {
      const diff = Math.abs(adjustedScore - index)
      return diff >= 1 ? 100 : diff * 100
    }
    return 0
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
