import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Text extends PureComponent {
  static propTypes = {
    tag: PropTypes.string,
    theme: PropTypes.object,
  }

  static defaultProps = {
    tag: 'div',
    theme: {},
  }

  render() {
    const {
      tag: Tag,
      theme,
      className,
      ...props
    } = this.props

    return (
      <Tag
        {...props}
        className={classNames(
          className,
          theme.Text,
        )}
      />
    )
  }
}
