import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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
    const { theme, label, decrementUnit, incrementUnit } = this.props
    return (
      <div className={theme.Counter}>
        <div className={theme['Counter-label']}>
          {label}
        </div>
        <div className={theme['Counter-label-active']}>
          <span
            onClick={() => this.handleClick(this.state.count + 1)}
            className={classNames('incrementUnit', theme['Counter-content'], theme['Counter-shape'])}
          >
            {this.props.decrementOperator}
          </span>
          <span
            className={classNames(theme['Counter-content'], theme['Counter-count-content'], theme['Counter-Shape'])}
          >{`${decrementUnit} ${count} ${incrementUnit}`}</span>
          <span
            onClick={() => this.handleClick(this.state.count - 1)}
            className={classNames('decrementUnit', theme['Counter-content'], theme['Counter-shape'])}
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
  handleClick: function noop() {},
  decrementOperator: <span>-</span>,
  incrementOperator: <span>+</span>,
}

Counter.propTypes = {
  decrementOperator: PropTypes.element,
  incrementOperator: PropTypes.element,
  theme: PropTypes.object,
  count: PropTypes.number,
  decrementUnit: PropTypes.string,
  incrementUnit: PropTypes.string,
  handleClick: PropTypes.func,
}
