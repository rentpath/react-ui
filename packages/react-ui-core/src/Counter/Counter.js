import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class Counter extends Component {
  static propTypes = {
    label: PropTypes.string,
    decrementOperator: PropTypes.element,
    incrementOperator: PropTypes.element,
    theme: PropTypes.object,
    count: PropTypes.number,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    decrementUnit: PropTypes.string,
    incrementUnit: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    count: 0,
    decrementUnit: '',
    incrementUnit: '',
    onClick: () => {},
    decrementOperator: <span>-</span>,
    incrementOperator: <span>+</span>,
    step: 1,
    min: 0,
    max: 10,
  }

  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count,
    }
    this.handleClick = this.handleClick.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  handleClick(count) {
    this.props.onClick(count)
    this.setState({ count })
  }

  increment() {
    const count = this.state.count + this.props.step

    if (count <= this.props.max) this.handleClick(count)
  }

  decrement() {
    const count = this.state.count - this.props.step

    if (count >= this.props.min) this.handleClick(count)
  }

  render() {
    const { count } = this.state
    const {
      theme,
      label,
      decrementUnit,
      incrementUnit,
    } = this.props

    return (
      <div className={theme.Counter}>
        <div className={theme['Counter-label']}>
          {label}
        </div>
        <div className={theme['Counter-label-active']}>
          <span
            role="presentation"
            onClick={this.decrement}
            className={cn(
              'bar',
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
            role="presentation"
            onClick={this.increment}
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
