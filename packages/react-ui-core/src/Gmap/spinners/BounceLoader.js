import React, { Component } from 'react'
import PropTypes from 'prop-types'

const defaultAnimationStyle = i =>
  `BOUNCELOADER 2.1s ${i === 1 ? '1s' : '0s'} infinite ease-in-out`

class Loader extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
    sizeUnit: PropTypes.string,
    className: PropTypes.string,
    animation: PropTypes.func,
  };

  static defaultProps = {
    loading: true,
    color: '#000000',
    size: 60,
    sizeUnit: 'px',
    className: '',
    animation: defaultAnimationStyle,
  };

  style(scale) {
    const { size, color, sizeUnit, animation } = this.props

    return {
      position: 'absolute',
      height: `${size}${sizeUnit}`,
      width: `${size}${sizeUnit}`,
      backgroundColor: `${color}`,
      borderRadius: '100%',
      opacity: 0.6,
      top: 0,
      left: 0,
      animationFillMode: 'both',
      animation: animation(scale),
    }
  }

  wrapperStyles() {
    const { size, sizeUnit } = this.props

    return {
      position: 'relative',
      width: `${size}${sizeUnit}`,
      height: `${size}${sizeUnit}`,
    }
  }

  render() {
    const { loading, className } = this.props

    return loading ? (
      <div className={className}>
        <div style={this.style(0)} />
        <div style={this.style(1)} />
        {/* eslint-disable-next-line */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes BOUNCELOADER {
            0% {
              transform: scale(0);
              -webkit-transform: scale(0);
            }
            50% {
              transform: scale(1);
              -webkit-transform: scale(1);
            }
            100% {
              transform: scale(0);
              -webkit-transform: scale(0);
            }
          }
        ` }}
        />
      </div>
    ) : null
  }
}

export default Loader
