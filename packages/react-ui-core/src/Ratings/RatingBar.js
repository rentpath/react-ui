import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from '@rentpath/react-themed'
import clsx from 'clsx'

@themed(/^(RatingBar|Label)/, {
  pure: true,
})
export default class RatingBar extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    maxScore: PropTypes.number,
    score: PropTypes.number,
    label: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    score: 0,
    maxScore: 5,
  }

  get ratingItems() {
    const {
      theme,
      score,
      maxScore,
    } = this.props

    const calcScore = (score / maxScore)
    const scorePercent = (calcScore > 1 ? 1 : calcScore) * 100

    return (
      <div className={theme.RatingBar_Background}>
        {!!scorePercent && (
          <div
            className={theme.RatingBar_Icons} style={{
              width: `${scorePercent}%`,
            }}
          />
        )}
      </div>
    )
  }

  render() {
    const {
      theme,
      label,
      className,
      score,
      maxScore,
      ...props
    } = this.props

    return (
      <div
        className={
          clsx(
            theme.RatingBar,
            className,
          )
        }
        {...props}
      >
        {this.ratingItems}
        {label && (
          <div className={theme.Label}>
            {label}
          </div>
        )}
      </div>
    )
  }
}
