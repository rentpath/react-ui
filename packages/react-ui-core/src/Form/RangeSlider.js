import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'
import classnames from 'classnames'
import themed from 'react-themed'

@themed(/^RangeSlider/, {
  pure: true,
})

export default class RangeSlider extends Component {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
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
      className,
      onChange,
      formatHeader,
      ...props
    } = this.props

    return (
      <div className={
        classnames(
          theme.RangeSlider,
          className,
        )}
      >
        {formatHeader && formatHeader(this.state.value)}
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
