import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classnames from 'classnames'
import { Text } from '../Text'

@themed(/^(Counter|Label|Text)/, {
  pure: true,
})

export default class Counter extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    label: PropTypes.string,
    onClick: PropTypes.func,
    decrementOperator: PropTypes.element,
    incrementOperator: PropTypes.element,
    text: PropTypes.func,
    count: PropTypes.number,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
    onClick: () => {},
    decrementOperator: <span>-</span>,
    incrementOperator: <span>+</span>,
    count: 0,
    step: 1,
    min: 0,
    max: 10,
  }

  constructor(props) {
    super(props)

    this.state = {
      count: this.props.count,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.count !== nextProps.count) {
      this.setState({ count: nextProps.count })
    }
  }

  get renderLabel() {
    const { theme, label } = this.props

    return (
      <div className={theme.Label}>
        {label}
      </div>
    )
  }

  text(count) {
    const { text } = this.props

    if (text) return text(count)
    return count
  }

  handleClick(count) {
    this.setState({ count })
    this.props.onClick(count)
  }

  increment() {
    const { max, step } = this.props
    const count = this.state.count + step

    if (count <= max) this.handleClick(count, 'INC')
  }

  decrement() {
    const { min, step } = this.props
    const count = this.state.count - step

    if (count >= min) this.handleClick(count, 'DEC')
  }

  render() {
    const { count } = this.state
    const {
      theme,
      label,
      className,
      decrementOperator,
      incrementOperator,
      onClick,
      text,
      step,
      min,
      max,
      ...props
    } = this.props

    return (
      <div
        className={
          classnames(
            theme.Counter,
            className
          )}
        {...props}
      >
        {label && this.renderLabel}
        <div className={theme.Counter_Controls}>
          <span
            role="presentation"
            onClick={this.decrement}
            className={
              classnames(
                theme.Counter_Button,
                theme.Counter_Decrement,
              )
            }
            data-tid="counter-decrement"
          >
            {decrementOperator}
          </span>
          <Text data-tid="counter-text">
            {this.text(count)}
          </Text>
          <span
            role="presentation"
            onClick={this.increment}
            className={
              classnames(
                theme.Counter_Button,
                theme.Counter_Increment,
              )
            }
            data-tid="counter-increment"
          >
            {incrementOperator}
          </span>
        </div>
      </div>
    )
  }
}
