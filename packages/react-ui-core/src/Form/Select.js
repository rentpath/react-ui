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
  }

  static defaultProps = {
    theme: {},
    options: [],
  }

  render() {
    const {
      theme,
      options,
      className,
      ...props
    } = this.props

    let children

    if (props.children) {
      children = props.children
    } else {
      children = options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))
    }

    return (
      <select
        {...props}
        className={classNames(
          className,
          theme.Select,
        )}
      >
        {children}
      </select>
    )
  }
}
