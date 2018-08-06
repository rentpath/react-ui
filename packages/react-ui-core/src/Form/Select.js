import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import themed from 'react-themed'

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
  }

  static defaultProps = {
    theme: {},
    options: [],
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

  render() {
    const {
      theme,
      options,
      className,
      variant,
      ...props
    } = this.props

    return (
      <select
        {...props}
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
