import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

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
    onClick: PropTypes.func,
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
      onClick,
    } = this.props

    const calcScore = (score / maxScore)
    const scorePercent = (calcScore > 1 ? 1 : calcScore) * 100

    // If an onClick was requested, add a handler here,
    // but if no onClick was requested do not add a handler
    const optProps = onClick ?
      { onClick: event => this.handleClick(event) } : {}

    return (
      <div
        className={theme.RatingBar_Background} {...optProps}
      >
        <div
          className={theme.RatingBar_Icons} style={{
            width: `${scorePercent}%`,
          }}
        />
      </div>
    )
  }

  get renderLabel() {
    const {
      theme,
      label,
    } = this.props

    return (
      <div className={theme.Label}>
        {label}
      </div>
    )
  }

  handleClick(event) {
    const { onClick, maxScore } = this.props
    const { pageX, currentTarget } = event

    if (!onClick) return

    const boundingClientRect = currentTarget.getBoundingClientRect()
    const starValue =
      Math.ceil(((pageX - boundingClientRect.left) / boundingClientRect.width) * maxScore)

    // Call the user's click handler, but also pass the calculated rating value
    onClick(event, starValue)
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
        {this.ratingItems}
        {label && this.renderLabel}
      </div>
    )
  }
}
