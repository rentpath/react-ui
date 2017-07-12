// @flow

import React, { Component } from 'react'
import classNames from 'classnames'
import themed from 'react-themed'

@themed(/^Button/, {
  pure: true,
})

export default class Button extends Component {
  props: {
    size: string,
    color: string,
    theme: Object,
    className: string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      size,
      color,
      theme,
      className,
      ...props
    } = this.props

    return (
      <button
        {...props}
        className={classNames(
          className,
          theme.Button,
          theme[`Button-${color}`],
          theme[`Button-${size}`],
        )}
      />
    )
  }
}
