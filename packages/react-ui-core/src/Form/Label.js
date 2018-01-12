import React, { Component } from 'react'
import PropTypes from 'prop-types'
import themed from 'react-themed'
import classNames from 'classnames'

@themed(/^Label/, {
  pure: true,
})

export default class Label extends Component {
  static propTypes = {
    className: PropTypes.string,
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
      /* eslint-disable jsx-a11y/label-has-for */
      <label
        data-tid="label"
        {...props}
        className={classnames}
      >
        {text}{children}
      </label>
    )
  }
}
