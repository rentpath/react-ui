import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'

export default class RangeSlider extends Component {
  static propTypes = {
    theme: PropTypes.object,
    onChange: PropTypes.func,
    formatHeader: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
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

    const header = props.formatHeader && props.formatHeader(this.state.value)

    // https://github.com/davidchin/react-input-range
    return (
      <div>
        {header}
        <InputRange
          {...props}
          onChange={this.onChange}
          value={this.state.value}
          classNames={theme}
        />
      </div>
    )
  }
}
