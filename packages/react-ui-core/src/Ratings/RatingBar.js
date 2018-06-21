import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'

@themed(/^(RatingBar|Label|Legend)/, {
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

  get ratingLegend(){
    const {
      theme, 
      score,
      ratingValue
    } = this.props

    return (
      <div className={theme.Legend}>
        <div className={theme.RatingBar_RatingValue}> {ratingValue} </div>
        <div className={theme.RatingBar_LegendIcon}></div>
      </div>
    )
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
        {!!scorePercent &&
          <div
            className={theme.RatingBar_Icons} style={{
              width: `${scorePercent}%`,
            }}
          />
        }
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
      ratingValue,
      ...props
    } = this.props

    return (
      <div
        className={
          classnames(
            theme.RatingBar,
            className,
          )
        }
        {...props}
      >
        {ratingValue && this.ratingLegend}
        {this.ratingItems}
        {ratingValue && 
          <div className={theme.Label}>
            {score}
          </div>
        }
        {label && 
          <div className={theme.Label}>
            {label}
          </div>
        }
      </div>
    )
  }
}
