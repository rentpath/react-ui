import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'
import classnames from 'classnames'
import omit from 'lodash/omit'
import isEqual from 'lodash/isEqual'
import themed from 'react-themed'

@themed('*', {
  pure: true,
})

export default class RangeSlider extends PureComponent {
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

    this.setSliderTheme(props.theme)
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.value, nextProps.value)) {
      this.setState({ value: nextProps.value })
    }

    if (this.props.theme !== nextProps.theme) {
      this.setSliderTheme(nextProps.theme)
    }
  }

  onChange(value) {
    if (this.props.onChange) this.props.onChange(value)
    this.setState({ value })
  }

  setSliderTheme(theme) {
    // NOTE: this ensures react-input-range plays nicely with theme object
    this.sliderTheme = omit(theme, '_getCss', '_insertCss', '_getContent')
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
          classNames={this.sliderTheme}
        />
      </div>
    )
  }
}
