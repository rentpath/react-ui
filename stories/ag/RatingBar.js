import React, { PureComponent } from 'react'
// import styled from 'styled-components'
// const star = style.svg``

export default class RatingBar extends PureComponent {
  render() {
    const {
      ...props
    } = this.props

    const score = 4
    const fillColor = '#9b9b9b'
    const strokeWidth = 0
    const backgroundFillColor = '#fbb900'

    let backgroundStopOpacity = 1
    let effectiveBackgroundFillColor = backgroundFillColor

    if (!effectiveBackgroundFillColor) {
      effectiveBackgroundFillColor = fillColor
      backgroundStopOpacity = 0
    }

    return (
      <div {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="50"
          viewBox="0 0 250 48"
        >
          <defs>
            <linearGradient id="fullRatingStar">
              <stop offset="0%" stopOpacity="1" stopColor={fillColor} />
              <stop offset="0%" stopOpacity="1" stopColor={fillColor} />
              <stop
                offset="0%"
                stopOpacity={backgroundStopOpacity}
                stopColor={effectiveBackgroundFillColor}
              />
              <stop
                offset="100%"
                stopOpacity={backgroundStopOpacity}
                stopColor={effectiveBackgroundFillColor}
              />
            </linearGradient>
            { !Number.isInteger(score) &&
              <linearGradient id="partialRatingStar">
                <stop offset="0%" stopOpacity="1" stopColor={fillColor} />
                <stop offset="0%" stopOpacity="1" stopColor={fillColor} />
                <stop
                  offset="0%"
                  stopOpacity={backgroundStopOpacity}
                  stopColor={effectiveBackgroundFillColor}
                />
                <stop
                  offset="100%"
                  stopOpacity={backgroundStopOpacity}
                  stopColor={effectiveBackgroundFillColor}
                />
              </linearGradient>
            }
            <linearGradient id="emptyRatingStar">
              <stop offset="0%" stopOpacity="1" stopColor={fillColor} />
              <stop offset="100%" stopOpacity="1" stopColor={fillColor} />
              <stop
                offset="100%"
                stopOpacity={backgroundStopOpacity}
                stopColor={effectiveBackgroundFillColor}
              />
              <stop
                offset="100%"
                stopOpacity={backgroundStopOpacity}
                stopColor={effectiveBackgroundFillColor}
              />
            </linearGradient>
            <path
              id="RatingStarPath"
              stroke="#000"
              strokeWidth={strokeWidth}
              d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
            />
          </defs>
          <use
            x="00" y="0" href="#RatingStarPath"
            fill={'url(#fullRatingStar)'}
          />
          <use
            x="50" y="0" href="#RatingStarPath"
            fill={'url(#fullRatingStar)'}
          />
          <use
            x="100" y="0" href="#RatingStarPath"
            fill={'url(#fullRatingStar)'}
          />
          <use
            x="150" y="0" href="#RatingStarPath"
            fill={'url(#fullRatingStar)'}
          />
          <use
            x="200" y="0" href="#RatingStarPath"
            fill={'url(#emptyRatingStar)'}
          />
        </svg>
      </div>
    )
  }
}
