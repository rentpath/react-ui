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
  }
  static defaultProps = {
    theme: {},
    score: 0,
    maxScore: 5,
  }

  get ratingItems() {
    const {
      score,
      maxScore,
      theme,
      className,
      ...props
    } = this.props

    const scoreWidth = {
      width: `${(score / maxScore) * 100}%`,
    }

    return (
      <div
        className={theme.RatingBar_Background} {...props}
      >
        <div
          className={theme.RatingBar_Icons} style={scoreWidth}
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
