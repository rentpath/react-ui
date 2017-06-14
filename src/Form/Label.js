import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'

@themed('Label', {
  pure: true,
})

export default class Label extends Component {
  static propTypes = {
    text: PropTypes.string,
    theme: PropTypes.object,
    children: PropTypes.node,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      text,
      theme,
      className,
      children,
      ...props
    } = this.props

    const classnames = classNames(
      className,
      theme.Label,
    )

    return (
      <label {...props} className={classnames}>
        {text}{children}
      </label>
    )
  }
}
