import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import themed from 'react-themed'
import InputRange from 'react-input-range'

export default class RangeSlider extends Component {
  static propTypes = {
    theme: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.number,
  }

  static defaultProps = {
    theme: {},
    value: 0,
  }

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = { value: props.value }
  }

  onChange(value) {
    if (this.props.onChange) this.props.onChange(value)
    this.setState({ value })
  }

  render() {
    const {
      theme,
      onChange,
      ...props
    } = this.props

    // https://github.com/davidchin/react-input-range
    return (
      <InputRange
        {...props}
        onChange={this.onChange}
        value={this.state.value}
        classNames={theme}
      />
    )
  }
}
