import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import styles from './RatingBar.css'

export default class RatingItem extends Component {
  static propTypes= {
    theme: PropTypes.object,
  }
  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      width,
      index,
      backgroundColor,
      theme,
    } = this.props
    const id = `id_${index}`
    return (
      <div className={theme.ratingitem}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 51 48"
      >
        <defs>
          <linearGradient id={id}>
            <stop offset="0%" stopOpacity="1" stopColor={backgroundColor}/>
            <stop offset={width} stopOpacity="1" stopColor={backgroundColor} />
            <stop offset={width} stopOpacity="0" stopColor={backgroundColor} />
            <stop offset="100%" stopOpacity="0" stopColor={backgroundColor} />
          </linearGradient>
        </defs>
        <title>Five Pointed Star</title>
        <path
          fill={`url(#${id})`}

          stroke="#000"
          strokeWidth="3"
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
        />
      </svg>
      </div>
    )
  }
}
