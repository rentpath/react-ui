import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import themed from 'react-themed'

@themed(/^Textarea/, {
  pure: true,
})

export default class Textarea extends Component {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    theme: {},
  }

  render() {
    const {
      theme,
      className,
      ...props
    } = this.props

    return (
      <textarea
        {...props}
        className={classNames(
          className,
          theme.Textarea,
        )}
      />
    )
  }
}
