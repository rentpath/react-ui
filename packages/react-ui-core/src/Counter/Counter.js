import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(count) {
    this.props.handleClick(count)
    this.setState({
      count,
    })
  }
  render() {
    const { count } = this.state
    const { theme, label, decrementUnit, incrementUnit, changeValue } = this.props
    return (
      <div className={theme.Counter}>
        <div className={theme['Counter-label']}>
          {label}
        </div>
        <div className={theme['Counter-label-active']}>
          <span
            role='incrementUnit'
            onClick={() => this.handleClick(this.state.count + changeValue)}
            className={cn(
              theme['Counter-content'],
              theme['Counter-shape'],
            )}
          >
            {this.props.decrementOperator}
          </span>
          <span
            className={cn(
              theme['Counter-content'],
              theme['Counter-count-content'],
              theme['Counter-Shape'],
            )}
          >{`${decrementUnit} ${count} ${incrementUnit}`}</span>
          <span
            role='decrementUnit'
            onClick={() => this.handleClick(this.state.count - changeValue)}
            className={cn(
              theme['Counter-content'],
              theme['Counter-shape'],
            )}
          >
            {this.props.incrementOperator}
          </span>
        </div>
      </div>
    )
  }
}

Counter.defaultProps = {
  theme: {},
  count: 0,
  decrementUnit: '',
  incrementUnit: '',
  handleClick: () => {},
  decrementOperator: <span>-</span>,
  incrementOperator: <span>+</span>,
  changeValue: 1,
}

Counter.propTypes = {
  decrementOperator: PropTypes.element,
  incrementOperator: PropTypes.element,
  theme: PropTypes.object,
  count: PropTypes.number,
  changeValue: PropTypes.number,
  decrementUnit: PropTypes.string,
  incrementUnit: PropTypes.string,
  handleClick: PropTypes.func,
}
