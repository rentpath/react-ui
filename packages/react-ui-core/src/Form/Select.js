import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import themed from 'react-themed'
import autobind from 'autobind-decorator'

@themed(/^Select/, {
  pure: true,
})

export default class Select extends Component {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })),
    variant: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    theme: {},
    options: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.value !== nextProps.value) {
      this.setValue(nextProps.value)
    }
  }

  get value() {
    return this.state.value
  }

  get children() {
    const { children, options } = this.props

    if (children) return children

    return options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))
  }

  get controlledProps() {
    if (this.props.defaultValue) return {}

    return {
      onChange: this.handleChange,
      value: this.state.value,
    }
  }

  setValue(value) {
    this.setState({ value })
  }

  @autobind
  handleChange(event) {
    const { defaultValue, onChange } = this.props

    if (defaultValue) return

    this.setValue(event.target.value)
    if (onChange) onChange(event)
  }

  render() {
    const {
      theme,
      options,
      className,
      variant,
      value,
      ...props
    } = this.props

    return (
      <select
        {...props}
        {...this.controlledProps}
        className={classNames(
          className,
          theme.Select,
          variant && theme[`Select-${variant}`],
        )}
      >
        {this.children}
      </select>
    )
  }
}
